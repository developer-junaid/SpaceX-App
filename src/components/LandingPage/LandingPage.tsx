import React from "react";
import NavBar from "../NavBar/NavBar";
import "./../../styles/landingPage.css";
import { Button } from "react-bootstrap";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <NavBar />
      <div className="content">
        <h1>SpaceX</h1>
        <p>
          SpaceX designs, manufactures and launches advanced rockets and
          spacecraft. The company was founded in 2002 to revolutionize space
          technology, with the ultimate goal of enabling people to live on other
          planets.
        </p>
        <Button variant="success">Launches</Button>
      </div>
    </div>
  );
}
