import React from "react";
import logo from "../../../assets/pivotal-logo.png";
import hialogo from "../../assets/hia-member-10-years (1).png";
import "./Footer.scss";
function Footer() {
  return (
    <div className="Footer">
      <div className="topFoo" id="pota">
        <div className="left">
          <img src={logo} alt="" />
          <p>
            Pivotal Homes is an Australian owned and operated business
            specialising in building Turn-Key Investment properties. With over
            25 years building experience and know-how, the driving force behind
            Pivotal Homes is that we are proud to provide you with a product
            that is excellent at every angle.
          </p>
          <div className="socLinks">
            <div className="linkContainer">
              {" "}
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="linkContainer">
              {" "}
              <i className="fab fa-instagram"></i>
            </div>
            <div className="linkContainer">
              {" "}
              <i className="fab fa-pinterest-p"></i>
            </div>
            <div className="linkContainer">
              {" "}
              <i className="fab fa-google-plus-g"></i>
            </div>
            <div className="linkContainer">
              {" "}
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="center">
          <h1>IMPORTANT LINKS</h1>
          <div className="eLine"></div>
          <p>ABOUT US</p>
          <p>HOME DESIGN</p>
          <p>TESTIMONIALS</p>
          <p>CONTACT US</p>
          <p>CLIENT LOGIN</p>
        </div>
        <div className="right">
          <h1>CONTACT INFO</h1>
          <img src={hialogo} alt="ad" />
          <div className="eLine"></div>
          <div className="container">
            <div className="first">
              {" "}
              <i className="fas fa-phone-alt"></i>
              <p className="items">(07) 5504 6644</p>
            </div>

            <div className="second">
              {" "}
              <i className="fas fa-fax"></i>
              <p className="items">(07) 5504 7322</p>
            </div>

            <div className="third">
              {" "}
              <i className="far fa-envelope"></i>
              <p className="items">admin@pivotalhomes.com.au</p>
            </div>

            <div className="fourth">
              <p className="items">
                {" "}
                <i className="fas fa-map-marker-alt"></i>
                Level 5, 33 Elkhorn Avenue Surfers Paradise QLD 4217
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomFoo">
        <div className="leftBottom">
          <p>Copyright All Rights Reserved © 2021. | Pivotal Homes</p>
          <p>
            Made with{" "}
            <span id="vday" style={{ color: "red" }}>
              ❤
            </span>{" "}
            by{" "}
            <span className="DARWIN" style={{ color: "green" }}>
              DARWIN
            </span>{" "}
          </p>
        </div>
        <div className="rightBottom">
          <p>PRIVACY POLICY</p>
          <p>TERMS OF USE</p>
          <div className="arrowup">
            <i className="fas fa-arrow-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
