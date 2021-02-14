import React from "react";
import "./ViewButton.scss";
function ViewButton() {
  return (
    <div className="ViewButton">
      <div className="btnContainer">
        <div className="liquid"></div>
        <p>ALL GALLERY </p>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
}

export default ViewButton;
