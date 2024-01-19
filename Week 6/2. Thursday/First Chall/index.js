const form = document.querySelector('[data-js="form"]');
const emailOutput = document.querySelector('[data-js="emailOutput"]');

// const personObject = {
//   firstName: "Jan",
//   lastName: "Schwarz",
// };

// const lowerCaseObject = personObject.map((person) => {
//   return person.toLowerCase();
// });

// console.log(lowerCaseObject);

function generateEmail(person) {
  const newEmail = `${person.firstName}.${person.lastName}@example.com`;

  return newEmail.toLowerCase();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const person = Object.fromEntries(formData);

  emailOutput.textContent = generateEmail(person);
});

const formTwo = document.querySelector('[data-js="formTwo"]');
const nameOutput = document.querySelector('[data-js="nameOutput"');

formTwo.addEventListener("submit", (event) => {
  event.preventDefault();

  const mail = event.target.elements.emailInput.value;

  nameOutput.innerText = generateName(mail);
});

// console.log(personObject);

// const mail = generateEmail(personObject);

// console.log(mail);

function generateName(email) {
  if (!email.includes("@")) {
    alert("@ is missing");
    return;
  } else {
    splitMail = email.split("@");
    firstPart = splitMail[0];
  }

  if (!firstPart.includes(".")) {
    alert(". is missing");
  } else {
    splitName = firstPart.split(".");
    firstName = splitName[0];
    lastName = splitName[1];
    const name =
      "First Name: " +
      firstName[0].toUpperCase() +
      firstName.substring(1) +
      "\nLast Name: " +
      lastName[0].toUpperCase() +
      lastName.substring(1);
    //     const name = "First Name:" + splitName[0] + " Last Name:" + splitName[1];
    return name;
  }
}

// console.log(generateName("jan.schwarz@example.com"));
