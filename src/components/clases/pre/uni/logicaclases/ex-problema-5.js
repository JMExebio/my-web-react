import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../../static/img/pre/uni/logicaclases/0117107.svg";
import { ReactComponent as Problema } from "../../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../../static/img/pre/uni/logicaclases/0117207.svg";
import ExCSSSlider from "../../../ex-css-slider.";

function ExProblema5() {
  var basicTimelineSolucion = anime.timeline({
    autoplay: false,
    easing: "linear",
  });

  function play() {
    basicTimelineSolucion.play();
  }
  function pause() {
    basicTimelineSolucion.pause();
  }

  useEffect(() => {
    basicTimelineSolucion
      .add({
        targets: ".problem-solution5 path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 50;
        },
        delay: (el, i) => {
          return i * 100;
        },
      })
      .add(
        {
          targets: ".problem-solution5 #text02 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=1500"
      )
      .add(
        {
          targets: ".problem-solution5 #text03 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=1500"
      )
      .add(
        {
          targets: ".problem-solution5 #text04 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=1500"
      )
      .add(
        {
          targets: ".problem-solution5 #grafico01 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 1500;
          },
          delay: (el, i) => {
            return i * 1500;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".problem-solution5 #text05 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=2000"
      )
      .add(
        {
          targets: ".problem-solution5 #text06 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=1500"
      )
      .add(
        {
          targets: ".problem-solution5 #text07 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=2000"
      );
  }, [basicTimelineSolucion]);
  return (
    <ExCSSSlider>
      <div onClick={play}>
        <Problema className="title-prob" />
        <Enunciado className="problem" />
      </div>
      <div onClick={pause}>
        <Solucion className="title-sol" />
        <Resolucion className="problem-solution5" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema5;