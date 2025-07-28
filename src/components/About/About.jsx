import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
import perfil from '../../assets/yo2.png';
import cv from '../../assets/CV.pdf';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <h2 className="text-center mb-5 section-title">Sobre mí</h2>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <img src={perfil} alt="Foto de perfil" className="about-photo" />
          </Col>
          <Col md={8}>
            <p className="about-text">
              ¡Hola! Soy Lautaro Aguilar, desarrollador web con pasión por la tecnología y el diseño.
              Me especializo en construir interfaces modernas con React JS y Bootstrap, enfocándome en
              la experiencia del usuario y el rendimiento.
            </p>
            <p className="about-text">
              Actualmente estoy finalizando la carrera de Ciencias Físicas, y disfruto combinar
              lógica, estética y funcionalidad en cada proyecto.
            </p>

            <ul className="skills-list">
              <li>⚛️ React JS / Vite</li>
              <li>🎨 Bootstrap / CSS / Animaciones</li>
              <li>🔥 Firebase (auth, storage, Firestore)</li>
              <li>📱 Responsive Design</li>
              <li>💻 Git / GitHub / Deploy en Vercel</li>
            </ul>

            <a href={cv} download className="mt-3 d-inline-block">
              <Button variant="dark">Descargar CV</Button>
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
