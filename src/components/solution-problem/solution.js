import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";
import { ReactComponent as Problema } from "../../static/img/ar/t01/problemas/problema.svg";
import { ReactComponent as Solucion } from "../../static/img/ar/t01/problemas/solucion.svg";
import { ReactComponent as Enunciado } from "../../static/img/ar/t01/problemas/e01.svg";
import { ReactComponent as Claves } from "../../static/img/ar/t01/problemas/c01.svg";
import { ReactComponent as Resolucion } from "../../static/img/ar/t01/problemas/s01.svg";
import { ReactComponent as Play } from "../../static/img/ar/t01/problemas/btn-play.svg";
import { ReactComponent as Pause } from "../../static/img/ar/t01/problemas/btn-pause.svg";
import { ReactComponent as Restart } from "../../static/img/ar/t01/problemas/btn-restart.svg";
const SolutionStyled = styled.div`
  padding: 0 3%;
  height: 100vh;
  background: linear-gradient(180deg, #140f34 0%, #30193f 100%);
  display: grid;
  grid-template-columns: 40% 55%;
  grid-gap: 2%;
  .title {
    &-prob {
      width: 65%;
      margin: auto;
    }
    &-sol {
      width: 50%;
      margin: auto;
    }
  }
  .problem {
    display: block;
    height: 100%;
    &-enun {
      margin-bottom: 3%;
    }
    &-claves {
      .flecha {
        opacity: 0;
      }
    }
  }
  .btn-manejo {
    display: inline-flex;
    margin: 2%;
    .btn {
      margin: 5%;
      height: 40%;
      &:hover {
        background: #e19c5d;
        border-radius: 10px;
        path {
          fill: white;
        }
      }
    }
  }
`;
function Solution() {
  var basicTimeline = anime.timeline();
    function play() {
      basicTimeline.play();
    }
    function pause() {
      basicTimeline.pause();
    }
    function restart() {
      basicTimeline.restart();
    }
  useEffect(() => {
    basicTimeline
      .add({
        targets: ".problem .problem-enun",
        translateX: [-1440, 0],
        duration: 2000,
        easing: "easeInOutSine",
        delay: 200,
      })
      .add({
        targets: ".problem .problem-claves",
        translateX: [-1440, 0],
        duration: 2000,
        easing: "easeInOutSine",
        delay: 500,
      })
      .add({
        targets: ".title-sol",
        opacity: [0, 1],
        duration: 500,
        easing: "easeInOutSine",
        delay: 200,
      })
      .add({
        targets: ".problem-solution #line,.problem-solution path",
        autoplay: false,
        loop: true,
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 500,
        delay: (el, i) => {
          return i * 50;
        },
      })
      .add({
        targets: ".problem .problem-claves .flecha",
        opacity: 1,
        duration: 500,
        easing: "easeInOutSine",
        delay: 200,
      });
  }, [basicTimeline]);
  return (
    <SolutionStyled>
      <Problema className="title-prob" />
      <Solucion className="title-sol" />
      <div className="problem">
        <Enunciado className="problem-enun" />
        <Claves className="problem-claves" />
      </div>
      <Resolucion className="problem-solution" />
      <div className="btn-manejo">
        <Play onClick={play} className="btn" />
        <Pause onClick={pause} className="btn" />
        <Restart onClick={restart} className="btn" />
      </div>
    </SolutionStyled>
  );
}

export default Solution;
