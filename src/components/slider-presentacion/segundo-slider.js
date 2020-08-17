import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import { ReactComponent as SubTitle } from "../../static/img/ar/t01/slider/subtitle1.svg";
import { ReactComponent as CardRA } from "../../static/img/ar/t01/slider/card-RA.svg";
import CardSeleeRA from "../../static/img/ar/t01/slider/card-seleeRA.svg";
const SegundoSlyderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "subtitle subtitle"
    "card1  card2";
  grid-column-gap: 5%;
  grid-row-gap: 15%;
  margin-top: 2em;
  .card-selee {
    width: 100%;
    margin-top: 10%;
  }
`;
const SubTitleStyled = styled(SubTitle)`
  grid-area: subtitle;
  margin: auto;
  width: 60%;
`;
const CardRAStyled = styled(CardRA)`
  width: 80%;
  margin: auto 0 auto auto;
`;
function SegundoSlyder({slider}) {
  useEffect(() => {
      if(slider===1){
         var basicTimeline = anime.timeline();
    basicTimeline
      .add({
        targets: ".subtitle1",
        translateX: [-1440, 0],
        duration: 1000,
        easing: "easeInOutSine",
        delay: 300,
      })
      .add({
        targets: ".cardRA",
        translateX: [1440, 0],
        duration: 2000,
        easing: "easeInOutSine",
        delay: 200,
      })
      .add({
        targets: ".card-selee",
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 1000,
        delay: 3000,
      })
      }
    
  }, [slider]);
  return (
    <SegundoSlyderStyled>
      <SubTitleStyled  className="subtitle1"/>
      <CardRAStyled className="cardRA"/>
      <div className="card-selee">
        <img src={CardSeleeRA} alt="" />
      </div>
    </SegundoSlyderStyled>
  );
}

export default SegundoSlyder;
