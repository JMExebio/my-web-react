import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const CardThemesStyled = styled.article`
  width: 320px;
  position: relative;
  display: block;
  margin: auto;
  cursor: pointer;
  .card-title {
    text-align: center;
  }
  .card-text {
    font-size: 24px;
    font-weight: 500;
    color: ${({ color3 }) => color3};
  }
  .img-fondo {
    background: #02071a;
    img {
      width: 320px;
      height: 320px;
    }
  }
`;
function ExCardThemes({
  color1,
  color2,
  color3,
  themeID,
  titleTheme,
  imgTheme,
}) {
  const history = useHistory();
  function handleClick() {
    const color = color1.substring(1);
    history.push(`/tema/${themeID}/${color}`);
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

export default ExCardThemes;
