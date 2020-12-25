import React from "react";
const InputTextField = (props) => {
  const { placeholder, errMsg, fieldId, disableErrorInputField } = props;
  const onBlur = (e) => {};
  const onFocus = (e) => {
    if (errMsg) {
      disableErrorInputField(fieldId);
    }
  };
  return (
    <div className="signup-form-input">
      <input onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} />
      <p className="input-error-msg">{errMsg}</p>
    </div>
  );
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
const SignupForm = (props) => {
  const { validationErrors, submitSignupForm, disableErrorInputField } = props;

  return (
    <div className="signup-form">
      <h3>Create an account</h3>
      <InputTextField
        fieldId="name"
        errMsg={validationErrors.NAME_ERROR}
        placeholder="name..."
        disableErrorInputField={disableErrorInputField}
      />
      <InputTextField
        fieldId="mobile"
        errMsg={validationErrors.MOBILE_ERROR}
        placeholder="mobile..."
        disableErrorInputField={disableErrorInputField}
      />
      <InputTextField
        fieldId="email"
        errMsg={validationErrors.EMAIL_ERROR}
        placeholder="email..."
        disableErrorInputField={disableErrorInputField}
      />
      {/* <InputTextField placeholder="password..." />
      <InputTextField placeholder="confirm password..." /> */}
      <div onClick={submitSignupForm} className="signup-form-btn">
        <div>Submit</div>
      </div>
    </div>
  );
};

export default SignupForm;
