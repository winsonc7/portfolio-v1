import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FunStuffCardLeft from "./FunStuffCardLeft";
import FunStuffCardRight from "./FunStuffCardRight";
import Particle from "../ParticleLighter";
import Spinner from "../../Assets/Fidget-spinner.gif";
import Bach from "../../Assets/bach.jpg";
import Paradox from "../../Assets/paradox.jpg";
import AStar from "../../Assets/astar.png";

function FunStuff() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Particle />
        <h1 className="project-heading">
          Welcome to <span className="funstuff-heading" style={{fontSize: '1.0em', fontWeight: 'bold'}}>"ADHD Brain, Digitized"</span> <img style={{height: 60, paddingBottom:5}}src={Spinner} alt="fidget-spinner" />
        </h1>
        <Col style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Row md={4} className="funstuff-card">
            <FunStuffCardRight
              imgPath={AStar}
              title="The Best™ Search Algorithm"
              description="Ah, so many search algorithms to choose from, from the beloved Quicksort to the unfortunate Bogosort. But among these seemingly endless search methods, is there one that deserves to be called the best? One that reigns supreme over them all? The answer is yes. Don't believe me? Watch the video to experience the genius behind my favorite search algorithm and see for yourself."
              Link="https://www.youtube.com/watch?v=A60q6dcoCjw"
            />
          </Row>
          <Row md={4} className="funstuff-card">
            <FunStuffCardLeft
              imgPath={Bach}
              title="Classical Bangers"
              description="As I mentioned earlier, I'm a huge fan of classical music, ESPECIALLY hidden gems that aren't as popularized or well-known. Click the button below for a random, Winson-approved recommendation!"
              Link="music"
            />
          </Row>
          <Row md={4} className="funstuff-card">
            <FunStuffCardRight
              imgPath={Paradox}
              title="Banach-Tarski Paradox"
              description="Do you like having your brain hurt? Me too. This is one of my favorite videos on the internet: it builds foundation with the Hilbert's Hotel paradox, gives an intuitive explanation of the diagonalization argument, and presents a mind-boggling proof thanks to the mysterious workings of uncountable infinity. Enjoy!"
              Link="https://www.youtube.com/watch?v=s86-Z-CbaHA&t=1289s"
            />
          </Row>
        </Col>
      </Container>
    </Container>
  );
}

export default FunStuff;
