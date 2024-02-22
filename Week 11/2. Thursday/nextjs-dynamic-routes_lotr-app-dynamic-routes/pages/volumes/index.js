import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Head from "next/head";

export default function Volumes() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  console.log(getRandomElement(volumes).slug);

  return (
    <>
      <Head>
        <title>List of Movies</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.name}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
        {/* <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li> */}
      </ul>
      <Link href={`/volumes/${getRandomElement(volumes).slug}`}>
        Random Book
      </Link>
    </>
  );
}
