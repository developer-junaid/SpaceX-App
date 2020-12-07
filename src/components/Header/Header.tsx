import React from "react";
import "./header.css";
import { Nav, Navbar } from "react-bootstrap";
import Rocket from "./../../assets/images/rocket-512.png";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      className="header-container"
      expand="md"
      bg="none"
      variant="dark"
    >
      <Navbar.Brand className="px-5 logo" href="#home">
        <img src={Rocket} alt="" />
        SpaceX
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end px-5"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#launches">Launches</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
