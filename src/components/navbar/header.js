import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Wrapper from "../wrapper";
import Menu from "./menu";

const HeaderStyled = styled.header`
  padding: 0;
  position: fixed;
  width: 100%;
  background: ${({ background }) =>
    background ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.8)"};
  z-index: 3;
  .header {
    &-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    &-logo {
      align-self: center;
      padding: 1.5em 0;
    }
  }
`;

function Header() {
  const [background, setBackground] = useState(true);
  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    let heightPantalla = window.innerHeight;
    if (scrollTop > heightPantalla) {
      setBackground(false);
    }else{
      setBackground(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderStyled background={background}>
      <Wrapper>
        <div className="header-content">
          <img src="./img/icon-logo.svg" alt="" className="header-logo" />
          <Menu />
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
