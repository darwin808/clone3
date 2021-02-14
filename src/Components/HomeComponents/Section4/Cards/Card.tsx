import React from "react";

import "./Card.scss";

interface details {
  name: string;
  img: string;
  title: string;
}

const Card: React.FC<details> = ({ name, img, title }: details) => {
  return (
    <div className="Card">
      <img src={img} alt="dadad" id="imgCard4" />
      <h1>{name}</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
