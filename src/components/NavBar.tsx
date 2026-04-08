import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../App.css';

export default function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" className="nakshatra-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand-text">
          ✦ NAKSHATRA
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="main-nav"
          style={{ borderColor: 'var(--border-gold)', filter: 'invert(0.7)' }}
        />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-1">
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/competition" className="nav-link-custom">Competition</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
