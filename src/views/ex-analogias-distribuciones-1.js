import React from "react";
import ExSlider from "../components/clases/ex-slider";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExProblema001 from "../components/clases/analogias-distribuciones/colegio/ex-problema-001";
import ExProblema002 from "../components/clases/analogias-distribuciones/colegio/ex-problema-002";
import ExProblema003 from "../components/clases/analogias-distribuciones/colegio/ex-problema-003";
import ExProblema004 from "../components/clases/analogias-distribuciones/colegio/ex-problema-004";
import ExProblema005 from "../components/clases/analogias-distribuciones/colegio/ex-problema-005";
import ExProblema006 from "../components/clases/analogias-distribuciones/colegio/ex-problema-006";
import ExProblema007 from "../components/clases/analogias-distribuciones/colegio/ex-problema-007";
import ExProblema008 from "../components/clases/analogias-distribuciones/colegio/ex-problema-008";
import ExProblema009 from "../components/clases/analogias-distribuciones/colegio/ex-problema-009";
import ExProblema010 from "../components/clases/analogias-distribuciones/colegio/ex-problema-010";
import ExProblema011 from "../components/clases/analogias-distribuciones/colegio/ex-problema-011";
import ExProblema012 from "../components/clases/analogias-distribuciones/colegio/ex-problema-012";
import ExProblema013 from "../components/clases/analogias-distribuciones/colegio/ex-problema-013";
import ExProblema014 from "../components/clases/analogias-distribuciones/colegio/ex-problema-014";
import ExPresentacionA from "../components/clases/analogias-distribuciones/colegio/ex-presentacion-a";
import { Helmet } from "react-helmet";
function ExAnalogiasDistribuciones1() {
  return (
    <>
      <Helmet>
        <title>Analogias y Distribuciones</title>
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
      </ExSlider>
    </>
  );
}

export default ExAnalogiasDistribuciones1;
