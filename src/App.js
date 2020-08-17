import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import AnimeSVG from "./components/pruebas/animeSVG";
import Home from "./views/home";
import ThemesView from "./views/themes-view"
import Razones from "./components/slider-presentacion/razones";
import SliderFondo from "./components/slider-presentacion/slider-fondo";
import Solution from "./components/solution-problem/solution";

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
    <Router>
      <AppStyled>
        <Route path="/prueba">
          <Solution />
        </Route>
        <Route path="/aritmetica">
          <ThemesView />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </AppStyled>
    </Router>
  );
}

export default App;
