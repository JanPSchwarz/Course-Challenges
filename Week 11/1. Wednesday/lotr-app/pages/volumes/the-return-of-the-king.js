import React from "react";
import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function theReturnOfTheKing() {
  console.log(volumes);
  const book = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  console.log(book);

  return (
    <div>
      <h1>{book.title}</h1>
      <Image
        src={book.cover}
        alt="book three cover"
        width={400}
        height={600}
      ></Image>
      <p>{book.description}</p>
      <ul>
        {book.books.map((book) => (
          <li key={book.title}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Link href="../volumes">Back to Volumes-Overview</Link>
    </div>
  );
}
