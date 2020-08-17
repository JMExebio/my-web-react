import React from "react";
import styled from "styled-components";
const BanerCourseStyled = styled.section`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 600px;
  background: #2cf3c7;
  .set {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    div {
      position: absolute;
      display: block;
      img{
         transform: scale(.5); 
      }
      
      :nth-child(11) {
        bottom: 20%;
        animation: animate 15s linear infinite;
      }
      :nth-child(2) {
        bottom: 40%;
        animation: animate 10s linear infinite;
      }
      :nth-child(3) {
        bottom: 50%;
        animation: animate 45s linear infinite;
      }
      :nth-child(4) {
        bottom: 30%;
        animation: animate 25s linear infinite;
      }
      :nth-child(5) {
        bottom: 60%;
        animation: animate 20s linear infinite;
      }
      :nth-child(6) {
        bottom: 70%;
        animation: animate 30s linear infinite;
      }
      :nth-child(7) {
        bottom: 80%;
        animation: animate 5s linear infinite;
      }
      :nth-child(8) {
        bottom: 90%;
        animation: animate 35s linear infinite;
      }
      :nth-child(9) {
        bottom: 5%;
        animation: animate 10s linear infinite;
      }
      :nth-child(10) {
        bottom: 10%;
        animation: animate 40s linear infinite;
      }
    }
  }
  @keyframes animate {
    0% {
      opacity: 0;
      left: -20%;
      transform: translateY(20px) rotate(0deg);
    }
    10% {
      opacity: 1;
    }
    20% {
      transform: translateY(-20px) rotate(45deg);
    }
    30% {
      transform: translateY(-20px) rotate(90deg);
    }
    40% {
      transform: translateY(20px) rotate(135deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
    60% {
      transform: translateY(-20px) rotate(225deg);
    }
    70% {
      transform: translateY(20px) rotate(270deg);
    }
    80% {
      transform: translateY(-20px) rotate(90deg);
    }
    90% {
      transform: translateY(20px) rotate(90deg);
      opacity: 1;
    }
    100% {
      left: 50%;
      transform: translateY(20px) rotate(90deg);
      opacity: 0;
    }
  }
`;
function BanerCourse() {
  return (
    <BanerCourseStyled>
      <div className="set">
        <h1 className="set-title">Aritmética</h1>
        <div>
          <img src="./img/aritmetica/img-1.svg" alt="" />
        </div>
        <div>
          <img src="./img/aritmetica/img-2.svg" alt="" />
        </div>
        <div>
          <img src="./img/aritmetica/img-3.svg" alt="" />
        </div>
        <div>
          <img src="./img/aritmetica/img-4.svg" alt="" />
        </div>
        <div>
          <img src="./img/aritmetica/img-5.svg" alt="" />
        </div>
        <div>
          <img src="./img/aritmetica/img-6.svg" alt="" />
        </div>
        <div>
          <img src="./img/aritmetica/img-7.svg" alt="" />
        </div>
        <div>
          <img src="./img/aritmetica/img-8.svg" alt="" />
        </div>
        <div>
          <img src="./img/aritmetica/img-9.svg" alt="" />
        </div>
        <div>
          <img src="./img/aritmetica/img-10.svg" alt="" />
        </div>
      </div>
    </BanerCourseStyled>
  );
}

export default BanerCourse;
