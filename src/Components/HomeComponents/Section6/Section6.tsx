import React, { useState } from "react";
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
  const [counterS6, setcounterS6] = useState<number>(0);

  const joke2 = [
    [
      {
        img0: img1,
        title0: "The Elvine",
      },
      {
        img1: img2,
        title1: "The Jango",
      },
      {
        img2: img3,
        title2: "The Courde",
      },
      {
        img3: img4,
        title3: "The Levone",
      },
    ],

    [
      {
        img0: img2,
        title0: "The Jango",
      },
      {
        img1: img3,
        title1: "The Courde",
      },
      {
        img2: img4,
        title2: "The Levone",
      },
      {
        img3: img5,
        title3: "The Pastel",
      },
    ],
    [
      {
        img0: img3,
        title0: "The Courde",
      },
      {
        img1: img4,
        title1: "The Levone",
      },
      {
        img2: img5,
        title2: "The Pastel",
      },
      {
        img3: img6,
        title3: "The Concorde",
      },
    ],
    [
      {
        img0: img4,
        title0: "The Levone",
      },
      {
        img1: img5,
        title1: "The Pastel",
      },
      {
        img2: img6,
        title2: "The Concorde",
      },
      {
        img3: img7,
        title3: "The Kamdor",
      },
    ],
    [
      {
        img0: img5,
        title0: "The Pastel",
      },
      {
        img1: img6,
        title1: "The Concorde",
      },
      {
        img2: img7,
        title2: "The Kamdor",
      },
      {
        img3: img8,
        title3: "The Buchanan",
      },
    ],
    [
      {
        img0: img6,
        title0: "The Concorde",
      },
      {
        img1: img7,
        title1: "The Kamdor",
      },
      {
        img2: img8,
        title2: "The Buchanan",
      },
      {
        img3: img9,
        title3: "The Levonedad",
      },
    ],
    [
      {
        img0: img7,
        title0: "The Kamdor",
      },
      {
        img1: img8,
        title1: "The Buchanan",
      },
      {
        img2: img9,
        title2: "The Levonedad",
      },
      {
        img3: img10,
        title3: "The Jest",
      },
    ],
    [
      {
        img0: img8,
        title0: "The Buchanan",
      },
      {
        img1: img9,
        title1: "The Levonedad",
      },
      {
        img2: img10,
        title2: "The Jest",
      },
      {
        img3: img1,
        title3: "The Elvine",
      },
    ],
    [
      {
        img0: img9,
        title0: "The Levonedad",
      },
      {
        img1: img10,
        title1: "The Jest",
      },
      {
        img2: img1,
        title2: "The Elvine",
      },
      {
        img3: img2,
        title3: "The Jango",
      },
    ],
    [
      {
        img0: img10,
        title0: "The Jest",
      },
      {
        img1: img1,
        title1: "The Elvine",
      },
      {
        img2: img2,
        title2: "The Jango",
      },
      {
        img3: img3,
        title3: "The Courde",
      },
    ],
  ];

  const increments6 = () => {
    counterS6 >= 9 ? setcounterS6(0) : setcounterS6(counterS6 + 1);
    const x = joke2[counterS6];
    console.log(x.map((e) => e));
  };
  const decrements6 = () => {
    counterS6 < 1 ? setcounterS6(9) : setcounterS6(counterS6 - 1);
  };
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
        {joke2[counterS6].map((e) => (
          <div>
            <CardS6 img={e.img0} title={e.title0} />{" "}
            <CardS6 img={e.img1} title={e.title1} />{" "}
            <CardS6 img={e.img2} title={e.title2} />{" "}
            <CardS6 img={e.img3} title={e.title3} />
          </div>
        ))}
      </div>
      <div className="footerSection6">
        <div className="leftFooS6"></div>
        <div className="rightFooS6">
          <div className="btnFooS6">
            <div className="leftBtn" onClick={decrements6}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="rightBtn" onClick={increments6}>
              {" "}
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="progressBars6">
            <div
              className="innerProgres"
              style={{ width: `${counterS6 * 11.1111}%` }}
            ></div>
          </div>
          <div className="pagnumS6">{counterS6}/9</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Section6);
