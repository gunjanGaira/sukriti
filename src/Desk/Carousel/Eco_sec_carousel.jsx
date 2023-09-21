import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img1 from "../Ecomitra/15.png";
import Img2 from "../Ecomitra/IMG_7486.png";
import Img3 from "../Ecomitra/IMG_8108.png";
import Img4 from "../Ecomitra/DSC_0098.png";
import Img5 from "../Ecomitra/DSC_0284.png";
import Img6 from "../Ecomitra/IMG_8088.png";
import Img7 from "../Ecomitra/DSC_0324.png";
import Img8 from "../Ecomitra/DSC_02572.png";
import Img9 from "../Ecomitra/IMG_0754.png";
import Img10 from "../Ecomitra/IMG_8109.png";
import Img11 from "../Ecomitra/IMG_0818.png";
import Img12 from "../Ecomitra/IMG_0859.png";
import Img13 from "../Ecomitra/IMG_1091.png";
import Img14 from "../Ecomitra/IMG_1160.png";
import Img15 from "../Ecomitra/IMG_8125.png";
import Img16 from "../Ecomitra/IMG_8171.png";
import Img17 from "../Ecomitra/DSC_0305.png";
import Img18 from "../Ecomitra/IMG_8195.png";
import Img19 from "../Ecomitra/IMG_8219.png";
import Img20 from "../Ecomitra/IMG_08751.png";
import Img21 from "../Ecomitra/IMG_8249.png";
import Img22 from "../Ecomitra/IMG_08831.png";
import Img23 from "../Ecomitra/IMG_8233.png";
import Img24 from "../Ecomitra/oval-4-copy-4.svg";
import Img25 from "../Ecomitra/oval-4.svg";

const Eco_sec_carousel = () => {
    const responsive = {
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4.5,
        },
      };
      const autoPlaySpeed = 3000; // 3 seconds per slide
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={autoPlaySpeed}
      infinite={true}
    >
    {/* <img src={SpinIcon} className="water-degradation"/> */}
    <img  src={Img1} className="water-degradation"/>
    <img src={Img2} className="water-degradation"/>
    <img src={Img3} className="water-degradation"/>
    <img src={Img4} className="water-degradation"/>
    <img src={Img5} className="water-degradation"/>
    <img src={Img6} className="water-degradation"/>
    <img src={Img7} className="water-degradation"/>
    <img src={Img8}  className="water-degradation"/>
    <img src={Img9} className="water-degradation"/>
    <img src={Img10} className="water-degradation"/>
    <img src={Img11} className="water-degradation"/>
    <img src={Img12} className="water-degradation"/>
    <img src={Img13} className="water-degradation"/>
    <img src={Img14} className="water-degradation"/>
    <img src={Img15} className="water-degradation"/>
    <img src={Img16} className="water-degradation"/>
    <img src={Img17} className="water-degradation"/>
    <img src={Img18} className="water-degradation"/>
    <img src={Img19} className="water-degradation"/>
    <img src={Img20} className="water-degradation"/>
    <img src={Img21} className="water-degradation"/>
    <img src={Img22} className="water-degradation"/>
    <img src={Img23} className="water-degradation"/>
    {/* <img src={Img24} className="water-degradation"/>
    <img src={Img25} className="water-degradation"/> */}

    </Carousel>

  )
}

export default Eco_sec_carousel
