import "./styles.css";

import avatar from "./img/avatar.jpg";

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
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
