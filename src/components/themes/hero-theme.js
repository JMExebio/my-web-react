import React from "react";
import styled from "styled-components";
import { ReactComponent as Razones } from "../../static/img/ar/t01/g_razones.svg";
import { ReactComponent as Proporciones } from "../../static/img/ar/t01/g_proporciones.svg";
import { ReactComponent as SRGE } from "../../static/img/ar/t01/g_srge.svg";
import Wrapper from "../wrapper";
const HeroThemesStyled = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  background: linear-gradient(180deg, #141415 0%, #140f34 100%);
  padding-top: 5em;
  padding-bottom: 2em;
  .hero {
    &-grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 2em;
      margin: auto;
      .img {
        margin: auto;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .hero {
      &-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 2em;
        grid-template-areas:
          "hero_img1 hero_img2"
          "hero_img3 hero_img3";
      }
      &-img3 {
        grid-area: hero_img3;
      }
    }
  }
`;
function HeroThemes() {
  return (
    <HeroThemesStyled>
      <Wrapper>
        <div className="hero-grid">
          <Razones className="hero-img1 img" />
          <Proporciones className="hero-img2 img" />
          <SRGE className="hero-img3 img" />
        </div>
      </Wrapper>
    </HeroThemesStyled>
  );
}

export default HeroThemes;
