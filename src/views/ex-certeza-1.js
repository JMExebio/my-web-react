import Swiper from "swiper/swiper-bundle";
import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import styled from "styled-components";
import ExSliderFondo from "../components/clases/ex-slider-fondo";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExProblema001 from "../components/clases/certeza/pre/ex-problema-001";
import ExProblema002 from "../components/clases/certeza/pre/ex-problema-002";
import ExProblema003 from "../components/clases/certeza/pre/ex-problema-003";
import ExProblema004 from "../components/clases/certeza/pre/ex-problema-004";
import ExProblema005 from "../components/clases/certeza/pre/ex-problema-005";
import ExProblema006 from "../components/clases/certeza/pre/ex-problema-006";
import ExProblema007 from "../components/clases/certeza/pre/ex-problema-007";
import ExProblema008 from "../components/clases/certeza/pre/ex-problema-008";
import ExProblema009 from "../components/clases/certeza/pre/ex-problema-009";
import ExProblema010 from "../components/clases/certeza/pre/ex-problema-010";
import ExProblema011 from "../components/clases/certeza/pre/ex-problema-011";
import ExProblema012 from "../components/clases/certeza/pre/ex-problema-012";
import ExProblema013 from "../components/clases/certeza/pre/ex-problema-013";
import ExProblema014 from "../components/clases/certeza/pre/ex-problema-014";
import ExProblema015 from "../components/clases/certeza/pre/ex-problema-015";
import ExProblema016 from "../components/clases/certeza/pre/ex-problema-016";
import ExProblema0161 from "../components/clases/certeza/pre/ex-problema-0161";
import ExProblema017 from "../components/clases/certeza/pre/ex-problema-017";
import ExProblema018 from "../components/clases/certeza/pre/ex-problema-018";
import ExProblema019 from "../components/clases/certeza/pre/ex-problema-019";
import ExProblema020 from "../components/clases/certeza/pre/ex-problema-020";
import ExProblema021 from "../components/clases/certeza/pre/ex-problema-021";
import ExProblema022 from "../components/clases/certeza/pre/ex-problema-022";
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
const ExCerteza1 = () => {
  const swiperH = useRef(null);
  const swiperV = useRef(null);

  useEffect(() => {
    swiperH.current = new Swiper(".swiper-container-h", {
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination-h",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });
    swiperV.current = new Swiper(".swiper-container-v", {
      direction: "vertical",
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination-v",
        clickable: true,
      },
    });
  }, []);
  return (
    <EjemploStyled>
      <ExHeaderSlider />
      <div className="swiper-container swiper-container-h">
        <div className="swiper-wrapper">
          <div class="swiper-slide">
            <ExProblema001 />
          </div>
          <div class="swiper-slide">
            <ExProblema002 />
          </div>
          <div class="swiper-slide">
            <ExProblema003 />
          </div>
          <div class="swiper-slide">
            <ExProblema004 />
          </div>
          <div class="swiper-slide">
            <ExProblema005 />
          </div>
          <div class="swiper-slide">
            <ExProblema006 />
          </div>
          <div class="swiper-slide">
            <ExProblema007 />
          </div>
          <div class="swiper-slide">
            <ExProblema008 />
          </div>
          <div class="swiper-slide">
            <ExProblema009 />
          </div>
          <div class="swiper-slide">
            <ExProblema010 />
          </div>
          <div class="swiper-slide">
            <ExProblema011 />
          </div>
          <div class="swiper-slide">
            <ExProblema012 />
          </div>
          <div class="swiper-slide">
            <ExProblema013 />
          </div>
          <div class="swiper-slide">
            <ExProblema014 />
          </div>
          <div class="swiper-slide">
            <ExProblema015 />
          </div>
          <div class="swiper-slide">
            <div class="swiper-container swiper-container-v">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <ExProblema016 />
                </div>
                <div class="swiper-slide"><ExProblema0161/></div>
                </div>
              <div class="swiper-pagination swiper-pagination-v"></div>
            </div>
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
        </div>
        <div class="swiper-pagination swiper-pagination-h"></div>
      </div>
      <ExSliderFondo />
    </EjemploStyled>
  );
};

export default ExCerteza1;
