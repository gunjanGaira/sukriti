import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import McIcon from "../Home/mc-icon.png";
import awardIcon from "../Home/awards11.jpg";
import indianOilIcon from "../Home/indian-oil-icon.png";
import award2Icon from "../Home/awards2.jpg";
import emblemIcon from "../Home/emblem-icon.png";
import award3Icon from "../Home/awards3.png";
import sbiIcon from "../Home/sbi4.PNG";
import award1Icon from "../Home/awards1.jpg";
import sulabhIcon from "../Home/sulabh-logo.png";
import sulabhPhotograph from "../Home/Sulabh_Photograph.JPG";
import cicLogo from "../Home/cic-logo.png";
import Imgs from "../Home/IMG_1033.jpg";
import McIcCopy from "../Home/mc-copy@2x.png";
import Imags73 from "../Home/IMG_7354.JPG";
import Smart_city from "../Home/sdf2.jpg";
import awards_44 from "../Home/awards44.JPG";

const Home_carousel = () => {
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
      
       <div className="item-carousel-card" >
                  <img src={McIcon} className="inner-idian-oil-image-container" />
                  <p className="p-carousel">
                  <span className="h-carousel">Winner</span><br/>
                    Mass Challenge, <br /> Israel
                  </p>

              </div>

               <div className="item-carousel-card">
                <img className="achievement-img" src={awardIcon} />
              </div>
                <div className="item-carousel-card">
                  <img src={indianOilIcon} className="inner-idian-oil-image-container"/>
                  <p className="p-carousel" >
                    <span className="h-carousel">Winner</span><br/>
                  Indian Oil, <br /> Startup Fund Grant
                  </p>
                </div>
                <div className="item-carousel-card">
                  <img src={award2Icon} className="achievement-img" />
              </div>
              <div className="item-carousel-card">
                  <img src={emblemIcon} className="inner-idian-oil-image-container"/>
                  <p className="p-carousel">
                    <span className="h-carousel">Most Impactful Startup of India</span><br/>
                    Ministry of Science and Technology,<br/>
                    Government of India
                  </p>
                </div>
                <div className="item-carousel-card">
                  <img src={award3Icon} className="achievement-img" />
              </div> 
              
              <div className="item-carousel-card">
                  <img src={sbiIcon} className="inner-idian-oil-image-container"/>
                  <p className="p-carousel">
                    <span className="h-carousel">Winner</span><br/>
                    Best CSR practices,<br/>
                   State Bank of India
                   </p>
                 
                </div>
                <div className="item-carousel-card">
                  <img src={award1Icon} className="achievement-img" />
              </div> 
              <div className="item-carousel-card">
                  <img src={sulabhIcon} className="inner-idian-oil-image-container"/>
                  <p className="p-carousel">
                    <span className="h-carousel">Felicitation for exemplary work in WASH sector</span><br/>
                    Sulabh International
                   </p>
              </div>
              <div className="item-carousel-card">
                  <img src={sulabhPhotograph} className="achievement-img" />
              </div>  
              <div className="item-carousel-card">
                  <img src={cicLogo} className="inner-idian-oil-image-container"/>
                  <p className="p-carousel">
                    <span className="h-carousel"> Best Startup Pitch </span><br/>
                    Cambridge Innovation Centre,<br/>  Cambridge Massachusetts
                   </p>
              </div>
              <div className="item-carousel-card">
                  <img src={Imgs} className="achievement-img" />
              </div> 
              
              <div className="item-carousel-card">
                  <img src={McIcCopy} className="inner-idian-oil-image-container"/>
                  <p className="p-carousel">
                    <span className="h-carousel">  Winner </span><br/>
                    Students Appreciation Award,<br/>
                    Brandeis Business School, Massachusetts
                   </p>
              </div>
              <div className="item-carousel-card">
                  <img src={Imags73} className="achievement-img" />
              </div>
         {/* </div> */}
        


              <div className="item-carousel-card">
                  <img src={Smart_city} className="inner-idian-oil-image-container"/>
                  <p className="p-carousel">
                    <span className="h-carousel"> Winner</span><br/>
                    Aim Smart City Accelerator,<br/>
                    powered by Microsoft</p>
              </div>
              <div className="item-carousel-card">
                  <img src={awards_44} className="achievement-img" />
              </div> 
              
        
    </Carousel>
  );
};

export default Home_carousel;

