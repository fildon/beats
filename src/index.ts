import * as Tone from "tone";

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

    // const synth = new Tone.Synth().toDestination();
    // synth.triggerAttackRelease("C4", "8n");

    const player = new Tone.Player(
      "./drum-samples_acoustic-kit_kick.mp3"
    ).toDestination();
    player.autostart = true;
  } else {
    // TODO stop playing
    state = "paused";
    buttonStartStop.textContent = "Start";
  }
});
