import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <Navbar expand="md" className="footer" data-bs-theme="dark">
      <Container className="footer-top">
        {/* Footer Brand */}
        <Navbar.Brand href="/" className="d-none d-md-block">
          <img src={logo} alt="JajDongHomes" style={{ height: "80px" }} />
        </Navbar.Brand>

        {/* Footer Navigation */}
        <Nav className="footer-body">
          {/* Visit Our Office Section */}
          <Nav.Item>
            <h6 className="footer-list-title">Visit Our Office</h6>
            <Nav.Link
              className="label-medium"
              href="https://www.google.com/maps/search/?api=1&query=JAJ+Dong+Homes+Inc"
              target="_blank"
              rel="noopener noreferrer"
            >
              405 Brian Ave N, Lehigh Acres, FL 33971
            </Nav.Link>
          </Nav.Item>

          {/* Get in Touch Section */}
          <Nav.Item>
            <h6 className="footer-list-title">Get in Touch</h6>
            <Nav.Link as={Link} to="/contact" className="label-medium">
              jajdonghomes@gmail.com
            </Nav.Link>
            <Nav.Link href="tel:+12397707720" className="label-medium">
              239 - 770 - 7720
            </Nav.Link>
          </Nav.Item>

          {/* Support Section */}
          <Nav.Item>
            <h6 className="footer-list-title">Support</h6>
            <Nav.Link as={Link} to="/about" className="label-medium">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/privacy" className="label-medium">
              Privacy Policy & Terms
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center py-3">
        <p className="mb-0">Copyright © JAJ Dong Homes, Inc.</p>
      </div>
    </Navbar>
  );
}

export default Footer;
