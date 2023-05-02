import "./style.css";

import { getUserWithPosts } from "./api.js";
import { userPageComponent, loadingComponent } from "./components.js";
import { State } from "./state.js";

const root = document.querySelector("#app");

async function render() {
  root.innerHTML = loadingComponent();
  const data = await getUserWithPosts(5);
  root.innerHTML = userPageComponent(data);

  const leftButton = document.getElementById("leftButton");
  const rightButton = document.getElementById("rightButton");

  leftButton.addEventListener("click" ()=> appState.prevUser());
  rightButton.addEventListener("click" ()=> appState.nextUser());
}

render();
