import "./style.css";

// import { api, getUser, getUserPosts } from "./api.js";

import { getUserWithPosts } from "./api.js";
const root = document.querySelector("#app");

root.innerHTML = `Loading....`;

getUserWithPosts(5).then((data) => {
  root.innerHTML = userPageComponent(data);
});

function userPageComponent({ user, post }) {
  return `
    <div class="bg-green-500">
    <div class="post">
    <h3> ${user.name}</h3>
    <p> ${user.phone}</p>
    </div>
    </div>
`;
}

// function postComponent(post) {
//     return `
//     <div class="post">
//     <h3>${post.title}</h3>
//     <p> ${post.body}</p>
//     </div>
//     `
// }

// document.querySelector('#app').innerHTML = `hello world`;

// api("/users").then(console.log);

// getUser(5).then(console.log);
// getUserPosts(5).then(console.log);
