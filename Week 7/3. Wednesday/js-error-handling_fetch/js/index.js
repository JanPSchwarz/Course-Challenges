console.clear();

const userElement = document.querySelector(".user");

async function getUser(url) {
  const response = await fetch(url);

  // Error-Handling when user not existing

  if (!response.ok) {
    errorText.textContent =
      "Error: User doesn't exist! Please select another User.";
    userElement.textContent = "Here should be a User information.";
  } else {
    errorText.textContent = "";
  }

  // Error-Handling when Link not vali
  try {
    const json = await response.json();
    return json.data;
  } catch (error) {
    errorText.textContent = "Network-Error: Unvalid Homepage-link";
    userElement.textContent = "Here should be a Homepage.";
  }
}

const errorText = document.querySelector(".error");

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  })
);
