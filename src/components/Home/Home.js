import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pfp from "../../Assets/pfp-3.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./TypeLoop";
import TypingAnimation from "./TypeAnimation";
import TypeIntro from "./TypeIntro";
import About from "../About/About"
import Projects from "../Projects/Projects"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
        <Row>
            <Col md={7} className="home-header">
            <Particle />
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Winson Cheng.</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
              <h1 className="pre-typing">
                I am a
              </h1>
              <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={pfp}
                alt="home pic"
                className="pfp"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
