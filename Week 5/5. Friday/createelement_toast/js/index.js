console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

const alert = document.querySelector('[data-js="initial-alert"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault();

  alert.setAttribute("hidden", "");

  const listItemOne = document.createElement("li");
  const listItemTwo = document.createElement("li");

  listItemOne.textContent = "Prost!";
  listItemTwo.textContent = "Auf dich!";

  listItemOne.classList.add("toast-container__message");
  listItemTwo.classList.add("toast-container__message");

  toastContainer.append(listItemOne, listItemTwo);
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  event.preventDefault();

  toastContainer.innerHTML = "";
  location.reload();
});
