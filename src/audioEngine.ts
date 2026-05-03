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
 * Tone.Sampler handles polyphony natively with proper voice management.
 * This is more reliable than manual voice pooling.
 */
const hihatSampler = new Tone.Sampler(
  { C4: hihat },
  { onload: () => {} },
).toDestination();
const snareSampler = new Tone.Sampler(
  { C4: snare },
  { onload: () => {} },
).toDestination();
const kickSampler = new Tone.Sampler(
  { C4: kick },
  { onload: () => {} },
).toDestination();
const tom1Sampler = new Tone.Sampler(
  { C4: tom1 },
  { onload: () => {} },
).toDestination();
const tom2Sampler = new Tone.Sampler(
  { C4: tom2 },
  { onload: () => {} },
).toDestination();
const tom3Sampler = new Tone.Sampler(
  { C4: tom3 },
  { onload: () => {} },
).toDestination();

const selectSampler = (instrument: string): Tone.Sampler | null =>
  ({
    hh: hihatSampler,
    s: snareSampler,
    b: kickSampler,
    bd: kickSampler,
    t1: tom1Sampler,
    t2: tom2Sampler,
    t3: tom3Sampler,
  })[instrument.toLowerCase()] ?? null;

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
): Tone.Loop => {
  const sampler = selectSampler(line.instrument);
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

    if (["x", "o"].includes(symbol)) {
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

  constructor() {}

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

  start({ tab }: { tab: string }) {
    this.loops.forEach((loop) => loop.dispose());

    const tabLines = parseTabToInstrumentLines(tab);

    // Calculate the unified loop length as the LCM of all bar lengths
    // This ensures all instruments loop at exactly the same time boundary
    const barLengths = tabLines.map(
      (line) => toPlayableSymbols(line.pattern).length,
    );
    const unifiedLoopLength = lcmArray(barLengths);

    // Create loops, all firing on 16n at the unified boundary
    this.loops = tabLines.map((line) => lineToLoop(line, unifiedLoopLength));

    // Start all loops at the beginning
    this.loops.forEach((loop) => loop.start(0));

    Tone.getTransport().start();
  }

  stop() {
    this.loops.forEach((loop) => loop.dispose());
    this.loops = [];
    Tone.getTransport().stop();
  }

  public get state() {
    return Tone.getTransport().state;
  }
}
