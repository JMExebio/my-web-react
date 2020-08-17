import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";
import { ReactComponent as Ejemplo } from "../../static/img/ar/t01/slider/ejemplo.svg";
import Ejemplo1 from "../../static/img/ar/t01/slider/ejemplo1.svg";
import Ejemplo2 from "../../static/img/ar/t01/slider/ejemplo2.svg";
import Ejemplo3 from "../../static/img/ar/t01/slider/ejemplo3.svg";
import Imagen1 from "../../static/img/ar/t01/slider/img-ejemplo1.png";
import Imagen2 from "../../static/img/ar/t01/slider/img-ejemplo2.png";
import Imagen3 from "../../static/img/ar/t01/slider/img-ejemplo3.png";
const TercerSliderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 7%;
  padding: 2% 2%;
  .columna1 {
    display: grid;
    grid-template-rows: 10% 20% 30% 20%;
    grid-template-areas: "ejem" "vacio1" "ejem2" "vacio2";
    grid-row-gap: 10%;
  }
  .columna2 {
    display: grid;
    grid-template-rows: 10% 40% 40%;
    grid-template-areas: "vacio3" "ejem1" "ejem3";
    grid-row-gap: 10%;
  }
  .ejemplo1 {
    grid-area: ejem1;
    width: 100%;
    margin-bottom: 10%;
  }
  .ejemplo2 {
    grid-area: ejem2;
    width: 100%;
  }
  .ejemplo3 {
    grid-area: ejem3;
    width: 100%;
  }
  .img-ejemplo1 {
    width: 100%;
  }
  .img-ejemplo2 {
    width: 100%;
  }
  .img-ejemplo3 {
    width: 100%;
  }
`;

const EjemploStyled = styled(Ejemplo)`
  grid-area: ejem;
  width: 50%;
`;
function TercerSlider({ slider }) {
  useEffect(() => {
    console.log(slider);
    if (slider === 2) {
      var basicTimeline = anime.timeline();
      basicTimeline
        .add({
          targets: ".ejemplo",
          opacity: [0, 1],
          duration: 1000,
          easing: "easeInOutSine",
          delay: 300,
        })
        .add({
          targets: ".enunciado1",
          translateX: [-1440, 0],
          duration: 2000,
          easing: "easeInOutSine",
          delay: 300,
        })
        .add({
          targets: ".img-ejemplo1",
          opacity: [0, 1],
          easing: "easeInOutSine",
          duration: 2000,
          delay: 2000,
        })
        .add({
          targets: ".enunciado2",
          translateX: [1440, 0],
          easing: "easeInOutSine",
          duration: 2000,
          delay: 2000,
        })
        .add({
          targets: ".img-ejemplo2",
          opacity: [0, 1],
          easing: "easeInOutSine",
          duration: 2000,
          delay: 2000,
        })
        .add({
          targets: ".enunciado3",
          translateX: [-1440, 0],
          easing: "easeInOutSine",
          duration: 2000,
          delay: 2000,
        })
        .add({
          targets: ".img-ejemplo3",
          opacity: [0, 1],
          easing: "easeInOutSine",
          duration: 2000,
          delay: 2000,
        });
    }
  }, [slider]);
  return (
    <TercerSliderStyled>
      <div className="columna1">
        <EjemploStyled className="ejemplo" />
        <div className="ejemplo2">
          <div className="enunciado2">
            <img src={Ejemplo2} alt="" />
          </div>
          <div className="img-ejemplo2">
            <img src={Imagen2} alt="" />
          </div>
        </div>
      </div>
      <div className="columna2">
        <div className="ejemplo1">
          <div className="enunciado1">
            <img src={Ejemplo1} alt="" />
          </div>
          <div className="img-ejemplo1">
            <img src={Imagen1} alt="" />
          </div>
        </div>
        <div className="ejemplo3">
          <div className="enunciado3">
            <img src={Ejemplo3} alt="" />
          </div>
          <div className="img-ejemplo3">
            <img src={Imagen3} alt="" />
          </div>
        </div>
      </div>
    </TercerSliderStyled>
  );
}

export default TercerSlider;
