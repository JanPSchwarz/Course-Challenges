async function cats() {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_80QHtDPhcDJgMWfVMivtOm4RkbsEB7Op11NNA8NkImpLpcuUvYoyb12eDy5cLmnb"
  );
  const data = await response.json();

  console.table(data);
}

cats();

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
  spanOne.textContent = `${cat.breed_name}`;

  const listItemTwo = document.createElement("li");
  const spanTwo = document.createElement("span");

  listItemTwo.textContent = "Origin:";
  spanTwo.textContent = `${cat.country}`;

  const listItemThree = document.createElement("li");
  const spanThree = document.createElement("span");

  listItemThree.textContent = "Temperament:";
  spanThree.textContent = `${cat.temperament}`;

  const listItemFour = document.createElement("li");
  const spanFour = document.createElement("span");

  listItemFour.textContent = "Description:";
  spanFour.textContent = `${cat.description}`;

  const listItemFive = document.createElement("li");
  const spanFive = document.createElement("span");
  const link = document.createElement("a");

  link.setAttribute("href", `${cat.wikipedia}`);
  link.textContent = "Wikipedia-Article";

  list.classList.add("cat-description");

  // Append: Assemble List

  listItemOne.append(spanOne);
  listItemTwo.append(listItemTwo);
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

  card.append(img, list);

  return card;
}

const root = document.getElementById("start-box");

function renderElement(element) {
  // Append Element to the Start-Box
  root.append(element);
}
