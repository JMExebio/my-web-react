import React from "react";
import ExSlider from "../components/clases/ex-slider";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExProblema001 from "../components/clases/operadores/pre/ex-problema-001";
import ExProblema002 from "../components/clases/operadores/pre/ex-problema-002";
import ExProblema003 from "../components/clases/operadores/pre/ex-problema-003";
import ExProblema004 from "../components/clases/operadores/pre/ex-problema-004";
import ExProblema005 from "../components/clases/operadores/pre/ex-problema-005";
import ExProblema006 from "../components/clases/operadores/pre/ex-problema-006";
import ExProblema007 from "../components/clases/operadores/pre/ex-problema-007";
import ExProblema008 from "../components/clases/operadores/pre/ex-problema-008";
import ExProblema009 from "../components/clases/operadores/pre/ex-problema-009";
import ExProblema010 from "../components/clases/operadores/pre/ex-problema-010";
import ExProblema011 from "../components/clases/operadores/pre/ex-problema-011";
import ExProblema012 from "../components/clases/operadores/pre/ex-problema-012";
import ExPresentacionA from "../components/clases/operadores/pre/ex-presentacion-a";
import ExProblema013 from "../components/clases/operadores/pre/ex-problema-013";
import ExProblema014 from "../components/clases/operadores/pre/ex-problema-014";
import ExProblema016 from "../components/clases/operadores/pre/ex-problema-016";
import ExProblema017 from "../components/clases/operadores/pre/ex-problema-017";
import ExProblema018 from "../components/clases/operadores/pre/ex-problema-018";
import ExProblema019 from "../components/clases/operadores/pre/ex-problema-019";
import ExProblema020 from "../components/clases/operadores/pre/ex-problema-020";
import ExProblema021 from "../components/clases/operadores/pre/ex-problema-021";
import ExProblema022 from "../components/clases/operadores/pre/ex-problema-022";
import ExProblema023 from "../components/clases/operadores/pre/ex-problema-023";
import ExProblema024 from "../components/clases/operadores/pre/ex-problema-024";
import ExProblema015 from "../components/clases/operadores/pre/ex-problema-015";
import { Helmet } from "react-helmet";

function ExOperadores1() {
  return (
    <>
      <Helmet>
        <title>Operadores Matemáticos</title>
      </Helmet>
      <ExHeaderSlider />
      <ExSlider>
        <div className="mySlides activo">
          <ExPresentacionA />
        </div>
        <div className="mySlides inactivo">
          <ExProblema001 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema002 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema003 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema004 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema005 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema006 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema007 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema008 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema009 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema010 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema011 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema012 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema013 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema014 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema015 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema016 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema017 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema018 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema019 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema020 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema021 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema022 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema023 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema024 />
        </div>
      </ExSlider>
    </>
  );
}

export default ExOperadores1;
