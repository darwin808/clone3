import "./MainNav.scss";
import React, { useState, useEffect } from "react";

import Nav1 from "./Nav1/Nav1";
import Nav2 from "./Nav2/Nav2";

function useScroll() {
  const [scroller, setScroll] = useState([window.scrollX, window.scrollY]);
  useEffect(() => {
    const x = () => {
      setScroll([window.scrollX, window.scrollY]);
    };
    window.addEventListener("scroll", x);
  }, []);
  return scroller;
}

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

function MainNavbar() {
  const [scrollX, scrollY] = useScroll();

  return <div className="MainNavbar">{scrollY > 20 ? <Nav2 /> : <Nav1 />}</div>;
}

export default MainNavbar;
