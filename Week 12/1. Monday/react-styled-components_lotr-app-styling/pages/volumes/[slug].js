import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";
// import LeftArrow from "../../icons/left-arrow.svg";

const StyledBookSection = styled.section`
  background: ${({ $color }) => $color};
  /* box-shadow: var(--box-shadow-book); */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

const StyledImage = styled(Image)`
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 20px;
  color: var(--color-smoke);
`;

const StyledListItem = styled.li`
  display: block;
  padding: 10px;
  color: white;
  font-size: 0.9rem;
`;

const StyledStrong = styled.strong`
  display: block;
  padding: 20px 0px;
  font-size: 1.2rem;
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <StyledBookSection $color={volume.color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <StyledListItem key={title}>
              {ordinal} <StyledStrong>{title}</StyledStrong>
            </StyledListItem>
          ))}
        </StyledList>
        <StyledImage
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledBookSection>
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
