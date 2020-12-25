import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  const handleClick = (e) => {
    const { history } = props;

    if (e.target.id == "signUp") {
      if (window.location.pathname !== "/sign-up") {
        history.push("/sign-up");
      }
    } else if (e.target.id == "about") {
      const elem = document.getElementById("info");
      const info = elem.getBoundingClientRect();
      window.scrollTo(info.left, info.top - 100);
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
      <div className="navbar-logo"></div>
      <div className="navbar-tabs">
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

export default withRouter(Navbar);
