import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";
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
    url("./img/img-desktop.png"), bottom, left;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 100%;
  .hero-content {
    display: grid;
    grid-template-columns: 320px;
    justify-content: center;
    grid-row-gap: 1em;
    padding-top: 8em;
    padding-bottom: 1.5em;
  }
  @media screen and (min-width: 768px) {
    .hero-content {
      grid-template-columns: 200px 408px;
      grid-column-gap: 15px;
      align-items: center;
      justify-content: center;
      grid-template-areas:
        "logo logotipo"
        "description description";
    }
  }
  @media screen and (min-width: 1024px) {
    .hero-content {
      grid-template-columns: 270px 500px;
      grid-column-gap: 64px;
    }
  }
`;

function Hero() {
  useEffect(() => {
    var basicTimeline = anime.timeline();
    basicTimeline
      .add({
        targets: ".hero-logo",
        rotateY: 1080,
        duration: 2000,
        easing: "easeInOutSine",
        delay: 100,
      })
      .add(
        {
          targets: ".hero-logotipo",
          scale: [0, 1],
          duration: 2000,
          offset: -1000,
          easing: "easeInOutSine",
        },
        "-=1000"
      )
      .add(
        {
          targets: ".hero-description",
          opacity: [0, 1],
          duration: 2000,
          easing: "easeInOutSine",
        },
        "-=500"
      );
  }, []);
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
