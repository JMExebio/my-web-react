import { combineReducers } from "redux";
import Courses from "./course-reducer";
import Themes from "./themes-reducer";
import Problems from "./problems-reducer";
import Theory from "./theory-reducer";

const rootReducers = combineReducers({
  Courses,
  Themes,
  Problems,
  Theory,
});

export default rootReducers;