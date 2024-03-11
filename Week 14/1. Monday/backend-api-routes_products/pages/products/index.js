import useSWR from "swr";

export default function ProductList() {
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

  const { data, isLoading } = useSWR("api/products", fetcher);

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  if (!data) {
    return <h1>failed</h1>;
  }

  console.log(data);

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          {product.name}, Price: {product.price} $
        </li>
      ))}
    </ul>
  );
}
