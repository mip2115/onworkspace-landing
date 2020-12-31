import React from "react";
const InputTextField = (props) => {
  const {
    handleSignupFormInput,
    placeholder,
    errMsg,
    fieldId,
    disableErrorInputField,
  } = props;
  const onBlur = (e) => {};
  const onFocus = (e) => {
    if (errMsg) {
      disableErrorInputField(fieldId);
    }
  };
  const handleChange = (e) => {
    const val = e.target.value;
    handleSignupFormInput(fieldId, val);
  };

  return (
    <div className="signup-form-input">
      <input
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      <p className="input-error-msg">{errMsg}</p>
    </div>
  );
};

const SignupForm = (props) => {
  const {
    handleSignupFormInput = { handleSignupFormInput },
    validationErrors,
    submitSignupForm,
    disableErrorInputField,
  } = props;

  return (
    <div className="signup-form">
      <h3>Create an account</h3>
      <InputTextField
        fieldId="name"
        errMsg={validationErrors.NAME_ERROR}
        placeholder="name"
        disableErrorInputField={disableErrorInputField}
        handleSignupFormInput={handleSignupFormInput}
      />
      <InputTextField
        fieldId="mobile"
        errMsg={validationErrors.MOBILE_ERROR}
        placeholder="mobile"
        disableErrorInputField={disableErrorInputField}
        handleSignupFormInput={handleSignupFormInput}
      />
      <InputTextField
        fieldId="email"
        errMsg={validationErrors.EMAIL_ERROR}
        placeholder="email"
        disableErrorInputField={disableErrorInputField}
        handleSignupFormInput={handleSignupFormInput}
      />
    </div>
  );
};

export default SignupForm;
