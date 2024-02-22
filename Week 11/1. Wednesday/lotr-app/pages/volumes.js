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
          <li key={volume.name}>
            <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
