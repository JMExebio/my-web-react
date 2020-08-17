import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../static/img/ar/t01/slider/logoV.svg";
import { ReactComponent as Logotipo } from "../../static/img/ar/t01/slider/logotipoV.svg";
import SliderButton from "./slider-button";
const SliderFondoStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 75% 25%;
  .slider {
    &-content {
      width: 100%;
    }
    &-fondo {
      width: 100%;
      display: grid;
      grid-template-rows: 30% 70%;
    }
    &-logo {
      display: grid;
      grid-template-columns: 20% 76%;
      grid-column-gap: 4%;
      left: 0;
      align-items: center;
      svg {
        width: 60%;
      }
    }
  }
`;
function SliderFondo({ children, prev, next }) {
  return (
    <SliderFondoStyled>
      <div className="slider-content">{children}</div>
      <div className="slider-fondo">
        <div className="slider-logo">
          <div>
            <Logo />
          </div>
          <div>
            <Logotipo />
          </div>
        </div>
        <div className="slider-circulo">
          <SliderButton next={next} prev={prev} />
        </div>
      </div>
    </SliderFondoStyled>
  );
}

export default SliderFondo;
