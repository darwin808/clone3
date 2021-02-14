import React from "react";
import "./Section6.scss";
import ViewButton from "./ViewButton/ViewButton";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import CardS6 from "./CardSection6/CardS6";

function Section6() {
  return (
    <div className="Section6">
      <div className="topSection6">
        <div className="left">
          <h1>OUR HOME DESIGNS</h1>
          <h2>
            With a wide range of options and configurations to suit most blocks,
            Pivotal Homes has you covered.
          </h2>
          <div className="line"></div>
        </div>
        <div className="rightBtn">
          <ViewButton />
        </div>
      </div>
      <div className="bodySection6">
        <CardS6 title="hello" img={img2} />
        <CardS6 title="hello" img={img3} />
        <CardS6 title="hello" img={img4} />
        <CardS6 title="hello" img={img5} />
      </div>
      <div className="footerSection6">xxxx</div>
    </div>
  );
}

export default Section6;
