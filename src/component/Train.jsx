import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Train = () => {
  const [smokeFrame, setSmokeFrame] = useState(0);
  const [wheelFrame, setWheelFrame] = useState(0);

  const smoke = [
    "                        हर हर महादेव",
    "                   हर हर महादेव",
    "              हर हर महादेव",
    "         हर हर महादेव",
    "    हर हर महादेव",
    "                        ",
  ];

  
  const wheelFrames = ["|", "/", "-", "\\",];

  useEffect(() => {
    const interval = setInterval(() => {
      setSmokeFrame((prev) => (prev + 1) % smoke.length);
      setWheelFrame((prev) => (prev + 1) % wheelFrames.length);
    }, 250); // slightly slower for realistic puff

    return () => clearInterval(interval);
  }, []);

  const wheel = wheelFrames[wheelFrame];

  const trainArt = `
             ___
      _|_|_|_||________________________
    _|_o_o_o_|__| ___ ___ ___ ___ ___ |
   |    |     | ||___||___||___||___| |
   |____|_____|_|___||___||___||___|_|___
     (${wheel})     (${wheel})      (${wheel})     (${wheel})     (${wheel})       
      ====||=====||=======||======||=====||====
  `;

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.pre
        initial={{ x: "100vw" }}
        animate={{ x: "-150vw" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          fontFamily: "monospace",
          fontSize: "16px",
          whiteSpace: "pre",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          lineHeight: "1",
          color: "#0f0",
          textShadow: "0 0 5px #0f0",
        }}
      >
        {smoke[smokeFrame] + "\n" + trainArt}
      </motion.pre>
    </div>
  );
};

export default Train;
