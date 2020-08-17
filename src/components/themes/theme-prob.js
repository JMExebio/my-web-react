import React from "react";
import styled from "styled-components";
import Problema from "../../static/img/ar/t01/problemas/prob01.svg";
import Problema2 from "../../static/img/ar/t01/problemas/prob02.svg";
import Wrapper from "../wrapper";
import ButtonSolucion from "./button-solucion"
const ThemeProbStyled = styled.div`
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  padding-bottom: 2em;
  .title-prob {
    text-align: center;
    font-size: 48px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: yellow;
    margin: 0;
    padding: 0.5em 0;
  }
  .themes {
    &-prob-content {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2em;
      img {
        width: 320px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .themes {
      &-prob-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        img {
          width: 320px;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .themes {
      &-prob-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        img {
          width: 520px;
        }
      }
    }
  }
`;
function ThemeProb() {
  return (
    <ThemeProbStyled>
      <Wrapper>
        <h2 className="title-prob">Problemas</h2>
        <div className="themes-prob-content">
          <img src={Problema} alt="" />
          <ButtonSolucion />
          <img src={Problema2} alt="" />
          <ButtonSolucion />
        </div>
      </Wrapper>
    </ThemeProbStyled>
  );
}

export default ThemeProb;
