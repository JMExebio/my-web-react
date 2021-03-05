import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/sistemas-dispersos/0305102.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/sistemas-dispersos/03052021.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema002() {
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
      .add(
        {
          targets:
            ".solution02 path, .solution02 rect",
          opacity: [0, 1],
          duration: (el, i) => {
            return 400;
          },
          delay: (el, i) => {
            return i * 400;
          },
        },
        "+=1000"
      );
  }, [basicTimelineSolucion]);
  return (
      <ExCSSSlider>
        <div onClick={play} className="enunciado">
          <Problema className="title-prob" />
          <Enunciado className="problem02  problem" />
        </div>
        <div onClick={pause} className="solucion">
          <Solucion className="title-sol" />
          <Resolucion className="solution02 solution" />
        </div>
      </ExCSSSlider>
  );
}

export default ExProblema002;