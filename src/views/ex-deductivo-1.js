import React from "react";
import ExSlider from "../components/clases/ex-slider";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExProblemaI from "../components/clases/colegio/uno/deductivo/ex-problema-I";
import { Helmet } from "react-helmet";
function ExDeductivoUno() {
  return (
    <>
    <Helmet>
  <title>Exebio-Deducción Matemática</title>
  </Helmet>
    <ExHeaderSlider/>
      <ExSlider>
      <div className="mySlides activo">
        <ExProblemaI />
      </div>
      </ExSlider>
    </>
  );
}

export default ExDeductivoUno;
