import React from "react";
import "./Section4.scss";
import Card from "./Cards/Card";
import img1 from "../../assets/Hayden-Ashton-4.jpg";
import img2 from "../../assets/Michael-Irwin-617x480-1.jpg";
import img3 from "../../assets/Tom-Egan-3.jpg";

function Section4() {
  return (
    <div className="Section4">
      <div className="topSection4">
        <div className="leftTop">
          <h1>OUR TEAM.</h1>
          <h2>
            We've got over 25 years experience building quality investment homes
            for thousands of happy clients.
          </h2>
          <div className="lineTop"></div>
        </div>
        <div className="rightTop">
          <div className="ViewBtn">
            <div className="Liq2"></div>
            <p>VIEW DETAILS </p> <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
      <div className="bodySection4">
        <Card img={img1} name="Michael Irwin" title="FOUNDER & CEO" />{" "}
        <Card img={img2} name="Tom Egan" title="SALES MANAGER" />{" "}
        <Card img={img3} name="Hayden Aston" title="SALES MANAGER" />
      </div>
    </div>
  );
}

export default Section4;
