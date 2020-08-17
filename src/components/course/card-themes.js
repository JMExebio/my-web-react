import React from "react";
import styled from "styled-components";
const CardThemesStyled = styled.article`
  width: 320px;
  position: relative;
  display: block;
  left: 50%;
  transform: translate(-50%);
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
    background: linear-gradient(245deg, ${({color1})=>color1}, ${({color2})=>color2}, ${({color3})=>color3});
  }
  img {
    width: 320px;
  }
  :hover {
    .card-title {
      display: flex;
      position: absolute;
      margin: 0 1.5em;
      transform: translateY(-100%);
    }
  }

  .card {
    &-title {
      display: none;
      color: ${({color1})=>color1};
      text-transform: uppercase;
      margin: 0;
      padding: 0.5em;
      font-size: 18px;
      text-align: center;
      background: ${({color2})=>color2};
      border-radius: 0.5em;
    }
  }
`;
function CardThemes({ color1, color2, color3,titleTheme,imgTheme} ) {
  return (
    <CardThemesStyled color1={color1} color2={color2} color3={color3}>
      <img src={imgTheme} alt="" />
      <h2 className="card-title">{titleTheme}</h2>
    </CardThemesStyled>
  );
}

export default CardThemes;
