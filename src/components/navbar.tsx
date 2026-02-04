import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarTop() {
  const [expanded, setExpanded] = useState(false); // track menu state

  const handleNavClick = () => {
    setExpanded(false); // collapse menu on link click
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary override-navbar"
      expanded={expanded} // control menu open/close
    >
      <Container>
        <Navbar.Brand href="#home">Sultan's Stash</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto override-navbar-nav">
            <Nav.Link href="#home" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" onClick={handleNavClick}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavClick}>
              Projects
            </Nav.Link>
            <Nav.Link href="#hobbies" onClick={handleNavClick}>
              Hobbies
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
