import React from "react";
import styled from "styled-components";
import { ReactComponent as Circulo } from "../../static/img/slider/fondo-button.svg";
import { ReactComponent as ButtonNext } from "../../static/img/slider/icon-next.svg";

const ButtonSliderStyled = styled.div`
  position: relative;
  .slider-button {
    position: absolute;
    z-index: 2;
    top: 18%;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    width: 60%;
    path {
      fill: #65c1df;
    }

    &:active {
      path {
        fill: #6eef31;
      }
    }
  }
  .next {
    right: 18%;
  }
  
  .circulo {
    width: 90%;
  }
`;
function ExButtonSlider({ next }) {
  return (
    <ButtonSliderStyled>
      <Circulo className="circulo" />
      <ButtonNext onClick={next} className="slider-button next" />
    </ButtonSliderStyled>
  );
}
export default ExButtonSlider;
