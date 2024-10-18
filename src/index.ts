import * as Tone from "tone";
import { AudioEngine } from "./audioEngine";

const textAreaEditor =
  document.querySelector<HTMLTextAreaElement>("#drum-tab")!;
const buttonReset = document.querySelector<HTMLButtonElement>("#button-reset")!;
const buttonStartStop =
  document.querySelector<HTMLButtonElement>("#button-start-stop")!;
const bpmDisplay = document.querySelector<HTMLSpanElement>("#bpm-display")!;
const rangeBPM = document.querySelector<HTMLInputElement>("#bpm")!;

const DEFAULT_INPUT = `HH|x-x-x-x-x-x-x-x-||
 S|----o-------o---||
 B|o-------o-------||
   1 + 2 + 3 + 4 +`;
buttonReset.addEventListener(
  "click",
  () => (textAreaEditor.value = DEFAULT_INPUT)
);

const audioEngine = new AudioEngine();
buttonStartStop.addEventListener("click", async () => {
  if (audioEngine.state === "started") {
    audioEngine.stop();
    buttonStartStop.textContent = "Start";
  } else {
    audioEngine.start({ tab: textAreaEditor.value });
    buttonStartStop.textContent = "Stop";
  }
});

rangeBPM.addEventListener("input", (event: any) => {
  if (!event.target) return;
  bpmDisplay.textContent = `Current BPM: ${event.target.value}`;
  Tone.getTransport().bpm.value = parseInt(event.target.value);
});
