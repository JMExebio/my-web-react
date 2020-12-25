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
        </AppStyled>
      </Router>
    </Provider>
  );
}

export default App;
