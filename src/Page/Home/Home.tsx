import React from "react";
import "./Home.scss";
import MainNav from "../../Components/Nav/MainNavbar";
import MainSlider from "../../Components/HomeComponents/Section1Slider/MainSlider";
import Section2 from "../../Components/HomeComponents/Section2/Section2";
import Section3 from "../../Components/HomeComponents/Section3/Section3";
import Section4 from "../../Components/HomeComponents/Section4/Section4";
import Section5 from "../../Components/HomeComponents/Section5/Section5";
import Section6 from "../../Components/HomeComponents/Section6/Section6";
import Section7 from "../../Components/HomeComponents/Section7/Section7";
import Footer from "../../Components/HomeComponents/Footer/Footer";
function Home() {
  return (
    <div className="Home">
      <MainNav />
      <MainSlider />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
}

export default React.memo(Home);
