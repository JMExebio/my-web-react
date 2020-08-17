import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import Logo from "../../static/img/ar/t01/slider/logoV.svg";
import Logotipo from "../../static/img/ar/t01/slider/logotipoV.svg";
import Title from "../../static/img/ar/t01/slider/title.svg";
import Autor from "../../static/img/ar/t01/slider/autor.svg";

const PrimerSliderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "primera segunda"
    "tercera tercera"
    "cuarta cuarta";
  grid-column-gap: 10%;
  grid-row-gap: 15%;
  margin-top: 3%;
  .title {
    grid-area: tercera;
    width: 50%;
    margin: auto;
  }
  .autor {
    grid-area: cuarta;
    width: 50%;
    margin: auto;
  }
  .logo {
    width: 50%;
    margin: auto;
  }
  .logotipo {
    width: 70%;
    margin: auto auto auto 0;
  }
`;

function PrimerSlider({ slider }) {
  useEffect(() => {
    console.log(slider);
    var basicTimeline = anime.timeline();
    if (slider === 0) {
      basicTimeline
        .add({
          targets: ".logo",
          translateX: [-1440, 0],
          duration: 2000,
          easing: "easeInOutSine",
          delay: 300,
        })
        .add({
          targets: ".logotipo",
          translateX: [1440, 0],
          duration: 2000,
          easing: "easeInOutSine",
          delay: 300,
        })
        .add({
          targets: ".title",
          opacity: [0, 1],
          easing: "easeInOutSine",
          duration: 1000,
          delay: 300,
        })
        .add({
          targets: ".autor",
          opacity: [0, 1],
          easing: "easeInOutSine",
          duration: 1000,
          delay: 300,
        });
    }
  }, [slider]);
  return (
    <PrimerSliderStyled>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="logotipo">
        <img src={Logotipo} alt="" />
      </div>
      <div className="title">
        <img src={Title} alt="" />
      </div>
      <div className="autor">
        <img src={Autor} alt="" />
      </div>
    </PrimerSliderStyled>
  );
}

export default PrimerSlider;
