import React from "react";
import styled from "styled-components";
import Wrapper from "../wrapper";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CarouselThemeStyled = styled.div``;
function CarouselTheme() {
  return (
    <CarouselThemeStyled>
      <Wrapper>
        <Carousel showThumbs={false} showStatus={false} useKeyboardArrows>
          <div className="mySlides fade">
            <img src="./img/aritmetica/razones.png" alt="" />
          </div>
          <div className="mySlides fade">
            <img src="./img/aritmetica/proporciones.png" alt="" />
          </div>
          <div className="mySlides fade">
            <img src="./img/aritmetica/SRGE.png" alt=""/>
          </div>
        </Carousel>
      </Wrapper>
    </CarouselThemeStyled>
  );
}

export default CarouselTheme;
