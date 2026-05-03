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

const DEFAULT_TAB_INPUT = `HH|x-x-x-x-x-x-x-x-||
 S|----o-------o---||
 B|o-----o---o-----||
   1 + 2 + 3 + 4 +`;

const DEFAULT_BPM = 80;

// Check for drum sequence queryParam on page load
const sequence =
  new URLSearchParams(window.location.search).get("sequence") ??
  DEFAULT_TAB_INPUT;
textAreaEditor.value = sequence;

// Check for bpm queryParam on page load
const extractBpm = (urlBpm: string | null) => {
  const bpmValue = parseInt(urlBpm ?? "");
  return isNaN(bpmValue) || bpmValue < 40 || bpmValue > 200
    ? DEFAULT_BPM
    : bpmValue;
};
const bpm = extractBpm(new URLSearchParams(window.location.search).get("bpm"));
Tone.getTransport().bpm.value = bpm;
rangeBPM.value = bpm.toString();
bpmDisplay.textContent = `Current BPM: ${bpm}`;

const constructUrl = (sequence: string, bpm: number) => {
  return `${window.location.pathname}?sequence=${encodeURIComponent(
    sequence,
  )}&bpm=${bpm}`;
};

const synchronizeStateToQueryParams = () => {
  history.replaceState(
    null,
    "",
    constructUrl(textAreaEditor.value, parseInt(rangeBPM.value)),
  );
};

const syncUIFromState = () => {
  handleTextAreaEditorInput();
  bpmDisplay.textContent = `Current BPM: ${rangeBPM.value}`;
};

const handleTextAreaEditorInput = () => {
  const longestLine =
    textAreaEditor.value
      .replace(/(\r\n)|\r|\n/g, "\n")
      .split(/\n/g)
      .sort((a, b) => b.length - a.length)[0] ?? "";

  textAreaEditor.cols = longestLine.length + 2;

  // Synchronize changes to the textarea to the queryparams
  synchronizeStateToQueryParams();
};

// Dry run the handler here since we've either loaded the default input or a queryparam input
syncUIFromState();

textAreaEditor.addEventListener("input", handleTextAreaEditorInput);

buttonReset.addEventListener("click", () => {
  textAreaEditor.value = DEFAULT_TAB_INPUT;
  syncUIFromState();
});

const audioEngine = new AudioEngine();
document.addEventListener(
  "pointerdown",
  () => {
    void audioEngine.prewarm();
  },
  { once: true },
);

buttonStartStop.addEventListener("click", async () => {
  await audioEngine.prewarm();

  if (audioEngine.state === "started") {
    audioEngine.stop();
    buttonStartStop.textContent = "Start";
  } else {
    audioEngine.start({ tab: textAreaEditor.value });
    buttonStartStop.textContent = "Stop";
  }
});

rangeBPM.addEventListener("input", (event: Event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;

  bpmDisplay.textContent = `Current BPM: ${target.value}`;
  Tone.getTransport().bpm.value = parseInt(target.value);

  // Synchronize changes to the bpm to the queryparams
  synchronizeStateToQueryParams();
});

volumeInput.addEventListener("input", (event: Event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;

  // We set -30 to -Infinity to enable muting audio at the minimum slider value.
  const targetVolume =
    target.value === "-30" ? -Infinity : parseInt(target.value);
  Tone.getDestination().volume.setValueAtTime(targetVolume, Tone.now());
});
