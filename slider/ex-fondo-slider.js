import React from "react";
import styled from "styled-components";
import ExButtonSlider from "./ex-button-slider";
import Logo from "../../static/img/slider/logo2-146x32.png"
const SliderFondoStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  .slider {
    &-content {
      width: 100%;
    }
    &-fondo {
      width: 100%;
      display: grid;
      grid-template-rows: 25% 75%;
    }
    &-logo {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      padding: 2em;
    }
  }
`;
function ExFondoSlider({ children, next }) {
  return (
    <SliderFondoStyled>
      <div className="slider-content">{children}</div>
      <div className="slider-fondo">
        <div className="slider-logo">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="slider-circulo">
            <ExButtonSlider next={next} />
        </div>
      </div>
    </SliderFondoStyled>
  );
}

export default ExFondoSlider;
