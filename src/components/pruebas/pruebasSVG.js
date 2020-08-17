import React from "react";
import { ReactComponent as ReactLogo } from "../solucion01.svg";
import styled, { keyframes } from "styled-components";
import MenuToggle from "./menu-toggle";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const fade = keyframes`
0% {
fill:#61DAFB;
}
50% {
 fill:#999;
}
100%{
  fill:#61DAFB;
}
`;
const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  opacity: 0;
  transform-origin: center;
}
`;
const StyledSVG = styled(ReactLogo)`
  /* animation: ${fade}  20s linear; */
  @keyframes draw_out {
    from {
    stroke-dashoffset: 1000;
    fill-opacity:0;
  }
  to {
    stroke-dashoffset: 0;
    opacity:1;
  }
  }
  display: block;
  margin: auto;

  path {
    /* animation: ${fade} infinite 8s linear; */
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw_out;
    animation-timing-function:ease-in;
    animation-duration:15s;
    animation-fill-mode:forwards;
    
  }
  .circle {
    animation: draw_out infinite 4s linear;
    &:hover {
      animation-play-state: paused;
      cursor: pointer;
    }
  }
`;
function PruebasSVG() {
  return (
    <div>
      <StyledSVG />
      <MenuToggle />
    </div>
  );
}

export default PruebasSVG;
