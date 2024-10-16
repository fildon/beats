const textAreaEditor = document.querySelector("#drum-tab");
const buttonReset = document.querySelector("#button-reset");
const buttonStartStop = document.querySelector("#button-start-stop");

const DEFAULT_INPUT = `HH|x-x-x-x-x-x-x-x-||
 S|----o-------o---||
 B|o-------o-------||
   1 + 2 + 3 + 4 +`;

buttonReset.addEventListener(
  "click",
  () => (textAreaEditor.value = DEFAULT_INPUT)
);
