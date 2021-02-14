import React from "react";
import ViewButtonWhite from "../ViewButton/ViewButtonWhite";
import "./CardS6.scss";

interface things {
  img: any;
  title: any;
  link?: string;
}
function CardS6({ img, title, link }: things) {
  return (
    <>
      {img && (
        <div className="CardS6">
          <img src={img} alt="adad" id="imgCardS6" />
          <div className="empty"></div>

          <div className="CardS6Container">
            <h1>{title}</h1>

            <div className="cardBtns6">
              <ViewButtonWhite />
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}

export default CardS6;
