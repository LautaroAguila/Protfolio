import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { projects } from './data';
import './Projects.css';

const Projects = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleShow = (feature) => setSelectedFeature(feature);
  const handleClose = () => setSelectedFeature(null);

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        

        {projects.map((project, index) => (
          <Row className="mb-5 align-items-center project-block" key={index}>
            {/* Lado Izquierdo */}
            <Col md={4} className="text-center mb-4 mb-md-0">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.logo} alt={project.title} className="project-logo mb-3" />
              </a>
              <h3 className="app-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </Col>

            {/* Lado Derecho: Imágenes redondas que abren modal */}
            <Col md={8}>
              <Row className="gx-4 gy-4 justify-content-center">
                {project.features.map((feature, i) => (
                  <Col md={4} sm={12} key={i} className={`text-center feature-img feature-${i}`}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="feature-circle-img"
                      onClick={() => handleShow(feature)}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        ))}

        {/* Modal */}
        <Modal show={!!selectedFeature} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedFeature?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedFeature?.text}</p>
            {selectedFeature?.video && (
              <div className="ratio ratio-16x9 mt-3">
                <iframe
                  src={selectedFeature.video}
                  title="Video tutorial"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Projects;
