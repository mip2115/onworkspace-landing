import React, { useEffect, useState } from "react";
import Info from "./info";
import Header from "./header";
import { Fade } from "react-reveal";
const Home = () => {
  //   const [index, setIndex] = useState(0);
  //   const [ctrBackground, setCtrBackground] = useState("home home-background-1");

  //   const handleBackgroundTransitions = () => {
  //     const currentBackground = backgrounds[(index + 1) % backgrounds.length];
  //     const currentClass = "home " + currentBackground;
  //     setIndex(index + 1);
  //     setCtrBackground(currentClass);
  //   };
  // setInterval(handleBackgroundTransitions, 3000);
  //   console.log(ctrBackground);

  return (
    <div className="home">
      <div className="home-background">
        <Header />
      </div>
      <Info />
    </div>
  );
};

export default Home;