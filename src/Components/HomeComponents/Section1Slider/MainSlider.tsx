import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./MainSlider.scss";

import img1 from "../../assets/slider-image-first.jpg";
import img2 from "../../assets/slider-image-1.jpg";
import img3 from "../../assets/slider-image-2.jpg";

function MainSlider() {
  const [counter, setcounter] = useState<number>(0);
  const collect = [img1, img2, img3];

  const increment = useCallback(() => {
    counter > 1 ? setcounter(0) : setcounter(counter + 1);
  }, [counter]);
  const decrement = useCallback(() => {
    counter < 1 ? setcounter(2) : setcounter(counter - 1);
  }, [counter]);
  useEffect(() => {
    setTimeout(() => {
      increment();
    }, 5000);
  }, [increment]);
  return (
    <div className="MainSlider">
      <div className="SliderImg">
        <img src={collect[counter]} alt="" />
        <div className="leftClick" onClick={decrement}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="rightClick" onClick={increment}>
          <i className="fas fa-chevron-right"></i>
        </div>{" "}
        <div className="FooterSlider">
          <i className="fas fa-phone-square-alt"></i> <p>(07)5504664</p>
        </div>
      </div>
      <div className="contentSlider">
        <h1>PIVOTAL HOMES</h1>
        <h2>Queensland’s Premier Home Builder</h2>
        <div className="btn">
          <div className="btn1">
            <p id="viewHome"> VIEW HOMES </p>
            <div className="btn1Bg"></div>
          </div>
          <div className="btn2">
            <p>CONTACT </p> <div className="btn2Bg"></div>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainSlider);
