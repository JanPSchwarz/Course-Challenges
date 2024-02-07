import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌banana", color: "yellow" },
    { id: 2, name: "🥭mango", color: "green" },
    { id: 3, name: "🍊orange", color: "orange" },
    { id: 4, name: "❓pitaya", color: "red" },
    { id: 5, name: "🍇grape", color: "red" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} backgroundColor={fruit.color} />
      ))}
    </div>
  );
}
