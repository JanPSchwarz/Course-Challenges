import "./Card.css";

export default function Card({ name, backgroundColor }) {
  return <p className="card" style={backgroundColor={backgroundColor}}>{name}</p>;
}
