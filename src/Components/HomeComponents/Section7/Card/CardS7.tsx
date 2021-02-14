import React from "react";
import "./CardS7.scss";
import img from "../../../assets/s7/240-range.png";

interface cardProps {
  name?: string;
  img?: any;
  para?: string;
  increment: () => void;
  decrement: () => void;
}

function CardS7({ img, para, increment, decrement, name }: cardProps) {
  return (
    <div className="CardS7">
      <div className="leftCardS7"></div>
      <div className="rightCardS7">
        <div className="floatS7">
          <img src={img} alt="qwe" />
          <div className="btnContainer">
            <i
              id="leftBtn"
              className="fas fa-chevron-left"
              onClick={increment}
            ></i>
            <i
              id="rightBtn"
              className="fas fa-chevron-right"
              onClick={decrement}
            ></i>
          </div>
        </div>

        <p className="paraS7">{para}</p>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default CardS7;
