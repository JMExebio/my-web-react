import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import styled from "styled-components";
import SliderFondo from "./slider-fondo";
import PrimerSlider from "./primer-slider";
import SegundoSlyder from "./segundo-slider";
import TercerSlider from "./tercer-slider";
import CuartoSlider from "./cuarto-slider";

const RazonesStyled = styled.div`
  height: 100%;
  width: 100%;
  .my-slide {
    display: flex;
    height: 100vh;
    &-one {
      background: linear-gradient(89.89deg, #1941d5 0.09%, #4f19d5 99.89%);
    }
    &-two,
    &-three {
      background: #1941d5;
    }
    &-four,
    &-five {
      background: #4f19d5;
    }
  }

  .control-dots {
    text-align: right;
    right: 5%;
  }
  .dots {
    background: #65c1df;
    width: 8px;
    height: 8px;
    display: inline-flex;
    right: 10px;
    border-radius: 50%;
    margin: 0 8px;
    outline: none;
  }
  .active {
    width: 12px;
    height: 12px;
    background: #6eef31;
  }
`;
function Razones() {
  const [slider, setSlider] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const next = () => {
    setSlider(slider + 1);
  };
  const prev = () => {
    setSlider(slider - 1);
  };
  const changeAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };
  const updateCurrentSlide = (index) => {
    if (slider !== index) {
      setSlider(index);
    }
  };
  return (
    <RazonesStyled>
      <Carousel
        showThumbs={false}
        showArrows={false}
        useKeyboardArrows
        className="presentation-mode"
        autoPlay={autoPlay}
        selectedItem={slider}
        onChange={updateCurrentSlide}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="dots active"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className="dots"
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div key="content-0" className="my-slide my-slide-one">
          <SliderFondo next={next} prev={prev}>
            <PrimerSlider slider={slider} />
          </SliderFondo>
        </div>
        <div key="content-2" className="my-slide my-slide-two">
          <SliderFondo next={next} prev={prev}>
            <SegundoSlyder slider={slider} />
          </SliderFondo>
        </div>
        <div key="content-3" className="my-slide my-slide-three">
          <SliderFondo next={next} prev={prev}>
            <TercerSlider slider={slider} />
          </SliderFondo>
        </div>
        <div key="content-4" className="my-slide my-slide-four">
          <SliderFondo next={next} prev={prev}>
            <CuartoSlider slider={slider} />
          </SliderFondo>
        </div>
      </Carousel>
    </RazonesStyled>
  );
}

export default Razones;
