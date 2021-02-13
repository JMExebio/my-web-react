import React from "react";
import ExSlider from "../components/clases/ex-slider";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExProblema1 from "../components/clases/pre/uni/operadores/ex-problema-1";
import ExProblema2 from "../components/clases/pre/uni/operadores/ex-problema-2";
import ExProblema3 from "../components/clases/pre/uni/operadores/ex-problema-3";
import ExProblema4 from "../components/clases/pre/uni/operadores/ex-problema-4";
import ExProblema5 from "../components/clases/pre/uni/operadores/ex-problema-5";
import ExProblema6 from "../components/clases/pre/uni/operadores/ex-problema-6";
import ExProblema7 from "../components/clases/pre/uni/operadores/ex-problema-7";
import ExProblema8 from "../components/clases/pre/uni/operadores/ex-problema-8";
import ExProblema9 from "../components/clases/pre/uni/operadores/ex-problema-9";
import ExProblema10 from "../components/clases/pre/uni/operadores/ex-problema-10";
import ExProblema11 from "../components/clases/pre/uni/operadores/ex-problema-11";
import ExProblema12 from "../components/clases/pre/uni/operadores/ex-problema-12";
import ExPresentacion from "../components/clases/pre/uni/operadores/ex-presentacion";
import ExProblema13 from "../components/clases/pre/uni/operadores/ex-problema-13";
import ExProblema14 from "../components/clases/pre/uni/operadores/ex-problema-14";
import ExProblema16 from "../components/clases/pre/uni/operadores/ex-problema-16";
import ExProblema17 from "../components/clases/pre/uni/operadores/ex-problema-17";
import ExProblema18 from "../components/clases/pre/uni/operadores/ex-problema-18";
import ExProblema19 from "../components/clases/pre/uni/operadores/ex-problema-19";
import ExProblema20 from "../components/clases/pre/uni/operadores/ex-problema-20";
import ExProblema21 from "../components/clases/pre/uni/operadores/ex-problema-21";
import ExProblema22 from "../components/clases/pre/uni/operadores/ex-problema-22";
import ExProblema23 from "../components/clases/pre/uni/operadores/ex-problema-23";
import ExProblema24 from "../components/clases/pre/uni/operadores/ex-problema-24";
import ExProblema15 from "../components/clases/pre/uni/operadores/ex-problema-15";
import { Helmet } from "react-helmet";

function ExOperadores1() {
  return (
    <>
      <Helmet>
        <title>Exebio-Operadores Matemáticos</title>
      </Helmet>
      <ExHeaderSlider />
      <ExSlider>
        <div className="mySlides activo">
          <ExPresentacion />
        </div>
        <div className="mySlides inactivo">
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
        <div className="mySlides inactivo">
          <ExProblema12 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema13 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema14 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema15 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema16 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema17 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema18 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema19 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema20 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema21 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema22 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema23 />
        </div>
        <div className="mySlides inactivo">
          <ExProblema24 />
        </div>
      </ExSlider>
    </>
  );
}

export default ExOperadores1;
