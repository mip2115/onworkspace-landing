import React, { useState, useEffect } from "react";

const Navbar = (props) => {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");
  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        setScrollState("scroll-navbar");
        // if (scrollState !== "amir") {
        //   setScrollState("scrollNavbar");
        // }
      } else {
        setScrollState("top-navbar");
        // if (scrollState !== "top") {
        //   setScrollState("top");
        // }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <div className={`navbar ${scrollState}`}>
      <div className="navbar-logo">LOGO</div>
      <div className="navbar-tabs">
        <div className="navbar-tab">
          <p>About</p>
        </div>
        <div className="navbar-tab">
          <p>Contact</p>
        </div>
        <div className="navbar-tab">
          <p>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
