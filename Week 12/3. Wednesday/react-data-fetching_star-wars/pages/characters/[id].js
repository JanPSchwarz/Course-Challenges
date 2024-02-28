import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error(`An error occurred while fetching data.`);
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function Character() {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;

  const { data, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );

  if (isLoading) return <h1>Is Loading...</h1>;

  console.log(data);

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
