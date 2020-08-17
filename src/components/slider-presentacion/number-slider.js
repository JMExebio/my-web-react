import React from "react";
import styled from "styled-components";
import { ReactComponent as Circulo } from "../../static/img/ar/t01/slider/fondo-button.svg";
const NumberSliderStyled = styled.div`
  width: 100%;
  height: 100%;
`;
function NumberSlider({ slider, total }) {
  return (
    <NumberSliderStyled>
      <p className="item">
        {slider}/{total}
      </p>
    </NumberSliderStyled>
  );
}

export default NumberSlider;
