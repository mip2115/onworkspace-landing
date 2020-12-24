import React from "react";

const InputTextField = (props) => {
  const { placeholder } = props;
  return (
    <div className="signup-form-input">
      <input placeholder={placeholder} />
    </div>
  );
};

const SignupForm = (props) => {
  return (
    <div className="signup-form">
      <h3>Create an account</h3>
      <InputTextField placeholder="name" />
      <InputTextField placeholder="mobile" />
      <InputTextField placeholder="email" />
      <InputTextField placeholder="password" />
      <InputTextField placeholder="confirm password" />
      <div className="signup-form-btn">
        <div>Submit</div>
      </div>
    </div>
  );
};

export default SignupForm;
