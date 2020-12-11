import React from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import Launches from "../components/Launches/Launches";
import "./main.css";

const Main = () => {
  return (
    <div className="main-container">
      <LandingPage />
      <Launches />
    </div>
  );
};

export default Main;
