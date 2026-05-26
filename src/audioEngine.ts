import * as Tone from "tone";
import {
  parseTabToInstrumentLines,
  toPlayableSymbols,
  type InstrumentLine,
} from "./tabParsing";

// @ts-ignore
import hihat from "../audio/hihat.mp3";
// @ts-ignore
import kick from "../audio/kick.mp3";
// @ts-ignore
import snare from "../audio/snare.mp3";
// @ts-ignore
import tom1 from "../audio/tom1.mp3";
// @ts-ignore
import tom2 from "../audio/tom2.mp3";
// @ts-ignore
import tom3 from "../audio/tom3.mp3";

/**
 * Calculate the least common multiple of an array of numbers.
 * Ensures all instrument patterns loop at a synchronized boundary.
 */
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
const lcmArray = (arr: number[]): number =>
  arr.length === 0 ? 1 : arr.reduce(lcm);

/**
 * Creates a Tone.Loop for a single instrument line. Instead of scheduling
 * individual events for each hit, we fire a loop at every 16th note interval
 * and check if that position should play. This is more reliable and has less
 * scheduler overhead than many individual events.
 */
const lineToLoop = (
  line: InstrumentLine,
  unifiedLoopLength: number,
  sampler: Tone.Sampler | null,
): Tone.Loop => {
  if (!sampler) return new Tone.Loop(() => {}, "16n");

  const playableSymbols = toPlayableSymbols(line.pattern);
  const barLengthTicks = playableSymbols.length;

  if (barLengthTicks === 0) return new Tone.Loop(() => {}, "16n");

  // Create a loop that fires every 16th note at the unified loop length
  let noteIndex = 0;
  const loop = new Tone.Loop((time) => {
    // Map the note index back to the pattern position, cycling at barLength
    const patternPosition = noteIndex % barLengthTicks;
    const symbol = playableSymbols[patternPosition];

    if (symbol === "x" || symbol === "o") {
      // Tone.Sampler.triggerAttack handles polyphony internally
      sampler.triggerAttack("C4", time);
    }

    // Increment for next iteration, wrapping at unifiedLoopLength
    noteIndex = (noteIndex + 1) % unifiedLoopLength;
  }, "16n");

  return loop;
};

export class AudioEngine {
  private hasPrewarmed = false;
  private prewarmTask: Promise<void> | null = null;
  private loops: Array<Tone.Loop> = [];

  // Sampler instances owned by AudioEngine, created fresh on each start(),
  // disposed on stop() to prevent memory leaks from repeated play cycles
  private hihatSampler: Tone.Sampler | null = null;
  private snareSampler: Tone.Sampler | null = null;
  private kickSampler: Tone.Sampler | null = null;
  private tom1Sampler: Tone.Sampler | null = null;
  private tom2Sampler: Tone.Sampler | null = null;
  private tom3Sampler: Tone.Sampler | null = null;

  constructor() {}

  private initializeSamplers(): void {
    // Create fresh sampler instances. Tone.Sampler handles polyphony natively
    // with proper voice management.
    this.hihatSampler = new Tone.Sampler(
      { C4: hihat },
      { onload: () => {} },
    ).toDestination();
    this.snareSampler = new Tone.Sampler(
      { C4: snare },
      { onload: () => {} },
    ).toDestination();
    this.kickSampler = new Tone.Sampler(
      { C4: kick },
      { onload: () => {} },
    ).toDestination();
    this.tom1Sampler = new Tone.Sampler(
      { C4: tom1 },
      { onload: () => {} },
    ).toDestination();
    this.tom2Sampler = new Tone.Sampler(
      { C4: tom2 },
      { onload: () => {} },
    ).toDestination();
    this.tom3Sampler = new Tone.Sampler(
      { C4: tom3 },
      { onload: () => {} },
    ).toDestination();
  }

  private selectSampler(instrument: string): Tone.Sampler | null {
    return (
      {
        hh: this.hihatSampler,
        s: this.snareSampler,
        b: this.kickSampler,
        bd: this.kickSampler,
        t1: this.tom1Sampler,
        t2: this.tom2Sampler,
        t3: this.tom3Sampler,
      }[instrument.toLowerCase()] ?? null
    );
  }

  async prewarm() {
    if (this.hasPrewarmed) return;
    if (this.prewarmTask) return this.prewarmTask;

    this.prewarmTask = (async () => {
      // Resume the audio context and ensure all sample assets are loaded once.
      await Tone.start();
      await Tone.loaded();

      // Increase the lookahead so the scheduler queues events further in
      // advance. The default 100ms is too tight—any main-thread hiccup
      // (GC, layout, paint) causes the scheduler to miss its window,
      // producing audible gaps. 1000ms gives ample buffer.
      Tone.getContext().lookAhead = 1; // 1 second

      this.hasPrewarmed = true;
    })();

    try {
      await this.prewarmTask;
    } finally {
      this.prewarmTask = null;
    }
  }

  async start({ tab }: { tab: string }) {
    // Always resume the AudioContext directly from the user gesture (the Start
    // button click). On Android Firefox the context can re-suspend after a page
    // visibility change, and Firefox's user-gesture token is less reliably
    // propagated through nested async chains than in Chrome/Safari. Calling
    // Tone.start() here guarantees we resume from the most direct gesture
    // possible. It is idempotent: a no-op when the context is already running.
    await Tone.start();

    // Finish any remaining prewarm work (sample loading, lookAhead config).
    await this.prewarm();

    this.loops.forEach((loop) => loop.dispose());
    this.disposeSamplers();

    // Create fresh sampler instances for this play cycle
    this.initializeSamplers();

    // Wait for the newly created sampler buffers to load before playback.
    // Without this, triggerAttack can throw when a buffer is still pending.
    await Tone.loaded();

    const tabLines = parseTabToInstrumentLines(tab);

    // Calculate the unified loop length as the LCM of all bar lengths
    // This ensures all instruments loop at exactly the same time boundary
    const barLengths = tabLines.map(
      (line) => toPlayableSymbols(line.pattern).length,
    );
    const unifiedLoopLength = lcmArray(barLengths);

    // Create loops, all firing on 16n at the unified boundary
    this.loops = tabLines.map((line) => {
      const sampler = this.selectSampler(line.instrument);
      return lineToLoop(line, unifiedLoopLength, sampler);
    });

    // Start all loops at the beginning
    this.loops.forEach((loop) => loop.start(0));

    Tone.getTransport().start();
  }

  private disposeSamplers(): void {
    if (this.hihatSampler) {
      this.hihatSampler.dispose();
      this.hihatSampler = null;
    }
    if (this.snareSampler) {
      this.snareSampler.dispose();
      this.snareSampler = null;
    }
    if (this.kickSampler) {
      this.kickSampler.dispose();
      this.kickSampler = null;
    }
    if (this.tom1Sampler) {
      this.tom1Sampler.dispose();
      this.tom1Sampler = null;
    }
    if (this.tom2Sampler) {
      this.tom2Sampler.dispose();
      this.tom2Sampler = null;
    }
    if (this.tom3Sampler) {
      this.tom3Sampler.dispose();
      this.tom3Sampler = null;
    }
  }

  stop() {
    this.loops.forEach((loop) => loop.dispose());
    this.loops = [];
    this.disposeSamplers();
    Tone.getTransport().stop();
  }

  public get state() {
    return Tone.getTransport().state;
  }
}
