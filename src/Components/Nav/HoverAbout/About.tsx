import React from "react";
import "./About.scss";

interface AboutProps {
  AboutFalse: () => void;
}

function About({ AboutFalse }: AboutProps) {
  return (
    <div className="About" onMouseLeave={AboutFalse}>
      <p>MICHAEL IRWIN</p>
      <p>STEVE JOBS</p>
      <p>BILL GATES</p>
    </div>
  );
}

export default About;
