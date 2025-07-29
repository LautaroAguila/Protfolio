import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import logo from '../../assets/logo.png'; // Reemplazá con tu logo real

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={4} className="mb-4 mb-md-0 text-center">
            <img src={logo} alt="Logo personal" className="contact-logo" />
          </Col>
          <Col md={8}>
            <h3 className="contact-title">¡Contactame!</h3>

            <p className="contact-info">
              <i className="bi bi-telephone-fill me-2"></i>
              +54 9 11 6530 0627
            </p>

            <p className="contact-info">
              <i className="bi bi-envelope-fill me-2"></i>
              lautaroaguilar.c@gmail.com
            </p>

            <p className="contact-info">
              <i className="bi bi-linkedin me-2"></i>
              <a
                href="https://www.linkedin.com/in/lautaro-aguilar-19261b248/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com
              </a>
            </p>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
