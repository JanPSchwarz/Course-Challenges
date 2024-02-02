import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy={false} happy="😏" sad="😭" />
    </div>
  );
}

function Smiley({ isHappy, happy, sad }) {
  return <h1>{isHappy ? `${happy}` : `${sad}`}</h1>;
}

/* //return isHappy ? <h1>😏</h1> : <h1>😭</h1>; */
