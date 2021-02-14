import "./Section2.scss";
import React from "react";
import hiaLogo from "../../assets/hia-member-10-years (1).png";
import hiaPres from "../../assets/hyden-inner-image.jpg";

function Section2() {
  return (
    <div className="Section2">
      <div className="leftSection2">
        <div className="leftTop">
          <p>
            Pivotal Homes is an Australian <br /> owned and operated business{" "}
            <br />
            specialising in building Turn-Key <br /> properties.
          </p>

          <img src={hiaLogo} alt="qweq" />
        </div>

        <div className="leftBody">
          <p>
            With over 25 years building experience and know-how, the driving
            force behind Pivotal <br /> Homes is that we are proud to provide
            you with a product that is excellent. Combining a <br /> high level
            of workmanship together with a friendly professional approach, you
            can be <br /> assured that the experience of building with Pivotal
            Homes will be rewarding and one of <br />
            confidence and peace of mind. As a member of the Housing Industry
            Association we <br /> strive to meet and exceed your expectations
            every step of the way.
          </p>
        </div>
        <div className="leftFooter">
          <p id="findOutBtn" className="findOutBtn">
            FIND OUT MORE{" "}
          </p>
          <i className="fas fa-long-arrow-alt-right"></i>
          <div className="bgLiquid" id="bgLiquid"></div>
        </div>
      </div>
      <div className="rightSection2">
        {" "}
        <div className="pulse"></div>
        <img src={hiaPres} alt="qwe" />
        <div className="btnSection2">
          <div className="outerCi">
            <div className="innerCi">
              <p>▶</p>
            </div>
          </div>
        </div>
        <div className="rightFooter">
          <i className="fas fa-microphone-alt"></i>
          <p>Subsribe to our week Podcast</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
