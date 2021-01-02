import React from "react";
import SignupForm from "./signup-form";
import HostSignupForm from "./host-signup-form";
import { connect } from "react-redux";
import FormRecvd from "./form-recvd";
import SignupErrorModal from "../../modals/sign-up-modal";
import {
  submitSignupFormAction,
  disableErrorInputFieldAction,
  handleSignupFormInputAction,
  removeSmallImageCardAction,
} from "../../../redux/actions/signup-form-actions";
import { setIsLoadingAction } from "../../../redux/actions/utils";

const Signup = (props) => {
  const {
    validationErrors,
    submitSignupForm,
    totalState,
    disableErrorInputField,
    displayUserSignup,
    handleSignupFormInput,
    uploadedImages,
    signupFormInput,
    removeSmallImageCard,
    setIsLoading, // can remove this
    isLoading,
    formSuccess,
    formSubmitError,
  } = props;
  if (formSuccess) {
    return (
      <div id="signup" className="signup">
        <div className="signup-ctr">
          <FormRecvd />
        </div>
      </div>
    );
  }
  return (
    <div id="signup" className="signup">
      <div className="signup-ctr">
        {displayUserSignup ? (
          <SignupForm
            handleSignupFormInput={handleSignupFormInput}
            submitSignupForm={submitSignupForm}
            validationErrors={validationErrors}
            // setIsLoading={setIsLoading}
            isLoading={isLoading}
            disableErrorInputField={disableErrorInputField}
          />
        ) : (
          <HostSignupForm
            removeSmallImageCard={removeSmallImageCard}
            signupFormInput={signupFormInput}
            handleSignupFormInput={handleSignupFormInput}
            submitSignupForm={submitSignupForm}
            validationErrors={validationErrors}
            // setIsLoading={setIsLoading}
            isLoading={isLoading}
            disableErrorInputField={disableErrorInputField}
          />
        )}
        {!isLoading ? (
          <div
            onClick={isLoading ? null : submitSignupForm}
            className="signup-form-btn"
          >
            <div className="signup-form-btn-submit">Submit</div>
          </div>
        ) : (
          <div className="loading-btn">
            <div id="loading-btn-spinner" className="loading-btn-spinner"></div>
          </div>
        )}
      </div>
      {formSubmitError && (
        <SignupErrorModal formSubmitError={formSubmitError} />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    validationErrors: state.signupForm.formValidationErrors,
    uploadedImages: state.signupForm.signupFormInput,
    displayUserSignup: state.nav.displayUserSignup,
    signupFormInput: state.signupForm.signupFormInput,
    isLoading: state.utils.isLoading,
    formSuccess: state.signupForm.signupFormSubmitSuccess,
    formSubmitError: state.signupForm.formSubmitError,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    disableErrorInputField: (errorFieldToDisable) =>
      dispatch(disableErrorInputFieldAction(errorFieldToDisable)),
    submitSignupForm: () => dispatch(submitSignupFormAction()),
    handleSignupFormInput: (field, value) =>
      dispatch(handleSignupFormInputAction(field, value)),
    removeSmallImageCard: (idx) => dispatch(removeSmallImageCardAction(idx)),
    setIsLoading: (bool) => dispatch(setIsLoadingAction(bool)),
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(Signup);
