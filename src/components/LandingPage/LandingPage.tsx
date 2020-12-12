import React from "react";
import "./landingPage.css";
import Header from "../Header/Header";
import { Link } from "react-scroll";
import Typical from "react-typical";
export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <Header />
      <div className="content" id="home-section">
        <h1>
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["Welcome to SpaceX", 1200, "SpaceX Lauches", 1200]}
          />
        </h1>
        <p>
          SpaceX designs, manufactures and launches advanced rockets and
          spacecraft. The company was founded in 2002 to revolutionize space
          technology, with the ultimate goal of enabling people to live on other
          planets.
        </p>

        <Link
          className="launches-btn"
          to="launches-section"
          spy={true}
          smooth={true}
          delay={100}
          offset={-200}
          duration={500}
        >
          Launches
        </Link>
      </div>
    </div>
  );
}
