import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const TypingAnimation = () => {
  useEffect(() => {
    // Welcome message typing animation
    new Typewriter('#welcome-text', {
      strings: ["Welcome! 👋🏻 My name is Winson Cheng."],
      autoStart: true,
      loop: false,
      cursor: '',
      onComplete: () => {
        // "I am" looping animation
        new Typewriter('#iam-text', {
          strings: ["a programmer", "an inventor", "a designer", "a thinker"],
          autoStart: true,
          loop: true,
          cursor: '',
        });
      }
    });

    // No cleanup function needed for typewriter-effect

  }, []);

  return (
    <div>
      <p id="welcome-text" className="welcome-text"></p>
      <p>I am <span id="iam-text" className="iam-text"></span></p>
    </div>
  );
};

export default TypingAnimation;