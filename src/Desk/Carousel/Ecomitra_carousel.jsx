import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SpinIcon from "../Ecomitra/spin.svg";
import Group1 from "../Ecomitra/group1.jpg";
import Group2 from "../Ecomitra/group2.jpg";
import Group3 from "../Ecomitra/group3.jpg";
import Group4 from "../Ecomitra/group4.jpg";
const Ecomitra_carousel = () => {
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
          items: 2,
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

      
<         div className="jssorl-009-spin">
            <img
            // style={{marginTop:"-19px",position:"relative",top:"50%",width:"38px",height:"38px"}}
            // src={SpinIcon}
            />
          </div>
          <div className="image-Con" data-u="slides">
            <div>
              <img
                data-u="image"
                src={Group3}
                style={{ paddingRight: "20px" }}
              />
            </div>
            <div>
              <img
                data-u="image"
                src={Group4}
                style={{ paddingRight: "20px" }}
              />
            </div>
            <div>
              <img
                data-u="image"
                src={Group2}
                style={{ paddingRight: "20px" }}
              />
            </div>
            <div>
              <img
                data-u="image"
                src={Group1}
                style={{ paddingRight: "20px" }}
              />
            </div>
          </div>
         
          <div
            data-u="navigator"
            style={{
              position: "absolute",
              bottom: "-25px",
              right: "12px",
              dataAutocenter: "1",
              dataScale: "0.5",
              dataScaleBottom: "0.75",
            }}
          >
            <div
              data-u="prototype"
              className="i"
              style={{ width: "16px", height: "16px" }}
            >
              {/* <svg
                viewbox="0 0 16000 16000"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              >
                <circle cx="8000" cy="8000" r="5000"></circle>
              </svg> */}
            </div>
          </div>
    </Carousel>
  )
}

export default Ecomitra_carousel