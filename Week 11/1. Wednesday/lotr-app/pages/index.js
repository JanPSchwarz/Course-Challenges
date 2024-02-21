import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the LOTR-App</h1>
      <Link href="volumes">Click me to get started! </Link>
    </div>
  );
}
