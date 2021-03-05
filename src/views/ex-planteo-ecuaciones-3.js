import Swiper from "swiper/swiper-bundle";
import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import styled from "styled-components";
import ExSliderFondo from "../components/clases/ex-slider-fondo";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExPresentacionA from "../components/clases/planteo-ecuaciones/colegio/ex-presentacion-a";
import ExProblema028 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-028";
import ExProblema027 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-027";
import ExProblema026 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-026";
import ExProblema025 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-025";
import ExProblema024 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-024";
import ExProblema023 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-023";
import ExProblema016 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-016";
import ExProblema017 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-017";
import ExProblema018 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-018";
import ExProblema019 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-019";
import ExProblema020 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-020";
import ExProblema021 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-021";
import ExProblema022 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-022";
const EjemploStyled = styled.div`
  width: 100%;
  height: 100%;
  background: #02071a;
  .swiper {
    &-container {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    &-wrapper {
      width: 100%;
      height: 100%;
    }
    &-slide {
      width: 100%;
      height: 100%;
      background: #02071a;
    }
    &-pagination-bullet {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #000;
      opacity: 1;
      background: #65c1df;
      &-active {
        color: #fff;
        background: #6eef31;
      }
    }
  }
`;
const ExPlanteoEcuaciones3 = () => {
  const swiperH = useRef(null);

  useEffect(() => {
    swiperH.current = new Swiper(".swiper-container-h", {
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination-h",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index) + "</span>";
        },
      },
    });
  }, []);
  return (
    <EjemploStyled>
      <ExHeaderSlider />
      <div className="swiper-container swiper-container-h">
        <div className="swiper-wrapper">
        <div class="swiper-slide">
            <ExPresentacionA />
          </div>
          <div class="swiper-slide">
            <ExProblema016 />
          </div>
          <div class="swiper-slide">
            <ExProblema017 />
          </div>
          <div class="swiper-slide">
            <ExProblema018 />
          </div>
          <div class="swiper-slide">
            <ExProblema019 />
          </div>
          <div class="swiper-slide">
            <ExProblema020 />
          </div>
          <div class="swiper-slide">
            <ExProblema021 />
          </div>
          <div class="swiper-slide">
            <ExProblema022 />
          </div>
          <div class="swiper-slide">
            <ExProblema023 />
          </div>
          <div class="swiper-slide">
            <ExProblema024 />
          </div>
          <div class="swiper-slide">
            <ExProblema025 />
          </div>
          <div class="swiper-slide">
            <ExProblema026 />
          </div>
          <div class="swiper-slide">
            <ExProblema027 />
          </div>
          <div class="swiper-slide">
            <ExProblema028 />
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-h"></div>
      </div>
      <ExSliderFondo />
    </EjemploStyled>
  );
};

export default ExPlanteoEcuaciones3;