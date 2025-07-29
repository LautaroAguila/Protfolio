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

  const closeMenu = () => setExpanded(false);

  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        className={`custom-navbar ${showNavbar ? 'show' : 'hide'}`}
        fixed="top"
      >
        <Container fluid className="d-flex justify-content-between align-items-center px-4">
          <a href="#home" className="logo-wrapper-navbar d-none d-lg-block">
            <img src={logo} alt="logo" className="main-logo" />
          </a>

          <Navbar.Toggle
            aria-controls="mobile-menu"
            onClick={() => setExpanded(!expanded)}
          />

          {/* Desktop nav */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end d-none d-lg-flex">
            <Nav className="gap-4 text-end">
              <Nav.Link href="#contact">Contacto</Nav.Link>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
              <Nav.Link href="#about">Sobre mí</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile custom menu */}
      {expanded && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <a href="#home" onClick={closeMenu}>
              <img src={logo} alt="logo" className="mobile-logo" />
            </a>
            <Nav className="flex-column text-center">
              <Nav.Link href="#about" onClick={closeMenu}>Sobre mí</Nav.Link>
              <Nav.Link href="#projects" onClick={closeMenu}>Proyectos</Nav.Link>
              <Nav.Link href="#contact" onClick={closeMenu}>Contacto</Nav.Link>
            </Nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
