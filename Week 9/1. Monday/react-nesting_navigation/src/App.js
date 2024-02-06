import "./styles.css";

import Header from "./Components/Header";
import Navigation from "./Components/Nav";
import Link from "./Components/Link";
import Logo from "./Components/Logo";
import Avatar from "./Components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
