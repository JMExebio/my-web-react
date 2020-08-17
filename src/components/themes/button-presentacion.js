import React from "react";
import styled from "styled-components";
const ButtonPresentacionStyled = styled.button`
  position:relative;
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.1em;
  color: #e19c5d;
  background: transparent;
  border: 10px solid #e19c5d;
  box-sizing: border-box;
  border-radius: 20px;
  margin: auto;
  margin-top: 1em;
  transition: all 3s ease-in-out;
  &:hover::before {
    content: "Slider-Presentación";
    position:absolute;
    left:0;
    top:0;
    padding: 9px 19px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.1em;
    color: #fff;
    background: #e19c5d;
    border: 1px solid #e19c5d;
    box-sizing: border-box;
    border-radius: 9px;
    
    
  }
`;
function ButtonPresentacion() {
  return (
    <ButtonPresentacionStyled>Slider-Presentación</ButtonPresentacionStyled>
  );
}

export default ButtonPresentacion;
