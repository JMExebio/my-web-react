import React from "react";
import ExSlider from "../components/clases/ex-slider";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExPresentacionA from "../components/clases/planteo-ecuaciones/pre/ex-presentacion-a";
import ExTeoria1 from "../components/clases/planteo-ecuaciones/pre/ex-teoria-1";
import ExTeoria2 from "../components/clases/planteo-ecuaciones/pre/ex-teoria-2";
import { Helmet } from "react-helmet";

function ExPlanteoEcuaciones1() {
  return (
    <>
      <Helmet>
        <title>Planteo de Ecuacines</title>
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
      </ExSlider>
    </>
  );
}

export default ExPlanteoEcuaciones1;
