import React from "react";
import "./../../styles/navbar.css";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      className="navbar-container"
      expand="md"
      bg="none"
      variant="dark"
    >
      <Navbar.Brand className="px-5 logo" href="#home">
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

export default NavBar;
