console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  //   event.target.reset();
  //   event.target.elements.firstName.focus();
  console.log(data);

  const age = event.target.elements.age.value;
  const badness = event.target.elements.badness.value;

  const ageBadnessSum = Number(age) + Number(badness);

  const name = event.target.elements.firstName.value;

  console.log(`The age-badness-sum of ${name} is ${ageBadnessSum}`);

  //   console.log("The age-badness-sum of " + name + " is " + ageBadnessSum + ".");

  event.target.reset();
  event.target.elements.firstName.focus();
});
