import React from "react";
import styled from "styled-components";
import { ReactComponent as Circulo } from "../../static/img/ar/t01/slider/fondo-button.svg";
import { ReactComponent as ButtonNext } from "../../static/img/ar/t01/slider/icon-next.svg";
import { ReactComponent as ButtonPrev } from "../../static/img/ar/t01/slider/icon-prev.svg";

const SliderButtonStyled = styled.div`
  position: relative;
  .slider-button {
    position: absolute;
    z-index: 2;
    top: 30%;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    width: 40%;
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
    right: 13%;
  }
  .prev {
    right: 50%;
  }
  .circulo {
    width: 90%;
  }
`;
function SliderButton({ prev, next }) {
  return (
    <SliderButtonStyled>
      <Circulo className="circulo" />
      <ButtonNext onClick={next} className="slider-button next" />
      <ButtonPrev onClick={prev} className="slider-button prev" />
    </SliderButtonStyled>
  );
}
export default SliderButton;
