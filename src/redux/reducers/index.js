import { combineReducers } from "redux";

import navbarReducer from "./navbar-reducers";
import signupFormReducer from "./signup-form-reducer";
import utils from "./utils";

const rootReducer = combineReducers({
  nav: navbarReducer,
  signupForm: signupFormReducer,
  utils: utils,
});

export default rootReducer;
