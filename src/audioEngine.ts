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

export class AudioEngine {
  constructor(private loops: Array<Tone.Loop> = []) {}

  start({ tab }: { tab: string }) {
    // TODO parse tab
    this.loops = [
      new Tone.Loop((time) => {
        kickPlayer.start(time);
      }, Tone.Time({ "4n": 2 }).valueOf()).start(),
      new Tone.Loop((time) => {
        snarePlayer.start(time);
      }, Tone.Time({ "4n": 2 }).valueOf()).start("4n"),
      new Tone.Loop((time) => {
        hihatPlayer.start(time);
      }, Tone.Time({ "8n": 1 }).valueOf()).start(),
    ];
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
