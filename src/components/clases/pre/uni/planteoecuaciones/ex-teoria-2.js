import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import ExWrapper from "../../../../ex-wrapper";
import { ReactComponent as Img1 } from "../../../../../static/img/pre/uni/planteoecuaciones/teoria/0120003.svg";
const TeoriaStyled = styled.div`
  max-height: 100vh;
  width: 100%;
  margin: auto;
  padding-top: 3%;
  .teoria1{
   
  }
`;
const ExTeoria2 = () => {
  var basicTimelineTeoria = anime.timeline({
    autoplay: false,
    easing: "linear",
  });
  useEffect(() => {
    basicTimelineTeoria
      .add({
        targets: ".teoria2 #ecuacion1",
        opacity: [0,1],
        translateY: [200,0],
        translateX: [-400,0],
        duration: 1000,
        delay: 500,
      }).add({
        targets: ".teoria2 #ecuacion2",
        opacity: [0,1],
        translateY: [200,0],
        translateX: [400,0],
        duration: 1000,
        delay: 9000,
      }).add({
        targets: ".teoria2 #ecuacion3",
        opacity: [0,1],
        translateY: [200,0],
        translateX: [-400,0],
        duration: 1000,
        delay: 9000,
      }).add({
        targets: ".teoria2 #ecuacion4",
        opacity: [0,1],
        translateY: [200,0],
        translateX: [400,0],
        duration: 1000,
        delay: 12000,
      }).add({
        targets: ".teoria2 #ecuacion5",
        opacity: [0,1],
        translateY: [200,0],
        translateX: [-400,0],
        duration: 1000,
        delay: 12000,
      }).add({
        targets: ".teoria2 #ecuacion6",
        opacity: [0,1],
        translateY: [200,0],
        translateX: [400,0],
        duration: 1000,
        delay: 12000,
      }).add({
        targets: ".teoria2 #ecuacion7",
        opacity: [0,1],
        translateY: [200,0],
        translateX: [-400,0],
        duration: 1000,
        delay: 10000,
      });
  }, [basicTimelineTeoria]);
  return (
    <ExWrapper>
      <TeoriaStyled>
        <Img1 className="teoria2" />
      </TeoriaStyled>
    </ExWrapper>
  );
};

export default ExTeoria2;