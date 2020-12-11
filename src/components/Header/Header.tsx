import React from "react";
import "./header.css";
import { Nav, Navbar } from "react-bootstrap";
import Rocket from "./../../assets/images/rocket-512.png";
import { animateScroll as scroll, Link } from "react-scroll";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      className="header-container"
      expand="md"
      bg="none"
      variant="dark"
    >
      <Navbar.Brand className="px-5 logo" onClick={() => scroll.scrollToTop()}>
        <img src={Rocket} alt="" />
        SpaceX
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end px-5"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Link
            activeClass="active"
            className="anchor"
            to="home-section"
            spy={true}
            smooth={true}
            delay={100}
            offset={-200}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="anchor"
            to="launches-section"
            spy={true}
            smooth={true}
            delay={100}
            offset={-200}
            duration={500}
          >
            Launches
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
