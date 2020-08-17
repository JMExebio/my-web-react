import React, { useEffect } from "react";
// import { ReactComponent as Solution } from "../../static/img/ar/solucion.svg";
// import { ReactComponent as Problem01 } from "../../static/img/ar/prob01.svg";
// import { ReactComponent as Solution01 } from "../../static/img/ar/solucion01.svg";
import Wrapper from "../wrapper";
import anime from "animejs";
import styled from "styled-components";

const MenuToggleStyled = styled.span`
  .problem {
    &-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "enun sol" "enun sol01";
      grid-column-gap: 2em;
    }
    &-enun {
      width: 520px;
      height: 250px;
      grid-area: enun;
      transform: translateX(0%);
    }
    &-sol{
        opacity:0;
    }
    &-solution {
      width: 520px;
      height: 250px;
      grid-area: sol01;
    }
  }
  .el {
    height: 16px;
    width: 16px;
    background-color: green;
  }
  .box {
    width: 100px;
    height: 50px;
    background-color: green;
    position: fixed;

    top: 5em;
    left: 1em;
  }

  .box.otherPosition {
    left: 10em;
  }

  .label.otherPosition {
    margin-top: 2em;
  }
`;
// function Box({alterePosition}) {
//   const myRef = useRef(null);
//   const labelRef = useRef(null);
//   useEffect(() => {
//     const xFrom = alterePosition ? "-10em" : "10em";
//     const yFrom = alterePosition ? "-2em" : "2em";
//     var basicTimeline = anime.timeline();
//     basicTimeline
//       .add({
//         targets: myRef.current,
//         translateX: [xFrom, 0],
//         duration: 500,
//         easing: "easeOutSine",
//       })
//       .add({
//         targets: labelRef.current,
//         translateY: [yFrom, 0],
//         duration: 500,
//         easing: "easeOutSine",
//         offset: "0",
//       });
//   }, []);
//   const positionClass = alterePosition ? " otherPosition" : "";
//   return (
//     <div ref={myRef} className={"box" + positionClass}>
//       <div ref={labelRef} className={"label" + positionClass}>
//         Hey there
//       </div>
//     </div>
//   );
// }
function AnimeSVG() {
  //   const svgRef = useRef(null);
  //   const [alterePosicion, setAlterePosicion] = useState(true);
  //   const toggle = () => {
  //     alterePosicion === true
  //       ? setAlterePosicion(false)
  //       : setAlterePosicion(true);

  //   const animationRef = React.useRef(null);
  //   React.useEffect(() => {
  //     animationRef.current = anime({
  //       targets: ".el",
  //       translateX: 250,
  //       delay: function (el, i) {
  //         return i * 100;
  //       },
  //       loop: true,
  //       direction: "alternate",
  //       easing: "easeInOutSine",
  //     });
  //   }, []);
  useEffect(() => {
    var basicTimeline = anime.timeline();
    basicTimeline
      .add({
        targets: ".problem-enun #prob01 #enunciado01,.problem-enun #prob01 #claves",
        translateX: [-520, 0],
        duration: 3000,
        easing: "easeInOutSine",
        delay: (el, i) => {
            return i * 100;
          },
      }).add({
        targets: ".problem-sol",
        opacity: [0,1],
        duration: 1000,
        easing: "easeInOutSine",
        delay: (el, i) => {
            return i * 1000;
          },
      })
      .add({
        targets: ".problem-solution #line,.problem-solution path",
        loop: true,
        // direction: 'alternate',
        //   strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 500,
        delay: (el, i) => {
          return i * 300;
        },
      });
  }, []);

  return (
    <MenuToggleStyled>
      <Wrapper>
        <div className="problem-content">
          {/* <Problem01 className="problem-enun" /> */}
          {/* <Solution className="problem-sol" />
          <Solution01 className="problem-solution" /> */}
        </div>
      </Wrapper>
      {/* <button onClick={() =>  { toggle() }}>Toggle</button>
      <Box alterePosition={alterePosicion} /> */}
      {/* <button onClick={() => animationRef.current.restart()}>Restart</button>
      <div className="el" /> */}
    </MenuToggleStyled>
  );
}
export default AnimeSVG;
