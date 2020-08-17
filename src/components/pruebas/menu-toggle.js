import React, { useState } from "react";
import { ReactComponent as MenuToggle1 } from "../icon-svg1.svg";
import { ReactComponent as MenuToggle2 } from "../icon-svg2.svg";
import styled from "styled-components";

const MenuToggleStyled = styled.span`
  cursor: pointer;
  display: inline-block;
  height: 10rem;
  position: relative;
  width: 10rem;
  @keyframes rotate_in_cw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  @keyframes rotate_out_cw {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes rotate_in_ccw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-45deg);
    }
  }
  @keyframes rotate_out_ccw {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes draw_in {
    0% {
      stroke-dashoffset: 100%;
      stroke-dasharray: 100%;
    }
    100% {
      stroke-dashoffset: 0%;
      stroke-dasharray: 0%;
    }
  }
  @keyframes draw_out {
    0% {
      stroke-dashoffset: 0%;
      stroke-dasharray: 100%;
    }
    100% {
      stroke-dashoffset: 100%;
      stroke-dasharray: 0%;
    }
  }
  .svg-1 {
    animation: ${(props) =>
        props.status === "open" ? `rotate_in_cw` : `rotate_out_cw`}
      0.8s;
    animation-fill-mode: forwards;
    .line-1 {
      animation: ${(props) =>
          props.status === "open" ? `draw_out` : `draw_in`}
        0.8s;
      animation-fill-mode: forwards;
    }
    .line-3 {
      animation: ${(props) =>
          props.status === "open" ? `draw_out` : `draw_in`}
        0.8s;
      animation-fill-mode: forwards;
    }
  }
  .svg-2 {
    animation: ${(props) =>
        props.status === "open" ? `rotate_in_ccw` : `rotate_out_ccw`}
      0.8s;
    animation-fill-mode: forwards;
  }

  .svg-1 {
    .line-1,
    .line-3 {
      opacity: ${(props) =>
        props.status === "open" ? `0%` : `100%`};
    }
  }
  svg {
    transform-origin: 50% 28%;
    height: 100%;
    overflow: visible;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    path {
      fill: black; 
      stroke: #000;
      stroke-dasharray: 0%;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 1px;
    }
  }
`;
function MenuToggle() {
  const [iconStatus, setIconStatus] = useState("default");
  const toggle = () => {
    iconStatus === "default" ? setIconStatus("open") : setIconStatus("default");
  };
  return (
    <MenuToggleStyled
      onClick={() => {
        toggle();
      }}
      status={iconStatus}
    >
      <MenuToggle1 className="svg-1" />
      <MenuToggle2 className="svg-2" />
    </MenuToggleStyled>
  );
}

export default MenuToggle;
