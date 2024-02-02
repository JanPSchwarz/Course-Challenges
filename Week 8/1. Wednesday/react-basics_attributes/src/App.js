import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Text of my Choice</h2>
      <label htmlFor="input">Text:</label>
      <input id="input" type="text"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Wikipedia:Hauptseite"
        target="_blank"
        rel="noreferrer">
        Wikipedia Artikel
      </a>
    </article>
  );
}
