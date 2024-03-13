import useSWR from "swr";

export default function HomePage() {
  async function fetcher(url) {
    const response = await fetch(url);

    if (!response) {
      const error = new Error(`An error occured...`);
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }

    return response.json();
  }

  const { data, isLoading } = useSWR("api/random-character", fetcher);

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  const { name, lastName, age, profession } = data;
  return (
    <>
      <h1>Introduction</h1>
      <p>
        Hello there, my name is {name} {lastName} and I'm {age} years old. For a
        living i work as a {profession}.
      </p>
    </>
  );
}
