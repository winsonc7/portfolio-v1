import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! Thanks for visiting my portfolio! My name's Winson, and I'm a <span className="about-bold">junior at Stanford University</span> studying CS in the fields of <span className="about-bold">AI and Theory</span>. I'm also a <span className="about-bold">first-year masters student</span> studying Management Science & Engineering with a concentration in <span className="about-bold">computational finance</span>. As a fan of all things coding and theory, I love nothing more than building efficient programs that tackle difficult problems using innovative solutions.
            <br />
            <br />
            Some other fun facts about me:
            <ul>
            <li className="about-activity">
              <FaStar/> I grew up in Apple Valley, CA 🌵
            </li>
            <li className="about-activity">
              <FaStar/> I play piano and compose/arrange music 🎶
            </li>
            <li className="about-activity">
              <FaStar/> I love reading horror/thriller books 👻
            </li>
            <li className="about-activity">
              <FaStar/> My fav colors are pink + orange (can you tell?) 🌇
            </li>
          </ul>
            Feel free to send me any inquiries at <span className="about-bold">winsonc@stanford.edu</span>. I hope you enjoy the rest of my portfolio!
            </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
