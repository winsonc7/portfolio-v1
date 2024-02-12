import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiVercel,
  SiGithub,
  SiAmazonaws,
  SiNumpy,
  SiPytorch,
  SiUnity,
  SiWebgl,
  SiThreedotjs,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiPandas,
  SiBlender
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="label">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="label">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="label">Git/Github</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="label">VSCode</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div className="label">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiThreedotjs />
        <div className="label">Three.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebgl />
        <div className="label">WebGL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
        <div className="label">Unity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftword />
        <div className="label">Word</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <div className="label">Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div className="label">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
        <div className="label">Blender</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <div className="label">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div className="label">NumPy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <div className="label">AWS</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
