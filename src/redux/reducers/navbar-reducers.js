import { combineReducers } from "redux";

const initialState = {
  displayUserSignup: true,
  displayMobileMenu: false,
};

const setSignupReducer = (state = true, action) => {
  switch (action.type) {
    case "SET_SIGNUP_FORM_ACTION":
      return action.payload;
    default:
      return state;
  }
};

const setDisplayMobileMenuReducer = (state = false, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SET_DISPLAY_MOBILE_MENU":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  displayUserSignup: setSignupReducer,
  displayMobileMenu: setDisplayMobileMenuReducer,
});
