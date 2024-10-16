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

let state = "paused"; // or "playing"
buttonStartStop.addEventListener("click", () => {
  if (state === "paused") {
    // TODO start playing
    state = "playing";
    buttonStartStop.textContent = "Stop";

    const player = new Tone.Player(audioSources.kick).toDestination();
    player.autostart = true;
  } else {
    // TODO stop playing
    state = "paused";
    buttonStartStop.textContent = "Start";
  }
});
