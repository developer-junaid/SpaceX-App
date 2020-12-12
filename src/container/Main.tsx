import React from "react";
import Footer from "../components/Footer/Footer";
import LandingPage from "../components/LandingPage/LandingPage";
import Launches from "../components/Launches/Launches";
import "./main.css";

const Main = () => {
  return (
    <div className="main-container">
      <LandingPage />
      <Launches />
      <Footer />
    </div>
  );
};

export default Main;
