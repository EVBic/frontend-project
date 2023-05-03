import "./style.css";
function formatTime(seconds) {
  const reminderSeconds = seconds % 60;
  const minutes = (seconds - reminderSeconds) / 60;
  const formattedSeconds =
    reminderSeconds < 10 ? `0${reminderSeconds}` : reminderSeconds;
  return `${minutes}:${formattedSeconds}`;
}

const root = document.querySelector("#app");
const startBtn = document.getElementById("start-timer");
startBtn.addEventListener("click", startTimer);
function startTimer() {
  let counter = 10;
  root.innerText = formatTime(counter);
  startBtn.disabled = true;
  document.body.classList.add("bg-green-400");
  const timer = setInterval(() => {
    counter--;
    root.innerText = formatTime(counter);
    if (counter === 0) {
      clearInterval(timer);
      document.body.classList.add("bg-red-400");
      startBtn.disabled = false;
    }
  }, 1000);
}
