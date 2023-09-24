import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
import rewaterInsures1 from "../Rewater/rewater_insures1.svg";
import rewaterInsures2 from "../Rewater/rewater_insures2.png";
import rewaterInsures3 from "../Rewater/rewater_insures3.png";
import rewaterInsures4 from "../Rewater/rewater_insures4.png";
import rewaterInsures5 from "../Rewater/rewater_insures5.png";
import rewaterInsures6 from "../Rewater/rewater_insures6.png";
import rewaterInsures7 from "../Rewater/rewater_insures7.png";
import rewaterInsures8 from "../Rewater/rewater_insures8.png";
import rewaterInsures9 from "../Rewater/rewater_insures9.png";
import rewaterInsures10 from "../Rewater/rewater_insures10.png";
import rewaterInsures11 from "../Rewater/rewater_insures11.png";
import rewaterInsures12 from "../Rewater/rewater_insures12.png";
import rewaterInsures13 from "../Rewater/rewater_insures13.png";
import rewaterInsures14 from "../Rewater/rewater_insures14.png";
import rewaterInsures15 from "../Rewater/rewater_insures15.png";
import rewaterInsures16 from "../Rewater/rewater_insures16.png";
import rewaterInsures17 from "../Rewater/rewater_insures17.png";
import rewaterInsures18 from "../Rewater/rewater_insures18.png";
import rewaterInsures19 from "../Rewater/rewater_insures19.png";
import rewaterInsures20 from "../Rewater/rewater_insures20.png";
import rewaterInsures21 from "../Rewater/rewater_insures21.png";
import rewaterInsures22 from "../Rewater/rewater_insures22.png";
import rewaterInsures23 from "../Rewater/rewater_insures23.png";
import rewaterInsures24 from "../Rewater/rewater_insures24.png";
// import rewaterInsures25 from "../Rewater/rewater_insures25.svg";
// import rewaterInsures26 from "../Rewater/rewater_insures26.svg";

const Rewater_sec_carousel = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 380, min: 0 },
      items: 2,
    },
    Large_mobile: {
      breakpoint: { max: 480, min: 380 },
      items: 2.1,
    },
    small_tablet: {
      breakpoint: { max: 786, min: 480 },
      items: 2.2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 786 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 2560, min: 1024 },
      items: 4,
    },
    
  }
  const autoPlaySpeed = 3000; // 3 seconds per slide
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={autoPlaySpeed}
      infinite={true}
    >
      <img src={rewaterInsures2} className="insures-img" />

      <img src={rewaterInsures3} className="insures-img" />

      <img src={rewaterInsures4} className="insures-img" />

      <img src={rewaterInsures5} className="insures-img" />

      <img src={rewaterInsures6} className="insures-img" />

      <img src={rewaterInsures7} className="insures-img" />

      <img src={rewaterInsures8} className="insures-img" />

      <img src={rewaterInsures9} className="insures-img" />

      <img src={rewaterInsures10} className="insures-img" />

      <img src={rewaterInsures11} className="insures-img" />

      <img src={rewaterInsures12} className="insures-img" />

      <img src={rewaterInsures13} className="insures-img" />

      <img src={rewaterInsures14} className="insures-img" />

      <img src={rewaterInsures15} className="insures-img" />

      <img src={rewaterInsures16} className="insures-img" />

      <img src={rewaterInsures17} className="insures-img" />

      <img src={rewaterInsures18} className="insures-img" />

      <img src={rewaterInsures19} className="insures-img" />

      <img src={rewaterInsures20} className="insures-img" />

      <img src={rewaterInsures21} className="insures-img" />

      <img src={rewaterInsures22} className="insures-img" />

      <img src={rewaterInsures23} className="insures-img" />

      <img src={rewaterInsures24} className="insures-img" />

      {/* <img src={rewaterInsures25} className="insures-arrow" />

      <img src={rewaterInsures26} className="insures-arrow" /> */}
    </Carousel>
  );
};

export default Rewater_sec_carousel;
