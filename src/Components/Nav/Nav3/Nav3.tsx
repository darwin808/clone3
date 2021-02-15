import React, { useState, useEffect } from "react";
import logo1 from "../../../assets/pivotal-logo.png";
import "./Nav3.scss";
import About1 from "../HoverAbout/About";

function useWindow() {
  const [size, setsize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleresize = () => {
      setsize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleresize);
  }, []);
  return size;
}

function Nav3() {
  const [bgMsg, setbgMsg] = useState<boolean>(false);
  const [showAbout, setshowAbout] = useState<boolean>(false);
  const [toggle, settoggle] = useState<boolean>(false);
  const [mobileX, mobileY] = useWindow();
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
    <div className="Nav3">
      <div className="NavLeft">
        <img src={logo1} alt="ada" />
      </div>

      <div className="burger">
        {toggle ? (
          <i className="fas fa-times" onClick={() => settoggle(!toggle)}></i>
        ) : (
          <i
            className="fas fa-bars"
            onClick={() => {
              settoggle(!toggle);
            }}
          ></i>
        )}
      </div>

      {!toggle ? null : (
        <div className="NavRight">
          <i className="fas fa-home" id="home"></i>
          <div className="NavItems">
            <p>HOME DESIGNS</p> <div className="line"></div>
          </div>
          <div className="NavItems">
            <p id="About">ABOUT US</p> <div className="line"></div>{" "}
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
          <div
            className="whiteCircle"
            style={!bgMsg ? setting1 : setting2}
          ></div>
          <div className="envelope" onMouseEnter={increment}>
            <i className="far fa-envelope"></i>

            <div className="floatContact">
              <p>▲ CONTACT US</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav3;
