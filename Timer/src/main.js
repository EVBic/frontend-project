import "./style.css";

const root = document.querySelector("#app");
let counter = 0;
setInterval(()=> {
  root.innerText = `${counter}`;
  counter++;
},1000);