import React from "react";
import ExSlider from "../components/clases/ex-slider";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExProblema025 from "../components/clases/operadores/pre/ex-problema-025";
import ExProblema026 from "../components/clases/operadores/pre/ex-problema-026";
import ExProblema027 from "../components/clases/operadores/pre/ex-problema-027";
import ExProblema028 from "../components/clases/operadores/pre/ex-problema-028";
import ExProblema029 from "../components/clases/operadores/pre/ex-problema-029";
import ExProblema030 from "../components/clases/operadores/pre/ex-problema-030";
import ExProblema031 from "../components/clases/operadores/pre/ex-problema-031";

import ExPresentacionB from "../components/clases/operadores/pre/ex-presentacion-b";
import { Helmet } from "react-helmet";

function ExOperadores2() {
  return (
    <>
      <Helmet>
        <title>Operadores Binarios</title>
      </Helmet>
      <ExHeaderSlider />
      <ExSlider>
        <div className="mySlides activo">
          <ExPresentacionB />
        </div>
        <div className="mySlides inactivo">
          <ExProblema025 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema026 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema027 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema028 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema029 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema030 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema031 />
        </div>
      </ExSlider>
    </>
  );
}

export default ExOperadores2;
