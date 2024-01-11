console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

tosCheckbox.addEventListener("click", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (tosCheckbox.checked) {
    // alert("Form submitted");
    showSuccessMessage();
  } else {
    showTosError();
    alert("Check conditions before submitting");
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  // alert("Form submitted");
});
