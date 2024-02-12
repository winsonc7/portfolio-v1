import React from "react";
import Typewriter from "typewriter-effect";

function TypeIntro() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Welcome!')
          .pauseFor(1000)
          .typeString('<br/>')
          .typeString('My name is ')
          .typeString('<span style="color: #ff5500;">Winson</span>.')
          .pauseFor(2500)
          .start()
          .stop();
      }}
    />
  );
}

export default TypeIntro;
