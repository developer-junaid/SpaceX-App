import React from "react";
import "./launches.css";
import ScrollableTabsButtonAuto from "./Tabs";

const Launches = () => {
  return (
    <div className="missions-container">
      <h1 className="heading">Launches</h1>
      <ScrollableTabsButtonAuto />
    </div>
  );
};

export default Launches;
