import React, { useRef } from "react";
import Typewriter from "typewriter-effect";

function PreLoop() {
  const typewriterRef = useRef(null);

  return (
    <Typewriter
      options={{
        strings: ["I am a"],
        autoStart: true,
        loop: false, // Set loop to false
        deleteSpeed: 0, // Set deleteSpeed to 0 to prevent deletion
      }}

    />
  );
}

export default PreLoop;