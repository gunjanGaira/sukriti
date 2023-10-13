import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
import ImageOne from "../Rewater/group-26@3x.jpg";
import ImageTwo from "../Rewater/group-26-copy-3@2x.jpg";
import ImageThree from "../Rewater/group-29@3x.jpg";
import Imagefour from "../Rewater/group-26-copy-2@3x.jpg";

const Rewater_carousel = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 380, min: 0 },
      items: 1,
    },
    Large_mobile: {
      breakpoint: { max: 480, min: 380 },
      items: 1.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 2560, min: 1024 },
      items: 2.2,
    },
  };
  const autoPlaySpeed = 3000; // 3 seconds per slide

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={autoPlaySpeed}
      infinite={true}
      showDots
    >
      <div>
        <img src={ImageOne} className="carousel_images" />
      </div>
      <div>
        <img src={ImageTwo} className="carousel_images" />
      </div>
      <div>
        <img src={ImageThree} className="carousel_images" />
      </div>

      <div>
        <img src={Imagefour} className="carousel_images" />
      </div>

      {/* <div>
            <svg viewbox="0 0 16000 16000">
            <circle class="b" cx="8000" cy="8000" r="5000"></circle>
          </svg>
          </div> */}
    </Carousel>
  );
};

export default Rewater_carousel;
