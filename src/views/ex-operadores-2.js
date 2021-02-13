import React from "react";
import ExSlider from "../components/clases/ex-slider";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExProblema25 from "../components/clases/pre/uni/operadores/ex-problema-25";
import ExProblema26 from "../components/clases/pre/uni/operadores/ex-problema-26";
import ExProblema27 from "../components/clases/pre/uni/operadores/ex-problema-27";
import ExProblema28 from "../components/clases/pre/uni/operadores/ex-problema-28";
import ExProblema29 from "../components/clases/pre/uni/operadores/ex-problema-29";
import ExProblema30 from "../components/clases/pre/uni/operadores/ex-problema-30";
import ExProblema31 from "../components/clases/pre/uni/operadores/ex-problema-31";

import ExPresentacion2 from "../components/clases/pre/uni/operadores/ex-presentacion-2";
import { Helmet } from "react-helmet";

function ExOperadores2() {
  return (
    <>
      <Helmet>
        <title>Exebio-Operadores Binarios</title>
      </Helmet>
      <ExHeaderSlider />
      <ExSlider>
        <div className="mySlides activo">
          <ExPresentacion2 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema25 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema26 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema27 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema28 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema29 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema30 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema31 />
        </div>
      </ExSlider>
    </>
  );
}

export default ExOperadores2;
