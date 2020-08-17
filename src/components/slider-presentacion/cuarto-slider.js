import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import { ReactComponent as SubTitle } from "../../static/img/ar/t01/slider/subtitle2.svg";
import CardRG from "../../static/img/ar/t01/slider/card-RG.svg";
import CardSeleeRG from "../../static/img/ar/t01/slider/card-seleeRG.svg";
const CuartoSlyderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "subtitle subtitle"
    "card1  card2";
  grid-column-gap: 5%;
  grid-row-gap: 10%;
  margin-top: 2em;
  .card-selee {
    width: 100%;
    margin-top: 10%;
  }
  .cardRG{
    width: 80%;
  margin: auto 0 auto auto;
  }
`;
const SubTitleStyled = styled(SubTitle)`
  grid-area: subtitle;
  margin: auto;
  width: 60%;
`;
function CuartoSlider({ slider }) {
  useEffect(() => {
    if (slider === 3) {
      var basicTimeline = anime.timeline();
      basicTimeline
        .add({
          targets: ".subtitle2",
          translateX: [-1440, 0],
          duration: 2000,
          easing: "easeInOutSine",
          delay: 300,
        })
        .add({
          targets: ".cardRG",
          translateX: [1440, 0],
          duration: 2000,
          easing: "easeInOutSine",
          delay: 300,
        })
        .add({
          targets: ".card-selee2",
          opacity: [0, 1],
          easing: "easeInOutSine",
          duration: 1000,
          delay: 300,
        });
    }
  }, [slider]);
  return (
    <CuartoSlyderStyled>
      <SubTitleStyled className="subtitle2" />
      <div className="cardRG">
        <img src={CardRG} alt="" />
      </div>
      <div className="card-selee2">
        <img src={CardSeleeRG} alt="" />
      </div>
    </CuartoSlyderStyled>
  );
}

export default CuartoSlider;
