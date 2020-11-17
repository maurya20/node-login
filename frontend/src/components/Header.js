import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";




const Header = () => {

  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <h1>M&M</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              {" "}
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/"}>About</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/rfq"}>RFQ</Link>
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link>
              {" "}
              <Link to={"/login"}>Login</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/signup"}>SignUp</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
