import React from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import Launches from "../components/Launches/Launches";
import LaunchesContainer from "../Data/Launches";
import "./main.css";

const Main = () => {
  return (
    <div className="main-container">
      <LandingPage />
      <Launches />
      {/* <LaunchesContainer /> */}
    </div>
  );
};

export default Main;
