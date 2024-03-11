import useSWR from "swr";
import { useRouter } from "next/router";

export default function DetailedProducts() {
  async function fetcher(url) {
    const response = await fetch(url);

    if (!response) {
      const error = new Error(`An error occured...`);
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return response.json();
  }
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`../api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Is loading...</h1>;
  }

  if (!data) {
    return <h1>Fail</h1>;
  }

  console.log(data);

  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.price}$</p>
    </>
  );
}
