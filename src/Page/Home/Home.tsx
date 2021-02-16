import React from "react";
import "./Home.scss";
//import MainNav from "";
//import MainSlider from "";
//import Section2 from "";
//import Section3 from "";
//import Section4 from "";
//import Section5 from "";
//import Section6 from "";
//import Section7 from "";
//import Footer from "";
const MainNav = React.lazy(() => import("../../Components/Nav/MainNavbar"));
const Section2 = React.lazy(
  () => import("../../Components/HomeComponents/Section2/Section2")
);
const MainSlider = React.lazy(
  () => import("../../Components/HomeComponents/Section1Slider/MainSlider")
);
const Section3 = React.lazy(
  () => import("../../Components/HomeComponents/Section3/Section3")
);
const Section4 = React.lazy(
  () => import("../../Components/HomeComponents/Section4/Section4")
);
const Section5 = React.lazy(
  () => import("../../Components/HomeComponents/Section5/Section5")
);
const Section6 = React.lazy(
  () => import("../../Components/HomeComponents/Section6/Section6")
);
const Section7 = React.lazy(
  () => import("../../Components/HomeComponents/Section7/Section7")
);
const Footer = React.lazy(
  () => import("../../Components/HomeComponents/Footer/Footer")
);

function Home() {
  return (
    <div className="Home">
      <React.Suspense fallback={<p>Loading....</p>}>
        <MainNav />
        <MainSlider />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default React.memo(Home);
