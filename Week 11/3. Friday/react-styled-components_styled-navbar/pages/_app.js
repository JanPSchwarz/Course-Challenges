import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";
import { Roboto, IBM_Plex_Mono } from "@next/font/google";
import { Roboto_Mono } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ibm_Plex_Mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
});

const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto}>
      <GlobalStyle />
      <StyledNav className={ibm_Plex_Mono.className}>
        <StyledList>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </StyledList>
        <p className={roboto_mono}>Wie sieht diese Schrift aus?</p>
      </StyledNav>
      <Component {...pageProps} />
    </main>
  );
}
