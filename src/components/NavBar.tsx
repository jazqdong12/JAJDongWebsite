import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="md" fixed="top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="me-auto" href="/">
          <img src={logo} style={{ height: "70px" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown
              title="Models"
              id="basic-nav-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/models">
                All Models
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/models/sable-palm">
                Sable Palm
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/models/sable-palm-plus">
                Sable Palm Plus
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/models/bamboo-palm">
                Bamboo Palm
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/models/the-1350">
                The 1350
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/models/the-duplex">
                The Duplex
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
