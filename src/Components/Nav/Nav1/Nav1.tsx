import React, { useState } from "react";
import logo1 from "../../../assets/pivotal-logo.png";
import "./Nav1.scss";
import About1 from "../HoverAbout/About";
function Nav1() {
  const [bgMsg, setbgMsg] = useState<boolean>(false);
  const [showAbout, setshowAbout] = useState<boolean>(false);

  const increment = () => {
    setbgMsg(true);
    setTimeout(() => {
      setbgMsg(false);
    }, 200);
  };

  const setting1 = {
    opacity: 0,
    scale: 0,
  };

  const setting2 = {
    opacity: 0.5,
    scale: 2,
    top: "-1rem",
    right: "1rem",
  };

  const AboutTrue = () => {
    setshowAbout(true);
  };

  const AboutFalse = () => {
    setshowAbout(false);
  };

  return (
    <div className="Nav1">
      <div className="NavLeft">
        {" "}
        <img src={logo1} alt="ada" />
      </div>
      <div className="NavRight">
        <i className="fas fa-home" id="home"></i>
        <div className="NavItems">
          <p>HOME DESIGNS</p> <div className="line"></div>
        </div>
        <div className="NavItems">
          <p onMouseEnter={AboutTrue} id="About">
            ABOUT US
          </p>{" "}
          {showAbout && <About1 AboutFalse={AboutFalse} />}
          <div className="line"></div>{" "}
        </div>
        <div className="NavItems">
          <p>TESTIMONIALS</p>
          <div className="line"></div>{" "}
        </div>
        <div className="NavItems">
          <p>CONTACT US</p> <div className="line"></div>
        </div>
        <div className="NavItems">
          <p>CLIENT LOGIN</p> <div className="line"></div>
        </div>{" "}
        <div className="whiteCircle" style={!bgMsg ? setting1 : setting2}></div>
        <div className="envelope" onMouseEnter={increment}>
          <i className="far fa-envelope"></i>

          <div className="floatContact">
            <p>▲ CONTACT US</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav1;
