import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

console.log(volumes[0].cover);

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  margin: 50px 0;
`;

const StyledListItem = styled.li`
  text-decoration: none;
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100px;
  text-decoration: none;
  color: black;

  &:hover {
    color: green;
  }
`;

const StyledImage = styled(Image)`
  display: block;
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <StyledList>
        {volumes.map((volume) => (
          <StyledListItem key={volume.id}>
            <StyledLink href={`/volumes/${volume.slug}`}>
              <StyledImage
                src={volume.cover}
                alt="alt"
                width={100}
                height={150}
              />
              {volume.title}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}
