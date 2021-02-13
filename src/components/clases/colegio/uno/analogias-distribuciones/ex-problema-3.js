import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../../static/img/colegio/uno/analogias-distribuciones/0119103.svg";
import { ReactComponent as Problema } from "../../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../../static/img/colegio/uno/analogias-distribuciones/0119203.svg";
import ExCSSSlider from "../../../ex-css-slider.";

function ExProblema3() {
  var basicTimelineSolucion = anime.timeline({
    autoplay: false,
    easing: "linear",
  });
  var basicTimelineClave = anime.timeline({
    autoplay: true,
    easing: "linear",
  });
  function play() {
    basicTimelineSolucion.play();
  }
  function pause() {
    basicTimelineSolucion.pause();
  }

  useEffect(() => {
    basicTimelineClave
     .add({
      targets: ".problem3 #flecha path",
      opacity: 0,
    });
    basicTimelineSolucion.add({
      targets:
        ".problem-solution3 path",
      opacity: [0, 1],
      duration: (el, i) => {
        return 400;
      },
      delay: (el, i) => {
        return i * 400;
      },
    }).add({
      targets: ".problem3 #flecha path",
      opacity: 1,
      autoplay: true,
      easing: "linear",
      duration:1500,
      delay:1500,
    });
  }, [basicTimelineSolucion,basicTimelineClave]);
  return (
    <ExCSSSlider>
      <div onClick={play} className="enunciado">
        <Problema className="title-prob" />
        <Enunciado className="problem3" />
      </div>
      <div onClick={pause} className="solucion">
        <Solucion className="title-sol" />
        <Resolucion className="problem-solution3" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema3;
