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
            <h3 className="contact-title">¡Conectemos!</h3>
            <p className="contact-info">📞 +54 9 11 1234 5678</p>
            <p className="contact-info">✉️ lautaro.aguilar@email.com</p>
            <p className="contact-info">
              🔗 <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">linkedin.com/in/tuusuario</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
