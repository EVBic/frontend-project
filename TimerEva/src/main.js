import "./style.css";

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
let intervalId;

function startTimer() {
  let totalSeconds = 0;
  intervalId = setInterval(() => {
    totalSeconds++;
    const minutes = Math.floor(totalSeconds/60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    timerElement.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  timerElement.textContent = "00:00";
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
