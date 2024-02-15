import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "ML/AI Engineer",
          "Theoretical Computer Scientist",
          "Quantitative Financial Analyst",
          "Chaser of Hopes and Dreams"
        ],
        autoStart: true,
        loop: true,
        delay: 80,
        deleteSpeed: 50,
        pauseFor: 1500
      }}
    />
  );
}

export default Type;
