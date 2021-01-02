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

const formSubmitErrorReducer = (state = null, action) => {
  switch (action.type) {
    case "FORM_SUBMIT_ERROR":
      return action.payload;
    case "CLEAR_FORM_SUBMIT_ERROR":
      return null;
    default:
      return state;
  }
};

const initialFormValuesState = {
  name: null,
  email: null,
  mobile: null,
  blurb: null,
  images: [],
  schedule: null,
  amenities: null,
  location: null,
};

export const handleSignupFormInputReducer = (
  state = initialFormValuesState,
  action
) => {
  switch (action.type) {
    case "REMOVE_SMALL_IMAGE_CARD_ACTION":
      const idx = action.payload;
      const images = state.images.filter((img, i) => i !== idx);
      return {
        ...state,
        images,
      };
    case "HANDLE_SIGNUP_FORM_INPUT":
      const { field, value } = action.payload;
      if (field == "images") {
        console.log("got an image");

        const newImages = [...state.images, value];
        return {
          ...state,
          [field]: newImages,
        };
      }
      return {
        ...state,
        [field]: value,
      };
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

// const setIsLoadingReducer = (state = false, action) => {
//   switch (action.type) {
//     case "SET_IS_LOADING":
//       return action.payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  formValidationErrors: formValidationErrorsReducer,
  signupFormSubmitSuccess: signupFormSubmitSuccessReducer,
  //   isLoading: setIsLoadingReducer,
  signupFormInput: handleSignupFormInputReducer,
  formSubmitError: formSubmitErrorReducer,
});
