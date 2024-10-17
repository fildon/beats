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

const textAreaEditor =
  document.querySelector<HTMLTextAreaElement>("#drum-tab")!;
const buttonReset = document.querySelector<HTMLButtonElement>("#button-reset")!;
const buttonStartStop =
  document.querySelector<HTMLButtonElement>("#button-start-stop")!;

const DEFAULT_INPUT = `HH|x-x-x-x-x-x-x-x-||
 S|----o-------o---||
 B|o-------o-------||
   1 + 2 + 3 + 4 +`;

buttonReset.addEventListener(
  "click",
  () => (textAreaEditor.value = DEFAULT_INPUT)
);

let state: "playing" | "paused" = "paused";

const kickPlayer = new Tone.Player(audioSources.kick).toDestination();
const kickLoop = new Tone.Loop((time) => {
  kickPlayer.start(time);
}, Tone.Time({ "4n": 2 }).valueOf());

const snarePlayer = new Tone.Player(audioSources.snare).toDestination();
const snareLoop = new Tone.Loop((time) => {
  snarePlayer.start(time);
}, Tone.Time({ "4n": 2 }).valueOf());

const hihatPlayer = new Tone.Player(audioSources.hihat).toDestination();
const hihatLoop = new Tone.Loop((time) => {
  hihatPlayer.start(time);
}, Tone.Time({ "8n": 1 }).valueOf());

buttonStartStop.addEventListener("click", async () => {
  if (state === "paused") {
    state = "playing";
    buttonStartStop.textContent = "Stop";
    kickLoop.start();
    snareLoop.start("4n");
    hihatLoop.start();
    Tone.getTransport().start();
    Tone.getTransport().bpm.value = 80; // Make this configurable in the UI
  } else {
    state = "paused";
    buttonStartStop.textContent = "Start";
    kickLoop.stop();
    snareLoop.stop();
    hihatLoop.stop();
    Tone.getTransport().stop();
  }
});
