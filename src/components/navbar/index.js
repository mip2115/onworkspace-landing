import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setSignupFormAction,
  setHostSignupFormAction,
} from "../../redux/actions/navbar-actions";

import { disableAllInputFieldsErrorsAction } from "../../redux/actions/signup-form-actions";
const Navbar = (props) => {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

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
      await setSignupForm();
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
      await setHostSignupForm();
      const elem = document.getElementById("signup");
      const info = elem.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      const offset = info.top - bodyRect.top;
      var scrolled = document.scrollingElement.scrollTop;
      window.scrollTo(info.left, offset - 150);
    }
  };

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        setScrollState("scroll-navbar");
      } else {
        setScrollState("top-navbar");
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <div className={`navbar ${scrollState}`}>
      <div className="navbar-loading"></div>
      <div className="navbar-tabs">
        <div onClick={handleClick} className="navbar-tab apply-host-btn">
          <p id="applyToBeHost" name="applyToBeHost">
            Apply to be a host
          </p>
        </div>
        <div onClick={handleClick} className="navbar-tab">
          <p id="about" name="about">
            About
          </p>
        </div>
        <div className="navbar-tab">
          <p>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="mailto:mip2115@columbia"
            >
              Contact
            </a>
          </p>
        </div>
        <div
          id="signUp"
          name="signUp"
          onClick={handleClick}
          className="navbar-tab"
        >
          <p id="signUp" name="signUp">
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    displayHostSignup: state.nav.displayHostSignup,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    setIsLoading: (bool) => dispatch(setIsLoadingAction(bool)),
    setSignupForm: () => dispatch(setSignupFormAction()),
    setHostSignupForm: () => dispatch(setHostSignupFormAction()),
    disableAllInputFieldsErrors: () =>
      dispatch(disableAllInputFieldsErrorsAction()),
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, dispatchStateToProps)
)(Navbar);
