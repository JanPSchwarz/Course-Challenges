import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import styled from "styled-components";

const StyledSection = styled.section`
  border: 1px solid black;
  padding: 5px;
  margin: 10px;
`;

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  function handleRating(number) {
    let array = [];
    for (let i = 0; i < number; i++) {
      array.push("⭐️");
    }
    return array;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>

      {data.reviews.map((review, index) => (
        <StyledSection key={review._id}>
          <h2>Review Nr. {index + 1}</h2>
          <h3>{review.title}</h3>
          <p>{review.text}</p>
          <p>Rating: {handleRating(review.rating)}</p>
        </StyledSection>
      ))}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
