import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const CardThemesStyled = styled.article`
  width: 320px;
  position: relative;
  display: block;
  margin: auto;
  cursor: pointer;
  :hover::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    border-radius: 10px;
    z-index: -1;
  }
  :hover::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    border-radius: 10px;
    filter: blur(10px);
    z-index: -2;
  }
  :hover::before,
  :hover::after {
    background: linear-gradient(
      245deg,
      ${({ color1 }) => color1},
      ${({ color2 }) => color2},
      ${({ color3 }) => color3}
    );
  }
  img {
    width: 320px;
  }
  :hover {
    .img-fondo::before {
      content: "";
      position: absolute;
      bottom: 0;
      top: 0;
      background: linear-gradient(
        245deg,
        ${({ color1 }) => color1},
        ${({ color2 }) => color2},
        ${({ color3 }) => color3}
      );
      z-index: 3;
      width: 100%;
      border-radius: 10px;
      opacity: 0.5;
    }
  }
  :hover {
    .card-title {
      display: block;
      position: absolute;
      align-self: center;
    }
  }
  .card {
    &-title {
      display: none;
      background: ${({ color2 }) => color2};
      border-radius: 0.5em;
      padding: 0;
      margin: 0;
      bottom: 0;
      z-index: 5;
    }
    &-text {
      text-align: center;
      text-transform: uppercase;
      font-size: 24px;
      color: ${({ color1 }) => color1};
      padding: 1em;
    }
  }
`;
function CardThemes({ color1, color2, color3, titleTheme, imgTheme }) {
  const history = useHistory();
  function handleClick() {
    history.push("/aritmetica");
  }
  return (
    <CardThemesStyled
      color1={color1}
      color2={color2}
      color3={color3}
      onClick={handleClick}
    >
      <div className="img-fondo">
        <img src={imgTheme} alt="" />
      </div>
      <div className="card-title">
        <h2 className="card-text">{titleTheme}</h2>
      </div>
    </CardThemesStyled>
  );
}

export default CardThemes;
