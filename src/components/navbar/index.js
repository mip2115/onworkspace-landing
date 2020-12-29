import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setSignupFormAction,
  setHostSignupFormAction,
  setDisplayMobileMenuAction,
} from "../../redux/actions/navbar-actions";
import NavbarMobile from "./navbar-mobile";
import { disableAllInputFieldsErrorsAction } from "../../redux/actions/signup-form-actions";
const Navbar = (props) => {
  const { displayMobileMenu, setDisplayMobileMenu } = props;
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  const handleDisplayMobileMenu = (e) => {
    const { setDisplayMobileMenu, displayMobileMenu } = props;
    setDisplayMobileMenu(!displayMobileMenu);
  };
  const handleClick = async (e) => {
    const {
      history,
      setSignupForm,
      setHostSignupForm,
      disableAllInputFieldsErrors,
      setIsLoading,
      displayMobileMenu,
      setDisplayMobileMenu,
    } = props;
    if (displayMobileMenu) {
      setDisplayMobileMenu(false);
    }

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

  useEffect(() => {
    var navbarTabs = document.getElementById("navbar-tabs");
    //I'm using "click" but it works with any event
    document.addEventListener("click", function (event) {
      var isClickInside = navbarTabs.contains(event.target);

      if (!isClickInside) {
        //the click was outside the specifiedElement, do something
        setDisplayMobileMenu(false);
      }
    });

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
    <div className={`navbar-ctr ${scrollState}`}>
      <div className={`navbar`}>
        <div className="navbar-logo">onCoffeespace()</div>
        <div id="navbar-tabs" className="navbar-tabs">
          <div onClick={handleDisplayMobileMenu} className="navbar-tab-mobile">
            &#x2630;
          </div>

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

      {displayMobileMenu && (
        <div className="navbar-mobile">
          <div
            onClick={() => setDisplayMobileMenu(false)}
            className="navbar-mobile-tab"
          >
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="mailto:mip2115@columbia"
            >
              Contact
            </a>
          </div>
          <div
            onClick={handleClick}
            id="about"
            name="about"
            className="navbar-mobile-tab"
          >
            About
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    displayUserSignup: state.nav.displayUserSignup,
    displayMobileMenu: state.nav.displayMobileMenu,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    setSignupForm: (bool) => dispatch(setSignupFormAction(bool)),
    disableAllInputFieldsErrors: () =>
      dispatch(disableAllInputFieldsErrorsAction()),
    setDisplayMobileMenu: (bool) => dispatch(setDisplayMobileMenuAction(bool)),
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, dispatchStateToProps)
)(Navbar);
