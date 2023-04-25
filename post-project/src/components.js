


export function userPageComponent({ user, posts }) {
  return `
    <div class="bg-green-500">
    <div class="post">
    <h3> ${user.name}</h3>
    <p> ${user.phone}</p>
    </div>
    </div>
    ${posts.map(postComponent).join("")}
`;
} 
export function postComponent(post) {
  return `
       <div class="m-2 p-5 rounded-md shadow-lg max-w-sm">
      <h3 class="text-lg font-bold mb-3">${post.title}</h3>
      <p class="text-left">${post.body}</p>
    </div>
  `;
}

export function loadingComponent(){
    return `<div class=" mx-auto loadingio-spinner-blocks-6qmnx4pzwob"><div class="ldio-79wh9khxz0h">
    <div style='left:38px;top:38px;animation-delay:0s'></div><div style='left:80px;top:38px;animation-delay:0.125s'></div><div style='left:122px;top:38px;animation-delay:0.25s'></div><div style='left:38px;top:80px;animation-delay:0.875s'></div><div style='left:122px;top:80px;animation-delay:0.375s'></div><div style='left:38px;top:122px;animation-delay:0.75s'></div><div style='left:80px;top:122px;animation-delay:0.625s'></div><div style='left:122px;top:122px;animation-delay:0.5s'></div>
    </div></div>
    <style type="text/css">
    @keyframes ldio-79wh9khxz0h {
      0% { background: #29c96c }
      12.5% { background: #29c96c }
      12.625% { background: #209070 }
      100% { background: #209070 }
    }
    .ldio-79wh9khxz0h div {
      position: absolute;
      width: 40px;
      height: 40px;
      background: #209070;
      animation: ldio-79wh9khxz0h 1s linear infinite;
    }
    .loadingio-spinner-blocks-6qmnx4pzwob {
      width: 200px;
      height: 200px;
      overflow: hidden;
      background: #ffffff;
    }
    .ldio-79wh9khxz0h {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(1);
      backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
    }
    .ldio-79wh9khxz0h div { box-sizing: content-box; }
    /* generated by https://loading.io/ */
    </style>`
}
