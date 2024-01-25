// async function fetchCats() {
//   const url =
//     "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_80QHtDPhcDJgMWfVMivtOm4RkbsEB7Op11NNA8NkImpLpcuUvYoyb12eDy5cLmnb";

//   const response = await fetch(url);
//   const data = await response.json();

//   // const catData = data[0].breeds;

//   console.log(data);

//   return data;
// }

// fetchCats();

function Card(cat) {
  // Create Card and Image

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("src", `${cat.url}`);
  img.setAttribute("alt", "random-cat-image");

  // Create List: Item for Item and Content

  const list = document.createElement("ul");

  const listItemOne = document.createElement("li");
  const spanOne = document.createElement("span");

  listItemOne.textContent = "Breed-Name:";
  spanOne.textContent = `${cat.breeds[0].name}`;

  const listItemTwo = document.createElement("li");
  const spanTwo = document.createElement("span");

  listItemTwo.textContent = "Origin:";
  spanTwo.textContent = `${cat.breeds[0].origin}`;

  const listItemThree = document.createElement("li");
  const spanThree = document.createElement("span");

  listItemThree.textContent = "Temperament:";
  spanThree.textContent = `${cat.breeds[0].temperament}`;

  const listItemFour = document.createElement("li");
  const spanFour = document.createElement("span");

  listItemFour.textContent = "Description:";
  spanFour.textContent = `${cat.breeds[0].description}`;

  const listItemFive = document.createElement("li");
  const spanFive = document.createElement("span");
  const link = document.createElement("a");

  link.setAttribute("href", `${cat.breeds[0].wikipedia_url}`);
  link.textContent = "Wikipedia-Article";
  link.setAttribute("target", "_blank");

  list.classList.add("cat-description");

  const divider = document.createElement("div");
  divider.classList.add("divider");

  // Append: Assemble List

  listItemOne.append(spanOne);
  listItemTwo.append(spanTwo);
  listItemThree.append(spanThree);
  listItemFour.append(spanFour);
  spanFive.append(link);
  listItemFive.append(spanFive);

  list.append(
    listItemOne,
    listItemTwo,
    listItemThree,
    listItemFour,
    listItemFive
  );

  card.append(img, list, divider);

  return card;
}

// ** Appends Card to corresponding DIV

const root = document.getElementById("start-box");

function renderElement(element) {
  // Append Element to the Start-Box
  root.append(element);
}

async function fetchAndRenderCats() {
  const url =
    "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_80QHtDPhcDJgMWfVMivtOm4RkbsEB7Op11NNA8NkImpLpcuUvYoyb12eDy5cLmnb";

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  root.textContent = "";

  data.forEach((cat) => {
    const card = Card(cat);
    renderElement(card);
    console.log(cat);
  });

  const note = document.querySelector(".note");
  note.removeAttribute("hidden");
}

const button = document.querySelector('[data-js="button"]');

button.addEventListener("click", () => fetchAndRenderCats());
