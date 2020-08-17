import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as IconHamburge } from "../../static/img/hambur-close/icon-hamburge.svg";
import { ReactComponent as IconLine } from "../../static/img/hambur-close/icon-line.svg";
const rotate_in_cw = keyframes` 
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
`;
const rotate_out_cw = keyframes`
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;
const rotate_in_ccw = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-45deg);
    }
`;
const rotate_out_ccw = keyframes`
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;
const IconHamburgeStyled = styled(IconHamburge)`
  animation: ${(props) =>
      props.status === "open" ? rotate_in_cw : rotate_out_cw}
    0.8s;
  animation-fill-mode: forwards;
  .line-1,
  .line-3 {
    opacity: ${(props) => (props.status === "open" ? `0%` : `100%`)};
  }
`;

const IconLineStyled = styled(IconLine)`
  animation: ${(props) =>
      props.status === "open" ? rotate_in_ccw : rotate_out_ccw}
    0.8s;
  animation-fill-mode: forwards;
`;
const MenuIconStyled = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 1em;
  padding: 0.5em;
  position: relative;
  svg {
    transform-origin: 50% 50%;
    height: 100%;
    overflow: visible;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    path {
      stroke-dasharray: 0%;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 4px;
    }
  }
`;

function MenuIcon() {
  const [iconStatus, setIconStatus] = useState("default");
  const toggle = () => {
    iconStatus === "default" ? setIconStatus("open") : setIconStatus("default");
  };
  return (
    <MenuIconStyled
      onClick={() => {
        toggle();
      }}
    >
      <IconHamburgeStyled status={iconStatus} />
      <IconLineStyled status={iconStatus} />
    </MenuIconStyled>
  );
}

export default MenuIcon;
