import { combineReducers } from "redux";

const initialState = {
  displayUserSignup: true,
  isLoading: false,
};

const setSignupReducer = (state = true, action) => {
  switch (action.type) {
    case "SET_SIGNUP_FORM_ACTION":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  displayUserSignup: setSignupReducer,
});
