import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>A new article!!</h1>
      <p>A new paragraph rendered by React</p>
    </article>
  );
}
