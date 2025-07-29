import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import foto from '../../assets/yo.png'; // reemplazá con tu imagen real

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <section id="home" className="hero-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#56458dff" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#e0e0e0ff",
              distance: 150,
              opacity: 0.5,
            },
            move: { enable: true, speed: 1, outModes: "bounce" },
            number: { value: 60 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      <Container className="hero-content">
        <Row className="align-items-center">
          <Col md={6} className="hero-t text-white text-center text-md-start fade-in">
            <h1 className="hero-name">Lautaro Aguilar</h1>
            <p className="hero-text fs-4">Desarrollador Web | Estudiante en Ciencia de Datos</p>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0 fade-in">
            <img src={foto} alt="Foto de Lautaro" className="hero-photo" />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;
