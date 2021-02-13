import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../../static/img/colegio/uno/deductivo/0116101.svg";
import { ReactComponent as Problema } from "../../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../../static/img/colegio/uno/deductivo/0116201.svg";
import ExCSSSlider from "../../../ex-css-slider.";

function ExProblemaI() {
  var basicTimelineSolucion = anime.timeline({
    autoplay: false,
    easing: "linear",
  });
  var basicTimelineProblem = anime.timeline({
    autoplay: true,
    easing: "easeInSine",
  });

  function play() {
    basicTimelineSolucion.play();
  }
  function pause() {
    basicTimelineSolucion.pause();
  }

  useEffect(() => {
    basicTimelineProblem.add({
      targets: ".problem",
      translateX: [250, 0],
      translateY: [-100, 0],
      opacity: [0, 1],
      scale: [0, 1],
      duration: 1500,
    });

    basicTimelineSolucion.add({
      targets:
        ".problem-solution path,.problem-solution line, .problem-solution rect",
      opacity: [0, 1],
      duration: (el, i) => {
        return 200;
      },
      delay: (el, i) => {
        return i * 500;
      },
    });
  }, [basicTimelineSolucion, basicTimelineProblem]);
  return (
    <ExCSSSlider>
      <div onClick={play}>
        <Problema className="title-prob" />
        <Enunciado className="problem" />
      </div>
      <div onClick={pause}>
        <Solucion className="title-sol" />
        <Resolucion className="problem-solution" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblemaI;
