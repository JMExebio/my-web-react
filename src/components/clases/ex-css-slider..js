import React from "react";
import styled from "styled-components";
import ExWrapper from "../ex-wrapper";

const CSSSliderStyled = styled.div`
  padding-top: 18vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 3%;
  .enunciado {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 1fr;
    grid-gap: 10%;
  }
  .solucion {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 1fr;
    grid-gap: 10%;
  }
  .title {
    &-prob {
      width: 30%;
      path {
        fill: #cd08d1;
      }
    }
    &-sol {
      width: 30%;
       
    }
  }
  .problem {
    margin: auto;
  }
  .problem-solution {
    margin: auto;
  }

  @media screen and (min-width: 600px) {
    padding-top: 10vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3%;
    .problem {
    }
    .problem-solution {
    }
  }
  @media screen and (min-width: 1080px) {
    padding-top: 7vw;
  }
`;
function ExCSSSlider({ children }) {
  return (
    <ExWrapper>
      <CSSSliderStyled>{children}</CSSSliderStyled>
    </ExWrapper>
  );
}

export default ExCSSSlider;
