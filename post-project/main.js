import './style.css';

// import { api, getUser, getUserPosts } from "./api.js";

import {getUserWithPosts} from "./api.js";
const root = document.querySelector("#app");

root.innerHTML = `Loading....`;

getUserWithPosts(5).then((data)=>{
    root.innerHTML = `<pre>${JSON.stringify(data, null, 2)} </pre>`
});

function userPageComponent({user,posts}){
    return `
    <div class= "post">
    <h3> ${user.title}<h3>
    <p> ${user.body}</p>
    </div>

}

function postComponent(post) {
    return `
    <div class= "post">
    <h3> ${post.title}<h3>
    <p> ${post.body}</p>
    </div>
    `
}

// document.querySelector('#app').innerHTML = `hello world`;


// api("/users").then(console.log);

// getUser(5).then(console.log);
// getUserPosts(5).then(console.log);


