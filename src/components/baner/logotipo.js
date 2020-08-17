import React from "react";
import styled from "styled-components";
const LogotipoStyled = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 340px;
    height: 100px;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 500px;
      height: 150px;
    }
  }
`;
function Logotipo() {
  return (
    <LogotipoStyled>
      <img src="./img/logotipoM.svg" alt="" />
    </LogotipoStyled>
  );
}

export default Logotipo;
