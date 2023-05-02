import "./style.css";

const root = document.querySelector("#app");
setInterval(()=> {
  root.innerText = `${counter}`;
  counter++;
},1000);