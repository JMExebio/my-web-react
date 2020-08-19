import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Razones from "../../static/img/ar/t01/razones.png";
import Wrapper from "../wrapper";
import ButtonPresentacion from "./button-presentacion";
const ThemeTeoriaStyled = styled.div`
  display: block;
  width: 100%;
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  padding-bottom: 2em;
  .title-teoria {
    text-align: center;
    font-size: 48px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: yellow;
    margin: 0;
    padding: 0.5em 0;
  }
  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 1024px) {
    img {
      width: 100%;
    }
  }
`;
function ThemeTeoria() {
  const history = useHistory();
  function handleClick() {
    history.push("/aritmetica/razones");
  }

  return (
    <ThemeTeoriaStyled>
      <Wrapper>
        <h2 className="title-teoria">Teoria</h2>
        <img src={Razones} alt="" />
        <ButtonPresentacion onClick={handleClick} />
      </Wrapper>
    </ThemeTeoriaStyled>
  );
}

export default ThemeTeoria;
