import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../ParticleLighter";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import test from "../../Assets/pfp-2.png";
import pacman from "../../Assets/pacman.gif";
import selfdriving from "../../Assets/selfdriving.gif";
import threeD from "../../Assets/3d-demo.gif";
import CSSG from "../../Assets/cssg.png";
import GDX from "../../Assets/gdx.png";
import PiNet from "../../Assets/pi.png";
import Markov from "../../Assets/markov1.png";
import Blender from "../../Assets/blender.gif";
import PixelGame from "../../Assets/pixelgame.gif";
import ToT from "../../Assets/ToT.png";
import Cheme from "../../Assets/cheme.png";
import Log from "../../Assets/log.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Ongoing Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={threeD}
              isBlog={false}
              title="3D Portfolio"
              description="Whenever I have free time on my hands, I work on teaching myself WebGL and Three.JS so I can eventually making a new portfolio that's 3D and interactive, like a video game! I still have much to learn, but feel free to check out the demo link to see a prototype I made to play around with what I've learned so far. Used JS, WebGL, Three.JS, Vercel."
              ghLink="https://github.com/winsonc7/portfolio_v0"
              demoLink="https://winsonc-portfolio-v0.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PiNet}
              isBlog={false}
              title="E-Commerce App w/ Pi Network"
              description="Developing a high-impact web application to deploy to Pi Network’s Web3 app ecosystem in 2024. Managing a team of developers as a product manager to create a cryptocurrency e-commerce app. Focusing primarily on frontend development. Using HTML, CSS, JavaScript, React, Figma."
              ghLink="https://github.com/pi-apps/local-commerce-hub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GDX}
              isBlog={false}
              title="AI Negotiation w/ GDX"
              description="Currently collaborating with GDX on a software project with aims to automate Thailand e-commerce sales with AI. Working with four developers to create a negotiation chatbot with a ChatGPT-powered engine. Exploring avenues rooted in game theory for maximizing sales rates and profits. Using Chat-GPT, Python, React, Node.js."       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CSSG}
              isBlog={false}
              title="CS+SG Education Outreach"
              description="CS+Social Good is a Stanford student organization that aims to better society through code! As a general member, I designed and delivered CS lectures to under-resourced high schools in the Bay Area. As the current Education Outreach Chair, I'm directing a project focused on scaling our operations and extending our impact across the state and nation.
              ."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Markov}
              isBlog={false}
              title="Numerical Stability in Markov Chains"
              description="Exploring different possibilities for the numerical stability resulting from uniformization in Markov jump processes, specifically investigating catastrophic cancellation and eigenvalue spectral shift. Relating findings to applications in operations research and queueing theory. Using Python, NumPy."
              ghLink="https://github.com/winsonc7/fp_theory"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Past Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pacman}
              isBlog={false}
              title="Pacman RL Agents"
              description="Programmed a Python reinforcement learning agent to clear 1980s Pacman levels with 85% accuracy. Tested agents with minimax, expectimax, and alpha-beta pruning algorithms for decision analysis. Designed custom reward function which improved baseline performance by 22%. Used Python."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blender}
              isBlog={false}
              title="Horror VR Game"
              description="Worked in a team of three to develop a corporate horror VR game for final course project. Focused on storyboarding, character and asset models, and music/sound design. This project had a steep learning curve for me, but was super fun and rewarding in the end! I'll definitely be making more games in the future. Used Unity, C#, Blender."
              ghLink="https://github.com/annien23/CS11SI-Project/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToT}
              isBlog={false}
              title="Training LMs with Offline RL"
              description="Aided a PhD student in researching how language models can learn to optimize solution-finding using offline reinforcement learning. Improved model performance by instigating research pivot from investigating DFS/BFS search trees to exploring search heuristics. Used Python, Hugging Face Transformers, and wandb.ai for training."
              ghLink="https://github.com/kanishkg/rational-cot"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PixelGame}
              isBlog={false}
              title="Pixel Sandbox"
              description='This is the first "big" program I ever wrote! I wrote it with 10 weeks of coding experience under my belt for a class graphics competition. This elemental sandbox reminds me a lot of pixed games I played as a kid, and it was a fun creative challenge to think of how different elements could interact with each other + how to implement them. Used Python Tkinter.'
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cheme}
              isBlog={false}
              title="Engineering Skin-like Sensors"
              description="Fabricated flexible conductive devices for sEMG recording as a Bao Lab research assistant. Optimized the conductive and mechanical properties of hydrogel sensors. Implemented design alterations which increased robustness and decreased WER by 35%. Also created an optimized fabrication procedure which increased device yield by 50% per cycle."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={selfdriving}
              isBlog={false}
              title="Self-Driving Car"
              description="Programmed a self-driving vehicle simulation. Used bayesian networks to maintain and update a belief distribution over the probabilities of the locations of neighboring vehicles. Used Python."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Log}
              isBlog={false}
              title="Investment Strategy Log"
              description="Analyzed the performance of various investment strategies over a 10-week period as a course project. Explored short-selling, buying on leverage, value investing, momentum strategies, and Fama-French three-factor models. Used R/RStudio, Microsoft Excel."
            />
          </Col>
        </Row>
      </Container>
      <p style={{color: "whitesmoke"}}>*Unable to publish code for certain projects due to university guidelines</p>
    </Container>
  );
}

export default Projects;
