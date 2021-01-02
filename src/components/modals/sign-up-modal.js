import React from "react";

const SignupErrorModal = (props) => {
  const { formSubmitError } = props;
  return <div className="signup-error-modal">{formSubmitError}</div>;
};

export default SignupErrorModal;
