import { combineReducers } from "redux";
const setIsLoadingReducer = (state = false, action) => {
  console.log("SETTING STATE");
  switch (action.type) {
    case "SET_IS_LOADING":
      console.log("SET IS LOADING ");
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  isLoading: setIsLoadingReducer,
});
