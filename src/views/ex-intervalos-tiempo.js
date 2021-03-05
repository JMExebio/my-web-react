import React from "react";
import ExSlider from "../components/clases/ex-slider";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExPresentacionA from "../components/clases/intervalo-tiempo/colegio/ex-presentacion-a";
import ExTeoria1 from "../components/clases/intervalo-tiempo/colegio/ex-teoria-1";
import ExTeoria2 from "../components/clases/intervalo-tiempo/colegio/ex-teoria-2";
import ExTeoria3 from "../components/clases/intervalo-tiempo/colegio/ex-teoria-3";
import ExTeoria4 from "../components/clases/intervalo-tiempo/colegio/ex-teoria-4";
import { Helmet } from "react-helmet";

function ExIntervaloTiempo() {
  return (
    <>
      <Helmet>
        <title>Intervalo de Tiempo</title>
      </Helmet>
      <ExHeaderSlider />
      <ExSlider>
        <div className="mySlides activo">
          <ExPresentacionA />
        </div>
        <div className="mySlides inactivo">
          <ExTeoria1 />
        </div>
        <div className="mySlides inactivo">
          <ExTeoria2 />
        </div>
        <div className="mySlides inactivo">
          <ExTeoria3 />
        </div>
        <div className="mySlides inactivo">
          <ExTeoria4 />
        </div>
      </ExSlider>
    </>
  );
}

export default ExIntervaloTiempo;
