import React from "react";
import "./Home.scss";
import MainNav from "../../Components/Nav/MainNavbar";
import MainSlider from "../../Components/HomeComponents/Section1Slider/MainSlider";
import Section2 from "../../Components/HomeComponents/Section2/Section2";
function Home() {
  return (
    <div className="Home">
      <MainNav />
      <MainSlider />
      <Section2 />
    </div>
  );
}

export default Home;
