import { combineReducers } from "redux";

const initialState = {
  displayHostSignup: true,
};
const setSignupReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_SIGNUP_FORM_ACTION":
      return false;
    case "SET_HOST_SIGNUP_FORM_ACTION":
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  displayHostSignup: setSignupReducer,
});

// return (dispatch, getState) => {
