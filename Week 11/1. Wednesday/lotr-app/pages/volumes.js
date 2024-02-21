import React from "react";
import Link from "next/link";
import { introduction, volumes } from "../lib/data";

export default function Volumes() {
  console.log(volumes);
  return (
    <div>
      <h1>List of all LOTR-Movies:</h1>
      <p>{introduction}</p>
      <h2>All Volumes:</h2>
      <ul>
        {volumes.map((volume) => (
          <li>
            <Link href="/volumes/the-fellowship-of-the-ring">
              {volume.title}
            </Link>
          </li>
        ))}
        {/* <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            {volumes[0].title}
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">{volumes[1].title}</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">{volumes[2].title}</Link>
        </li> */}
      </ul>
    </div>
  );
}
