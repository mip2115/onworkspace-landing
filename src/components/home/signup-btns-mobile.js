import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setSignupFormAction,
  setHostSignupFormAction,
} from "../../redux/actions/navbar-actions";
import { disableAllInputFieldsErrorsAction } from "../../redux/actions/signup-form-actions";
const MobileSignupBtns = (props) => {
  const handleClick = async (e) => {
    const {
      history,
      setSignupForm,
      setHostSignupForm,
      disableAllInputFieldsErrors,
      setIsLoading,
    } = props;

    if (e.target.id == "signUp") {
      disableAllInputFieldsErrors();
      await setSignupForm(true);
      const elem = document.getElementById("signup");
      const info = elem.getBoundingClientRect();

      const bodyRect = document.body.getBoundingClientRect();
      const offset = info.top - bodyRect.top;
      var scrolled = document.scrollingElement.scrollTop;

      window.scrollTo(info.left, offset - 150);
    } else if (e.target.id == "about") {
      const elem = document.getElementById("info");
      const info = elem.getBoundingClientRect();

      const bodyRect = document.body.getBoundingClientRect();
      const offset = info.top - bodyRect.top;
      var scrolled = document.scrollingElement.scrollTop;

      window.scrollTo(info.left, offset - 100);
    } else if (e.target.id == "applyToBeHost") {
      disableAllInputFieldsErrors();
      await setSignupForm(false);
      const elem = document.getElementById("signup");
      const info = elem.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      const offset = info.top - bodyRect.top;
      var scrolled = document.scrollingElement.scrollTop;
      window.scrollTo(info.left, offset - 150);
    }
  };

  return (
    <div onClick={handleClick} className="home-signup-btns-mobile">
      <div id="signUp" className="home-signup-btn">
        Sign up
      </div>

      <div onClick={handleClick} id="applyToBeHost" className="home-signup-btn">
        Apply to be a host
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayUserSignup: state.nav.displayUserSignup,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    setSignupForm: (bool) => dispatch(setSignupFormAction(bool)),
    disableAllInputFieldsErrors: () =>
      dispatch(disableAllInputFieldsErrorsAction()),
  };
};
export default compose(connect(mapStateToProps, dispatchStateToProps))(
  MobileSignupBtns
);
