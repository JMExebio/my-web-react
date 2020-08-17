import React from "react";
import styled from "styled-components";
const CardCourseStyled = styled.article`
  width: 320px;
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  transition: 2s;
  cursor: pointer;
  :hover {
    transform: rotateY(180deg);
  }
  .lado {
    width: 320px;
    border: 4px solid ${({ color1 }) => color1};
    border-radius: 10px;
    backface-visibility: hidden;
  }
  .frente {
    background: ${({ color2 }) => color2};
  }
  .atras {
    background: ${({ color2 }) => color2};
    transform: rotateY(180deg);
    position: absolute;
  }
  .card {
    &-title {
      position: absolute;
      color: ${({ color1 }) => color1};
      text-transform: uppercase;
      margin: 0;
      font-size: 36px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      backface-visibility: hidden;
    }
    &-temas {
      position: absolute;
      color: ${({ color1 }) => color1};
      text-transform: uppercase;
      margin: 0;
      font-size: 18px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      backface-visibility: hidden;
    }
  }
`;

function CardCourse({ title, color1, color2, color3, imgCourse }) {
  return (
    <CardCourseStyled color1={color1} color2={color2} color3={color3}>
      <div className="lado frente">
        <img src={imgCourse} alt="" />
        <h2 className="card-title">{title}</h2>
      </div>
      <div className="lado atras">
        <img src={imgCourse} alt="" />
        <div className="card-temas">
          <h3>tema 1</h3>
          <h3>tema 2</h3>
          <h3>tema 3</h3>
        </div>
      </div>
    </CardCourseStyled>
  );
}

export default CardCourse;
