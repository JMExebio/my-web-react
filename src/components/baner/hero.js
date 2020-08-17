import React from "react";
import styled from "styled-components";
import Wrapper from "../wrapper";
import Logo from "./logo";
import Logotipo from "./logotipo";
import Description from "./description";

const HeroStyled = styled.section`
  background: linear-gradient(
      180deg,
      rgba(20, 20, 21, 0.7) 0%,
      rgba(20, 15, 52, 0.7) 100%
    ),
    url("./img/img-desktop.png"), bottom,left;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 100%;
  .hero-content {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    grid-row-gap: 1em;
    padding-top: 8em;
    padding-bottom: 1.5em;
  }
  @media screen and (min-width: 768px) {
    .hero-content {
      grid-template-columns: 270px 498px;
      grid-column-gap: 64px;
      align-items: center;
      justify-content: center;
      grid-template-areas:
        "logo logotipo"
        "description description";
    }
  }
`;

function Hero() {
  return (
    <HeroStyled>
      <Wrapper>
        <div className="hero-content">
          <Logo />
          <Logotipo />
          <Description />
        </div>
      </Wrapper>
    </HeroStyled>
  );
}

export default Hero;
