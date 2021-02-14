import React from "react";
import ViewButton from "../ViewButton/ViewButton";

interface things {
  img: string;
  title: string;
  link?: string;
}
function CardS6({ img, title, link }: things) {
  return (
    <div className="CardS6">
      <img src={img} alt="adad" id="imgCardS6" />
      <div className="empty"></div>
      <h1>{title}</h1>

      <div className="cardBtns6">
        <ViewButton />
      </div>
    </div>
  );
}

export default CardS6;
