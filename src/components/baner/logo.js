import React from "react";
import styled from "styled-components";
const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 180px;
    height: 180px;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
`;
function Logo() {
  return (
    <LogoStyled>
      <img src="./img/logoM.svg" alt="" />
    </LogoStyled>
  );
}

export default Logo;
