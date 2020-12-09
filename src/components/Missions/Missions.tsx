import React from "react";
import "./missions.css";
import ScrollableTabsButtonAuto from "./Tabs";

const Missions = () => {
  return (
    <div className="missions-container">
      <h1 className="heading">Missions</h1>
      <ScrollableTabsButtonAuto />
    </div>
  );
};

export default Missions;
