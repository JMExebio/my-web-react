import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import ExHome from "./views/ex-home";
import ExThemes from "./views/ex-themes";
import ExSumitCourse from "./views/ex-sumit-course";
import ExSumitThemes from "./views/ex-sumit-themes";
import ExSumitTheory from "./views/ex-sumit-theory";
import ExSumitProblem from "./views/ex-sumit-problem";
import ExDeductivoUno from "./views/ex-deductivo-1";
import ExLogicaClasesUno from "./views/ex-logica-clases-1";
import ExOperadores1 from "./views/ex-operadores-1";
import ExAnalogiasDistribuciones1 from "./views/ex-analogias-distribuciones-1";
import ExSumitURL from "./views/ex-sumit-url";
import ExOperadores2 from "./views/ex-operadores-2";
import ExPlanteoEcuaciones1 from "./views/ex-planteo-ecuaciones-1";
import ExIntervaloTiempo1 from "./views/ex-intervalos-tiempo-1";
import ExIntervaloTiempo2 from "./views/ex-intervalos-tiempo-2";
const AppStyled = styled.div`
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  .title-h1 {
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: #cd08d1;
    margin: 0;
    padding: 0.5em 0;
  }
  .copy {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #e8a1ee;
  }
  @media screen and (min-width: 768px) {
    .title-h1 {
      font-size: 48px;
      line-height: 56px;
    }
    .copy {
      font-size: 36px;
      line-height: 42px;
    }
  }
`;
function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppStyled>
          <Route path="/" exact>
            <ExHome />
          </Route>
          <Route path="/tema/:id/:color" exact>
            <ExThemes />
          </Route>
          <Route path="/admin/course" exact>
            <ExSumitCourse />
          </Route>
          <Route path="/admin/theme" exact>
            <ExSumitThemes />
          </Route>
          <Route path="/admin/theory" exact>
            <ExSumitTheory />
          </Route>
          <Route path="/admin/problem" exact>
            <ExSumitProblem />
          </Route>
          <Route path="/admin/url" exact>
            <ExSumitURL />
          </Route>
          <Route path="/colegio/deductivo" exact>
            <ExDeductivoUno />
          </Route>
          <Route path="/preuni/logicaclases" exact>
            <ExLogicaClasesUno />
          </Route>
          <Route path="/preuni/operadores" exact>
            <ExOperadores1 />
          </Route>
          <Route path="/preuni/operadores2" exact>
            <ExOperadores2 />
          </Route>
          <Route path="/preuni/planteoecuaciones" exact>
            <ExPlanteoEcuaciones1 />
          </Route>
          <Route path="/colegio/analogiasdistribuciones" exact>
            <ExAnalogiasDistribuciones1/>
          </Route>
          <Route path="/colegio/intervalotiempo" exact>
            <ExIntervaloTiempo1 />
          </Route>
          <Route path="/colegio/intervalotiempo2" exact>
            <ExIntervaloTiempo2 />
          </Route>
        </AppStyled>
      </Router>
    </Provider>
  );
}

export default App;
