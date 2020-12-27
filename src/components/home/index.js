import React, { useEffect, useState } from "react";
import Info from "./info";
import Header from "./header";
import { Fade } from "react-reveal";
import Signup from "../auth/signup";
import HostSignup from "../auth/host-signup";
import MobileSignupBtns from "./signup-btns-mobile";
import { connect } from "react-redux";

const Home = (props) => {
  const [hostSignup, setHostSignup] = useState(true);
  const { displayUserSignup } = props;
  return (
    <div className="home">
      <div className="home-background">
        <Header />
        <MobileSignupBtns />
        <Info />
        <Signup />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayUserSignup: state.nav.displayUserSignup,
  };
};

export default connect(mapStateToProps)(Home);
