import React from "react";
import SignupForm from "./signup-form";
import HostSignupForm from "./host-signup-form";
import { connect } from "react-redux";
import {
  submitSignupFormAction,
  disableErrorInputFieldAction,
} from "../../../redux/actions/signup-form-actions";

const Signup = (props) => {
  const {
    validationErrors,
    submitSignupForm,
    totalState,
    disableErrorInputField,
    displayHostSignup,
  } = props;
  return (
    <div id="signup" className="signup">
      {!displayHostSignup ? (
        <SignupForm
          submitSignupForm={submitSignupForm}
          validationErrors={validationErrors}
          disableErrorInputField={disableErrorInputField}
        />
      ) : (
        <HostSignupForm
          submitSignupForm={submitSignupForm}
          validationErrors={validationErrors}
          disableErrorInputField={disableErrorInputField}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    validationErrors: state.signupForm.formValidationErrors,
    displayHostSignup: state.nav.displayHostSignup,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    disableErrorInputField: (errorFieldToDisable) =>
      dispatch(disableErrorInputFieldAction(errorFieldToDisable)),
    submitSignupForm: (formValues) =>
      dispatch(submitSignupFormAction(formValues)),
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(Signup);
