import React from "react";
import "./landingPage.css";
import { Button } from "react-bootstrap";
import Header from "../Header/Header";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <Header />
      <div className="content" id="home-section">
        <h1>SpaceX</h1>
        <p>
          SpaceX designs, manufactures and launches advanced rockets and
          spacecraft. The company was founded in 2002 to revolutionize space
          technology, with the ultimate goal of enabling people to live on other
          planets.
        </p>

        <a href="#launches-section">
          <Button className="launches-btn" variant="success">
            Launches
          </Button>
        </a>
      </div>
    </div>
  );
}
