import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && !expanded) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, expanded]);

  return (
    <Navbar
  expand="lg"
  expanded={expanded}
  className={`custom-navbar ${showNavbar ? 'show' : 'hide'}`}
  fixed="top"
>
  <Container fluid className="position-relative d-flex justify-content-between align-items-center px-4">
    <a href="#home" className="logo-wrapper-navbar">
      <img src={logo} alt="logo" className="main-logo" />
    </a>

    <Navbar.Toggle
      aria-controls="basic-navbar-nav"
      onClick={() => setExpanded(expanded ? false : true)}
    />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="gap-4 text-end">
        <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
        <Nav.Link href="#projects" onClick={() => setExpanded(false)}>Proyectos</Nav.Link>
        <Nav.Link href="#about" onClick={() => setExpanded(false)}>Sobre mí</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default NavBar;
