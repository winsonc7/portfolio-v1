import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../ParticleLighter";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import RedGeo from "../../Assets/redgeo.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Particle/>
          <Col
            md={5}
            style={{paddingBottom: "50px", zIndex: 1 }}
            className="about-img">
            <img src={RedGeo} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.5em", paddingBottom: "20px" }}>
              More About Me
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Programming Languages
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Libraries/Software Tools
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
