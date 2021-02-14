import React, { useState } from "react";
import CardS7 from "./Card/CardS7";
import "./Section7.scss";
import s7Card1 from "../../assets/s7/240-range.png";
import s7Card2 from "../../assets/s7/dual-key.png";
import s7Card3 from "../../assets/s7/Rens-Coastal-LH1-scaled-1.jpg";
import s7Card4 from "../../assets/s7/slide-image.jpg";
import s7Card5 from "../../assets/s7/dual-key (copy 1).png";
import ViewButtonS7 from "../Section7/Buttons/ViewButtonS7";

function Section7() {
  const [counters7, setcounters7] = useState<number>(0);
  const increment = () => {
    counters7 > 3 ? setcounters7(0) : setcounters7(counters7 + 1);
  };
  const decrement = () => {
    counters7 < 1 ? setcounters7(4) : setcounters7(counters7 - 1);
  };

  const setSLide1 = () => {
    setcounters7(0);
  };
  const setSLide2 = () => {
    setcounters7(1);
  };
  const setSLide3 = () => {
    setcounters7(2);
  };

  const setSLide4 = () => {
    setcounters7(3);
  };

  const setSLide5 = () => {
    setcounters7(4);
  };

  const arr = [
    [
      {
        name: "Richard Cruz",
        img: s7Card1,
        para:
          "Today my husband and I had our practical completion inspection for our very first home build by Pivotal Homes. We are IN LOVE.... From the gloss finished doors, the 900 oven, the 1300 front door & all the other minor details that count in the WOW factor of a home are amazing. At the beginning we had a few communication issues getting through to certain people, but there was always another person to answer our calls & questions. We at...",
      },
    ],

    [
      {
        name: "Pamela Cruz",
        img: s7Card2,
        para:
          "In December 2016 we signed a contract with Pivotal homes to build a new investment property. The home was started on time and completed in the time the builder estimated. The Pivotal homes staff looked after the build and kept us up to date with progress via photos on the web site. The build was very smooth. All aspects of the build were very easy. The quality of the build was as we expected. I am a registered builder in...",
      },
    ],

    [
      {
        name: "Michael Payne",
        img: s7Card3,
        para:
          "Thank you to Pivotal Homes and the team for making this dream of ours become a reality. Building our new home through your assistance was a wonderful experience, and we highly recommend your company. My partner and I managed to get through the whole process without any stress or worry as you were always just a call away, happy to answer any and every question we had regardless of how big or small it was. Your professionalism and prompt action...",
      },
    ],
    [
      {
        name: "Kim Malik",
        img: s7Card4,
        para:
          "I would highly recommend Pivotal Homes as a reliable construction company to build an investment property. All the staff were friendly, helpful and professional in all aspects of their dealings with me. Any queries regarding the building process were answered to my complete satisfaction and very promptly. I was very happy with the customer service provided throughout the building process and I was very impressed with the final product. Their attention to detail in the interior and exterior of the...",
      },
    ],
    [
      {
        name: "Erik Gustav",
        img: s7Card5,
        para:
          "I have been very impressed with the professionalism of Pivotal in delivering our new property, the quality and finish both inside and out has far exceeded our expectations. I will be using them again in future projects.",
      },
    ],
  ];

  return (
    <div className="Section7">
      <div className="topS7">
        <h1>TESTIMONIALS.</h1>
        <h2>
          For more than a decade, Pivotal Homes have been helping Australians
          build their property investment portfolios. Over that time, we’ve
          received a lot of positive feedback on our services – here are some of
          them
        </h2>

        <div className="emptyS7"></div>
      </div>
      <div className="mid1S7">
        {arr[counters7].map((e) => (
          <div key={counters7}>
            <CardS7
              img={e.img}
              para={e.para}
              name={e.name}
              increment={increment}
              decrement={decrement}
            />
          </div>
        ))}
      </div>
      <div className="mid2S7">
        <div className="leftmid2"></div>
        <div className="rightmid2">
          <div className="outerRadio" onClick={setSLide1}>
            <div className="innerRadio"></div>
          </div>{" "}
          <div className="outerRadio" onClick={setSLide2}>
            <div className="innerRadio"></div>
          </div>{" "}
          <div className="outerRadio" onClick={setSLide3}>
            <div className="innerRadio"></div>
          </div>{" "}
          <div className="outerRadio" onClick={setSLide4}>
            <div className="innerRadio"></div>
          </div>{" "}
          <div className="outerRadio" onClick={setSLide5}>
            <div className="innerRadio"></div>
          </div>
        </div>
      </div>

      <div className="FooS7">
        {" "}
        <ViewButtonS7 />
      </div>
    </div>
  );
}

export default React.memo(Section7);
