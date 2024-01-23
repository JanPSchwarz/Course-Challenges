console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const starWars = await fetch(url);
  console.log(starWars);
  const data = await starWars.json();
  console.log(data);

  console.log(data.results[2].eye_color);
}

fetchData();
