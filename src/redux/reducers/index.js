import { combineReducers } from "redux";

import navbarReducer from "./navbar-reducers";
import signupFormReducer from "./signup-form-reducer";

const rootReducer = combineReducers({
  nav: navbarReducer,
  signupForm: signupFormReducer,
});

export default rootReducer;
