const accessKey = "$2b$10$UCR5pY3bYVRurm1buipeou0nfl3djdbmiIyhCu7UL2TocDf.wxYhy";

const url = "https://api.jsonbin.io/v3/b/";
const binID = "639af5fc01a72b59f2312a95";

let postsHTML= document.getElementById("posts");

fetch(url+binID,{
    headers:{
        "X-Access-Key": accessKey,
    }
}).then((response)=>response.json()).then((posts)=>{
    for (const postsKey in posts.record) {
        postsHTML.innerHTML +=
            `<div style="width: 350px;">
                <p>${posts.record[postsKey].id}</p>
                <p>${posts.record[postsKey].title}</p>
                <p>${posts.record[postsKey].body}</p>
            </div>`
    }
})

 function fetchPosts(path) {
    const request = new Request(path);
    const response =  fetch(request);

    return  response.json();
}


let str = "";
let allPosts = [];
let itemsList = document.getElementById("posts");

fetch(url+binID,{
    headers:{
        "X-Access-Key": accessKey,
    }
}).then((post) => {
    post.forEach((posts) => {
        str +=
            `<div class="posts">
        	    <p class="posts">${posts.id}</p>
        	    <p class="posts-name">${posts.title}</p>
        	    <p class="posts-body">${posts.body}</p>
      	    </div>`;
        allPosts.push(posts);
    });
    itemsList.innerHTML = str;
});


let descList = document.getElementsByClassName("posts-container");

function dynamicSearch(searchQuery) {

    for (let i = 0; i < descList.length; i++) {
        allPosts;
        if (allPosts[i].body.includes(searchQuery)) {
            descList[i].style.display = "block";
        } else {
            descList[i].style.display = "none";
        }
    }
}