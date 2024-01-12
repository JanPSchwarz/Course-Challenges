console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

// const addition = document.querySelector("#addition");
// const substraction = document.querySelector("#subtraction");
// const multiplication = document.querySelector("#multiplication");
// const division = document.querySelector("#division");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  let result;

  const inputA = data.numberA;
  const inputB = data.numberB;

  const operator = data.operator;

  // --v-- write your code here --v--
  if (data.operator === "addition") {
    result = add(Number(inputA), Number(inputB));
  } else if (data.operator === "subtraction") {
    result = subtract(Number(inputA), Number(inputB));
  } else if (data.operator === "multiplication") {
    result = multiply(Number(inputA), Number(inputB));
  } else {
    result = divide(Number(inputA), Number(inputB));
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
