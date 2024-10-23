import * as Tone from "tone";
import { AudioEngine } from "./audioEngine";

const textAreaEditor =
  document.querySelector<HTMLTextAreaElement>("#drum-tab")!;
const buttonReset = document.querySelector<HTMLButtonElement>("#button-reset")!;
const buttonStartStop =
  document.querySelector<HTMLButtonElement>("#button-start-stop")!;
const bpmDisplay = document.querySelector<HTMLSpanElement>("#bpm-display")!;
const rangeBPM = document.querySelector<HTMLInputElement>("#bpm")!;
const volumeInput = document.querySelector<HTMLInputElement>("#volume")!;

const DEFAULT_INPUT = `HH|x-x-x-x-x-x-x-x-||
 S|----o-------o---||
 B|o-----o---o-----||
   1 + 2 + 3 + 4 +`;

// Check for queryParam on page load
const sequence = decodeURIComponent(
  new URLSearchParams(window.location.search).get("sequence") ?? DEFAULT_INPUT
);
textAreaEditor.value = sequence;

// Synchronize changes to the textarea to the queryparams
textAreaEditor.addEventListener("input", () => {
  history.pushState(
    null,
    "",
    `${window.location.pathname}?sequence=${encodeURIComponent(
      textAreaEditor.value
    )}`
  );
});

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

volumeInput.addEventListener("input", (event: any) => {
  if (!event.target) return;
  // We set -30 to -Infinity to enable muting audio at the minimum slider value.
  const targetVolume =
    event.target.value === "-30" ? -Infinity : parseInt(event.target.value);
  Tone.getDestination().volume.setValueAtTime(targetVolume, Tone.now());
});
