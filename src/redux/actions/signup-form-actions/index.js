export const submitSignupFormAction = (form) => {
  return (dispatch, getState) => {
    const formErrors = {};
    // need to check if we are in host/regular sign up mode
    if (!form.name) {
      formErrors.NAME_ERROR = "You must provide a name";
    }

    // check if its a valid email too
    if (!form.email) {
      formErrors.EMAIL_ERROR = "You must provide an email address";
    }

    // check if its a valid phone number too
    if (!form.mobile) {
      formErrors.MOBILE_ERROR = "You must provide a phone number";
    }

    if (!form.images && getState().nav.displayHostSignup) {
      formErrors.IMAGES_ERROR =
        "You must provide at least 3 images of your work space";
    }

    if (!form.blurb && getState().nav.displayHostSignup) {
      formErrors.BLURB_ERROR = "You must provide a blurb";
    }

    if (!form.schedule && getState().nav.displayHostSignup) {
      formErrors.SCHEDULE_ERROR = "You must select an option";
    }

    if (!form.amenities && getState().nav.displayHostSignup) {
      formErrors.AMENITIES_ERROR = "You must select an option";
    }

    // maybe do this as well for customer to know where they all are.
    if (!form.location && getState().nav.displayHostSignup) {
      formErrors.LOCATION_ERROR =
        "You must select a location for your work space";
    }

    if (formErrors.length != 0) {
      dispatch({
        type: "FORM_VALIDATION_ERRORS",
        payload: formErrors,
      });
      dispatch({
        type: "FORM_SUBMIT_FAILED",
      });
    } else {
      // check if the call is ok
      // down here you should make the async call
      // this where you'd set isLoading = true
      // once you get the success return that it succeeded
    }
    // call succeeded
    dispatch({
      type: "FORM_SUBMIT_SUCCESS",
    });
  };
};

/**
const validationErrorsInitialState = {
  NAME_ERROR: null,
  EMAIL_ERROR: null,
  MOBILE_ERROR: null,
  BLURB_ERROR: null,
  IMAGES_ERROR: null,
  SCHEDULE_ERROR: null,
  AMENITIES_ERROR: null,
  LOCATION_ERROR: null,
}; */

export const disableErrorInputFieldAction = (errorFieldToDisable) => {
  return {
    type: "DISABLE_ERROR_INPUT_FIELD",
    payload: errorFieldToDisable,
  };
};

export const disableAllInputFieldsErrorsAction = () => {
  return {
    type: "DISABLE_ALL_ERRORS",
  };
};
