fetch("www.google.com")
    .then((response) => { return response.json(); })
    .then((data) => { console.log(data.user.name); })
    .catch((err) => { console.error("Error. Request faild"); });

let quoteElement = document.querySelector('.quote');
const button = document.querySelector(".header__btn");

function updateQuote() {
    fetch("https://api.kanye.rest")
        .then((res) => { return res.json(); })
        .then((data) => {
            console.log(data);
            quoteElement.textContent = data.quote;
        });


}
button.addEventListener("click", updateQuote);

// create markup for the post
function createPostMarkup(post) {
    return `
      <div class="post">
        <h3 class="post__title"><b>${post.title}</b></h3>
        <p class="post__text">${post.body}</p>
      </div>
    `;
}

// insert markup into the DOM
function addPostToDOM(container, markup) {
    container.insertAdjacentHTML("afterbegin", markup);
}

const container = document.querySelector('.container');

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();
        })
        .then((posts) => {
            console.log(posts);
            posts.forEach(post => {
                addPostToDOM(container, createPostMarkup(post));

            });
        });
}

function createPost(newPost) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: newPost.title,
            body: newPost.body
        }),
        headers: {
            'content-type': "application/json; charset=UTF-8"
        }
    })
        .then((response) => {
            response.json();
        })
        .then((posts) => {
            console.log(posts);
            posts.forEach(post => {
                addPostToDOM(container, createPostMarkup(post))
            });
        });
}


// getPosts();
// createPost();

const form = document.forms.search;
const content = document.querySelector(".content");
const result = document.querySelector(".content__result");
const error = document.querySelector(".content__error");
const spinner = document.querySelector(".spinner");

form.addEventListener("submit", function submit(e) {
    e.preventDefault();
    search(form.elements.entity.value, form.elements.entityId.value).then((res) => {
        if (res.ok) {
            console.log("Everything is ok");
            return res.json();
        }
        return Promise.reject(res.status);
    })
        .then((res) => {
            console.log(res);
            renderResult(res.name);
        })
        .catch((err) => {
            console.log(`Error ${err}`);
            renderError(`Error ${err}`);
        });
});

function search(entity, entityId) {
    return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}`);
}
function renderResult(text) {
    result.textContent = text;
    error.textContent = "";
    function renderError(err) {
        result.textContent = "";
        error.textContent = err;
    }
}