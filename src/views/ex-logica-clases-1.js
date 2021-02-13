import React from "react";
import ExSlider from "../components/clases/ex-slider";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExProblema1 from "../components/clases/pre/uni/logicaclases/ex-problema-1";
import ExProblema2 from "../components/clases/pre/uni/logicaclases/ex-problema-2";
import ExProblema3 from "../components/clases/pre/uni/logicaclases/ex-problema-3";
import ExProblema4 from "../components/clases/pre/uni/logicaclases/ex-problema-4";
import ExProblema5 from "../components/clases/pre/uni/logicaclases/ex-problema-5";
import ExProblema6 from "../components/clases/pre/uni/logicaclases/ex-problema-6";
import ExProblema7 from "../components/clases/pre/uni/logicaclases/ex-problema-7";
import ExProblema8 from "../components/clases/pre/uni/logicaclases/ex-problema-8";
import ExProblema9 from "../components/clases/pre/uni/logicaclases/ex-problema-9";
import ExProblema10 from "../components/clases/pre/uni/logicaclases/ex-problema-10";
import ExProblema11 from "../components/clases/pre/uni/logicaclases/ex-problema-11";
import { Helmet } from "react-helmet";
function ExLogicaClasesUno() {
  return (
    <>
      <Helmet>
        <title>Exebio-Lógica de Clases</title>
      </Helmet>
      <ExHeaderSlider />
      <ExSlider>
        <div className="mySlides activo">
          <ExProblema1 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema2 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema3 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema4 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema5 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema6 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema7 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema8 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema9 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema10 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema11 />
        </div>
      </ExSlider>
    </>
  );
}

export default ExLogicaClasesUno;
