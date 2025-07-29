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
              la experiencia del usuario y solucionar problemas con herramientas sencillas.
            </p>
            <p className="about-text">
              Actualmente estoy cursando la Licenciatura en Ciencias de Datos, y disfruto combinar
              lógica, estética y funcionalidad en cada proyecto.
            </p>

            <ul className="skills-list">
              <li>⚛️ React JS </li>
              <li>🐍 Python </li>
              <li>🎨 Bootstrap / CSS </li>
              <li>🔥 Firebase </li>
              <li>💻 Git / GitHub </li>
            </ul>

            <Row className="justify-content-center align-items-center mt-4 cv-boton">
              <a href={cv} download>
                <Button variant="dark">Descargar CV</Button>
              </a>
            </Row>

          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
