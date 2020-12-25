import { combineReducers } from "redux";

const signupFormSubmitSuccessReducer = (state = false, action) => {
  switch (action.type) {
    case "FORM_SUBMIT_FAILED":
      return false;
    case "FORM_SUBMIT_SUCCESS":
      return true;
    default:
      return state;
  }
};

const validationErrorsInitialState = {
  NAME_ERROR: null,
  EMAIL_ERROR: null,
  MOBILE_ERROR: null,
  BLURB_ERROR: null,
  IMAGES_ERROR: null,
  SCHEDULE_ERROR: null,
  AMENITIES_ERROR: null,
  LOCATION_ERROR: null,
};

export const fieldToErrorMap = {
  name: "NAME_ERROR",
  mobile: "MOBILE_ERROR",
  email: "EMAIL_ERROR",
  blurb: "BLURB_ERROR",
  images: "IMAGES_ERROR",
  amenities: "AMENITIES_ERROR",
  location: "LOCATION_ERROR",
  schedule: "SCHEDULE_ERROR",
};

const formValidationErrorsReducer = (
  state = validationErrorsInitialState,
  action
) => {
  switch (action.type) {
    case "FORM_VALIDATION_ERRORS":
      const result = {
        ...state,
        ...action.payload,
      };
      return result;
    case "DISABLE_ERROR_INPUT_FIELD":
      const errorFieldToDisable = fieldToErrorMap[action.payload];
      return {
        ...state,
        [errorFieldToDisable]: null,
      };
    case "DISABLE_ALL_ERRORS":
      return validationErrorsInitialState;
    default:
      return state;
  }
};

const setIsLoadingReducer = (state = true, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return true;
    case "IS_LOADED":
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  formValidationErrors: formValidationErrorsReducer,
  signupFormSubmitSuccess: signupFormSubmitSuccessReducer,
  isLoading: setIsLoadingReducer,
});
