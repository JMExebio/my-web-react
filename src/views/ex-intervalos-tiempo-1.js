import React from "react";
import ExSlider from "../components/clases/ex-slider";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExPresentacion from "../components/clases/colegio/uno/intervalo-tiempo/ex-presentacion";
import ExTeoria1 from "../components/clases/colegio/uno/intervalo-tiempo/ex-teoria-1";
import ExTeoria2 from "../components/clases/colegio/uno/intervalo-tiempo/ex-teoria-2";
import ExTeoria3 from "../components/clases/colegio/uno/intervalo-tiempo/ex-teoria-3";
import ExTeoria4 from "../components/clases/colegio/uno/intervalo-tiempo/ex-teoria-4";
import { Helmet } from "react-helmet";

function ExIntervaloTiempo1() {
  return (
    <>
      <Helmet>
        <title>Exebio-Intervalo de Tiempo</title>
      </Helmet>
      <ExHeaderSlider />
      <ExSlider>
        <div className="mySlides activo">
          <ExPresentacion />
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

export default ExIntervaloTiempo1;
