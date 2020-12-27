import React from "react";
import SignupForm from "./signup-form";
import HostSignupForm from "./host-signup-form";
import { connect } from "react-redux";
import {
  submitSignupFormAction,
  disableErrorInputFieldAction,
  handleSignupFormInputAction,
} from "../../../redux/actions/signup-form-actions";

const Signup = (props) => {
  const {
    validationErrors,
    submitSignupForm,
    totalState,
    disableErrorInputField,
    displayHostSignup,
    handleSignupFormInput,
    uploadedImages,
  } = props;
  return (
    <div id="signup" className="signup">
      {/* <div className="signup-ctr"> */}
      {!displayHostSignup ? (
        <SignupForm
          handleSignupFormInput={handleSignupFormInput}
          submitSignupForm={submitSignupForm}
          validationErrors={validationErrors}
          disableErrorInputField={disableErrorInputField}
        />
      ) : (
        <HostSignupForm
          handleSignupFormInput={handleSignupFormInput}
          submitSignupForm={submitSignupForm}
          validationErrors={validationErrors}
          disableErrorInputField={disableErrorInputField}
        />
      )}
      {/* <div onClick={submitSignupForm} className="signup-form-btn">
          <div>Submit</div>
        </div>
      </div> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    validationErrors: state.signupForm.formValidationErrors,
    uploadedImages: state.signupForm.signupFormInput,
    displayHostSignup: state.nav.displayHostSignup,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    disableErrorInputField: (errorFieldToDisable) =>
      dispatch(disableErrorInputFieldAction(errorFieldToDisable)),
    submitSignupForm: (formValues) =>
      dispatch(submitSignupFormAction(formValues)),
    handleSignupFormInput: (field, value) =>
      dispatch(handleSignupFormInputAction(field, value)),
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(Signup);
