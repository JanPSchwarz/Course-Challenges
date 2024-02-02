import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Jan" isCoach={true} />
    </div>
  );
}

function Greeting({ name, isCoach }) {
  return <h1>Hello, {isCoach ? `${name}!` : "du bist kein Coach!"}</h1>;
}
