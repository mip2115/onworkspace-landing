import axios from "axios";

export const handleSignupFormInputAction = (field, value) => {
  return {
    type: "HANDLE_SIGNUP_FORM_INPUT",
    payload: { field, value },
  };
};

export const removeSmallImageCardAction = (idx) => {
  return {
    type: "REMOVE_SMALL_IMAGE_CARD_ACTION",
    payload: idx,
  };
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const submitSignupFormAction = () => {
  return async (dispatch, getState) => {
    const form = getState().signupForm.signupFormInput;
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

    // if (!form.images && !getState().nav.displayUserSignup) {
    //   formErrors.IMAGES_ERROR =
    //     "You must provide at least 3 images of your work space";
    // }

    if (!form.blurb && !getState().nav.displayUserSignup) {
      formErrors.BLURB_ERROR = "You must provide a blurb";
    }

    if (!form.schedule && !getState().nav.displayUserSignup) {
      formErrors.SCHEDULE_ERROR = "You must select an option";
    }

    // if (!form.amenities && !getState().nav.displayUserSignup) {
    //   formErrors.AMENITIES_ERROR = "You must select an option";
    // }

    // maybe do this as well for customer to know where they all are.
    if (!form.location && !getState().nav.displayUserSignup) {
      formErrors.LOCATION_ERROR =
        "You must select a location for your work space";
    }
    if (form.location && !getState().nav.displayUserSignup) {
      const [city, state] = form.location.split(",");
      if (!city || !state) {
        formErrors.LOCATION_ERROR = "Please format location as city, ST";
      } else if (state && state.trim().length !== 2) {
        formErrors.LOCATION_ERROR = "Please format location as city, ST";
      }
    }

    if (
      Object.keys(formErrors).length !== 0 &&
      formErrors.constructor === Object
    ) {
      dispatch({
        type: "FORM_VALIDATION_ERRORS",
        payload: formErrors,
      });
      dispatch({
        type: "FORM_SUBMIT_FAILED",
      });
    } else {
      dispatch({
        type: "SET_IS_LOADING",
        payload: true,
      });

      const role = !getState().nav.displayUserSignup ? "host" : "guest";
      const tenancy = "testing"; // check env here
      const data = {
        role,
        tenancy,
        ...getState().signupForm.signupFormInput,
      };
      const headers = {
        "Content-Type": "application/json",
      };

      try {
        console.log("Making request...");
        // making the call, set to loading
        dispatch({
          type: "SET_IS_LOADING",
          payload: false,
        });
        const result = await axios.post(
          "http://onworkspace-alb-701800075.us-east-1.elb.amazonaws.com/api/auth/sign-up",
          data
        );
        // call success
        dispatch({
          type: "FORM_SUBMIT_SUCCESS",
          payload: true,
        });
      } catch (error) {
        console.log("ERROR IS");
        let errMsg = error.response.data.error;
        console.log(errMsg);

        if (errMsg.includes("user already exists")) {
          errMsg = "A user already exists with this email address";
        } else {
          errMsg = "An error occured.  Please try again in a few minutes.";
        }

        dispatch({
          type: "FORM_SUBMIT_ERROR",
          payload: errMsg,
        });
        setTimeout(() => setSubmitFormErrorToNull(dispatch, errMsg), 3000);
      }
      // await sleep(2000);
      // dispatch({
      //   type: "SET_IS_LOADING",
      //   payload: false,
      // });
      // check if the call is ok
      // down here you should make the async call
      // this where you'd set isLoading = true
      // once you get the success return that it succeeded
    }
    // call succeeded
  };
};

const setSubmitFormErrorToNull = (dispatch, errMsg) => {
  dispatch({
    type: "CLEAR_FORM_SUBMIT_ERROR",
    payload: errMsg,
  });
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
