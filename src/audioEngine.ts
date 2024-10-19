import * as Tone from "tone";

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

const kickPlayer = new Tone.Player(kick).toDestination();
const snarePlayer = new Tone.Player(snare).toDestination();
const hihatPlayer = new Tone.Player(hihat).toDestination();
const tom1Player = new Tone.Player(tom1).toDestination();
const tom2Player = new Tone.Player(tom2).toDestination();
const tom3Player = new Tone.Player(tom3).toDestination();

const selectPlayer = (instrument: string) =>
  ({
    hh: hihatPlayer,
    s: snarePlayer,
    // Kick is aliased as both "b" and "bd"
    b: kickPlayer,
    bd: kickPlayer,
    t1: tom1Player,
    t2: tom2Player,
    t3: tom3Player,
  }[instrument.toLowerCase()]);

type InstrumentLine = { instrument: string; pattern: string };

const parseLine = (tabLine: string): InstrumentLine | null => {
  // Split a drum tab line into its instrument and its pattern
  // e.g. HH|x-x-x-x-|| turns into ["HH", "x-x-x-x-", ...]
  const [instrument, pattern] = tabLine
    .split("|")
    .map((string) => string.trim());
  return instrument && pattern ? { instrument, pattern } : null;
};

const parseTabToInstrumentLines = (tab: string): InstrumentLine[] => {
  // Standardize newlines just in case
  tab.replace(/(\r\n)|\r|\n/g, "\n");
  const tabLines = tab.split(/\n/g);
  return tabLines.map(parseLine).filter((line) => !!line);
};

const lineToLoops = (line: InstrumentLine): Array<Tone.Loop> => {
  const player = selectPlayer(line.instrument);
  if (!player) return [];
  const loopInterval = line.pattern.length;
  return line.pattern.split("").flatMap((symbol, index) => {
    if (["x", "o"].includes(symbol)) {
      return new Tone.Loop((time) => {
        player.start(time);
      }, Tone.Time({ "16n": loopInterval }).valueOf()).start(
        Tone.Time({ "16n": index }).valueOf()
      );
    } else {
      return [];
    }
  });
};

export class AudioEngine {
  constructor(private loops: Array<Tone.Loop> = []) {}

  start({ tab }: { tab: string }) {
    const tabLines = parseTabToInstrumentLines(tab);
    this.loops = tabLines.flatMap(lineToLoops);
    Tone.getTransport().start();
  }

  stop() {
    this.loops.forEach((loop) => loop.stop());
    Tone.getTransport().stop();
    Tone.getTransport().state;
  }

  public get state() {
    return Tone.getTransport().state;
  }
}
