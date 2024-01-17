console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement("article");
const paragraph = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

article.classList.add("post");
paragraph.classList.add("post__content");
footer.classList.add("post__footer");
span.classList.add("post__username");
button.classList.add("post__button");

// button.setAttribute("data-js", "like__buttonTwo");

paragraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
span.textContent = "@username";
button.textContent = "♥ Like";

article.append(paragraph, footer, span, button);

document.body.append(article);

button.addEventListener("click", handleLikeButtonClick);

// const likeButtonTwo = document.querySelector('[data-js="like__buttonTwo"]');

// likeButtonTwo.addEventListener("click", handleLikeButtonClick);
