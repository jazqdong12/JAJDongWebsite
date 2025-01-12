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

  const handleNavClick = () => {
    setExpanded(false); // Close the Navbar
  };

  return (
    <Navbar expand="md" fixed="top" data-bs-theme="dark" expanded={expanded}>
      <Container>
        <Navbar.Brand className="ms-0" href="/">
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
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <NavDropdown
              title="Models"
              id="basic-nav-dropdown"
              className="custom-dropdown"
              onMouseEnter={(e) => {
                const dropdown = e.currentTarget;
                const menu = dropdown.querySelector(".dropdown-menu");
                if (menu) {
                  dropdown.classList.add("show");
                  menu.classList.add("show");
                }
              }}
              onMouseLeave={(e) => {
                const dropdown = e.currentTarget;
                const menu = dropdown.querySelector(".dropdown-menu");
                if (menu) {
                  dropdown.classList.remove("show");
                  menu.classList.remove("show");
                }
              }}
            >
              <NavDropdown.Item as={Link} to="/models" onClick={handleNavClick}>
                View All
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/models/sable-palm"
                onClick={handleNavClick}
              >
                Sable Palm
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/models/sable-palm-plus"
                onClick={handleNavClick}
              >
                Sable Palm Plus
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/models/bamboo-palm"
                onClick={handleNavClick}
              >
                Bamboo Palm
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/models/the-1350"
                onClick={handleNavClick}
              >
                The 1350
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/models/the-duplex"
                onClick={handleNavClick}
              >
                The Duplex
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
