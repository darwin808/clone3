import React from "react";
import "./Section3.scss";
import section3Img from "../../assets/home-img222.png";
function Section3() {
  return (
    <div className="Section3">
      <div className="leftSection3">
        <img src={section3Img} alt="asdkjahdkjhak" id="imgS3" />
      </div>
      <div className="rightSection3">
        <p className="headSection3">Proud Builders.</p>
        <div className="lineSection3"></div>
        <p className="bodySection3">
          We understand that choosing a home builder is a major decision. We
          recognize <br /> that building a new home or investment property is
          one of the biggest financial <br /> decisions you are likely to make
          in your life, so we are proud of our unrivaled <br /> reputation for
          quality and service. We’ve proven this time & time again in our 15+{" "}
          <br /> year history.
        </p>
        <div className="fooSection3">
          <div className="LiquidBtn">
            <div className="Liq" id="Liq"></div>
            <p id="findS3">FIND OUT MORE </p>{" "}
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
