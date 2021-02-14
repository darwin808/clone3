import React, { useState, useEffect } from "react";
import "./Section5.scss";
import slider1 from "../../assets/home-inner-slider-1.jpg";
import slider2 from "../../assets/home-inner-slider-2.jpg";
import slider3 from "../../assets/home-inner-slider-3.jpg";
import slider4 from "../../assets/home-inner-slider-4.jpg";
import slider5 from "../../assets/home-inner-slider-5.jpg";
import slider6 from "../../assets/home-inner-slider-6.jpg";
import slider7 from "../../assets/home-inner-slider-7.jpg";
import arrow1 from "../../assets/test-next-arrow.png";
import arrow2 from "../../assets/test-prev-arrow.png";

function Section5() {
  const [counter, setcounter] = useState<number>(0);

  const increment = () => {
    counter > 5 ? setcounter(0) : setcounter(counter + 1);
  };
  const decrement = () => {
    counter < 1 ? setcounter(6) : setcounter(counter - 1);
  };
  useEffect(() => {
    setTimeout(() => {
      increment();
    }, 2000);
  }, [increment]);

  const sliderCollection = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
  ];
  return (
    <div className="Section5">
      <div className="leftSection5">
        <img id="sliderImg" src={sliderCollection[counter]} alt="qweqwe" />

        <div className="btnSlider">
          {" "}
          <img src={arrow2} alt="qwe" className="arrow2" onClick={increment} />
          <img src={arrow1} alt="qweq" className="arrow1" onClick={decrement} />
        </div>
      </div>
      <div className="rightSection5">
        <h1>The Pivotal Difference.</h1>
        <div className="line2"></div>
        <p className="para1Section5">
          Since our inception we have maintained our focus on continually
          developing to ensure we are always at the forefront of the
          construction industry. With a focus on ingenuity we embrace the ever
          evolving trends whilst ensuring each home is timeless in its own
          right. Based on honesty, reliability and consistency we are committed
          to continually exceed our clients expectations. We are committed to
          building quality and stylish homes backed by unwavering support and
          service. Pivotal Homes has consistently proven that building homes
          that are affordable does not need to compromise on quality of fixtures
          & workmanship.
        </p>

        <p className="para2Section5">
          We pride ourselves on providing full turn key packages at a fixed
          price. We have developed a standard level of inclusions that is
          unrivaled in the marketplace.
        </p>

        <div className="viewBtn">
          <div className="liquid5"></div>
          <p>VIEW DETAILS</p>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Section5;
