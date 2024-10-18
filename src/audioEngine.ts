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

const audioSources = {
  hihat,
  kick,
  snare,
  tom1,
  tom2,
  tom3,
};

const kickPlayer = new Tone.Player(audioSources.kick).toDestination();
const snarePlayer = new Tone.Player(audioSources.snare).toDestination();
const hihatPlayer = new Tone.Player(audioSources.hihat).toDestination();

const lineToLoops = (
  tabLine: string,
  player: Tone.Player
): Array<Tone.Loop> => {
  // Slice off leading and trailing junk
  const trimmedLine = tabLine.slice(3, 19);
  return trimmedLine.split("").flatMap((symbol, index) => {
    if (["x", "o"].includes(symbol)) {
      return new Tone.Loop((time) => {
        player.start(time);
      }, Tone.Time({ "1m": 1 }).valueOf()).start(
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
    // Standardize newlines just in case
    tab.replace(/(\r\n)|\r|\n/g, "\n");

    const tabLines = tab.split(/\n/g);
    this.loops = tabLines.flatMap((tabLine) => {
      if (tabLine.startsWith("HH")) {
        return lineToLoops(tabLine, hihatPlayer);
      }
      if (tabLine.startsWith(" S")) {
        return lineToLoops(tabLine, snarePlayer);
      }
      if (tabLine.startsWith(" B")) {
        return lineToLoops(tabLine, kickPlayer);
      }
      return [];
    });
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
