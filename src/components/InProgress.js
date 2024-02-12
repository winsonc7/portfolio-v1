import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";

function InProgress() {
  return (
    <Container fluid className="home-section">
      <Container className="home-content" style={{ fontSize: "1.6em", textAlign: "center"}}>
        <Particle />
        <h1 className="project-heading">
          <strong className="purple">Oops! This page is a work in progress!</strong>
        </h1>
        <p style={{ color: "white" }}>
          Please come back later to check out the finished page!
        </p>
      </Container>
    </Container>
  );
}

export default InProgress;
