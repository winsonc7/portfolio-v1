import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiPython,
  DiHtml5,
  DiCss3,
  DiSwift,
} from "react-icons/di";
import {
  SiCplusplus,
  SiCsharp,
  SiRstudio
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="label">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <div className="label">C/C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <div className="label">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="label">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="label">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div className="label">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSwift />
        <div className="label">Swift</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio />
        <div className="label">R</div>
      </Col>
    </Row>
  );
}

export default Techstack;