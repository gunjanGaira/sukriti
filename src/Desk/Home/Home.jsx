import React, { useState } from "react";
import image from "../Home/home-front-banner.png";
import "./Home.css";
import seat from "../Home/seat-icon.png";
import drop from "../Home/main-drop.png";
import settingIcon from "../Home/small-setting-icon.png";
import smallDrop from "../Home/small-drop.png";
import waterCare from "../Home/water-care.png";
import renewableEnergy from "../Home/renewable-energy-icon.png";
import smallDropIcon from "../Home/second-drop-icon.png";
import dollerIcon from "../Home/doller-icon.png";
import backgroundOfEcomitra from "../Home/background.png";
import fullImageOfToilet from "../Home/toilet-full-img.JPG";
import frontView from "../Home/front-view-of-toilet.png";
import Image from "../Home/IMG_1087.JPG";
import RewaterIcon from "../Home/rewater-background-icon.png";
import shiprazRiver from "../Home/shipra-river-img.JPG";
import BoxesIcon from "../Home/boxes-of-rewater.JPG";
import RiverIcon from "../Home/river.JPG";
import McIcon from "../Home/mc-icon.png";
import awardIcon from "../Home/awards11.jpg";
import indianOilIcon from "../Home/indian-oil-icon.png";
import award2Icon from "../Home/awards2.jpg";
import emblemIcon from "../Home/emblem-icon.png";
import iitLogo from "../Home/iit-roorkee-logo.png";
import surreyIcon from "../Home/university-of-surrey.png";
import IconOfIndianOil from "../Home/Icon-of-indianoil.png";
import BackgroundContactUs from "../Home/contact-us-background.JPG";
import IconOfLinkedin from "../Home/linkedin-icon.png";
import IconOfFacebook from "../Home/facebook-icon.png";
import IconOfYouTube from "../Home/youtube-icon.png";
import LogoOfSukriti from "../Home/Sukriti-Logo.svg";
import newImg from "../Home/new-img.png";

const Home = () => {
  const [outerbox, setOuterbox] = useState(0);
  const prevOutlet = () => {
    setOuterbox((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  const nextOutlet = () => {
    setOuterbox((prevIndex) => (prevIndex + 1) % image.length);
  };

  return (
    <div>
      <div
        className="banner-img-container"
        style={{
          backgroundImage: `url(${image })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingTop: "50%", // Maintain aspect ratio based on width
          position: "relative",
          // minWidth:'380px'

        }}
      >
        <p className="Banner-text">
          Sustainable creations for <span id="banner-text">you</span>
        </p>
      </div>

      <div className="below-banner">
        <div style={{ margin: "10px 0" }}>
          <p>
            SUKRITI is working to solve
            <br />
            <ice>two major developmental challenges of our society</ice>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
          className=""
        >
          <p className="common-text">
            <img className="common-img" src={seat} alt="" />
            &nbsp;&nbsp;&nbsp;&nbsp; Freedom from unhygienic <br />
            sanitation
          </p>
          <p className="common-text">
            <img className="common-img" src={drop} alt="" />
            &nbsp;&nbsp;&nbsp;&nbsp; Rejuvenation <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of water bodies
          </p>
        </div>
      </div>

      {/* section three */}

      <div className="col-main-content">
        <div className="col-ecolats-left ">
          <p className="heading-content">SMART PUBLIC TOILETS</p>
          <ice className="ECO">ECOMITRA</ice>

          <hr className="smart-public-toilet-line-container" />
          <div className="elats_left">
            <p>
              Public toilets in India today face three major issues: a need for
              constant{" "}
            </p>
            <p>
              maintenance, provision of an uninterrupted water supply, and a
              lack of waste{" "}
            </p>
            <p>
              disposal mechanisms. With EcoMitra we’ve solved these and more:
            </p>
          </div>
          <br />

          <div className="PERA_text_form">

            <p className="p-text1">
              <img  alt="" src={settingIcon} />
              &nbsp;&nbsp;&nbsp;&nbsp; Automated cleaning and maintenance
            </p>

            <p className="p-text2">
              <img alt="" src={smallDrop} />
              &nbsp;&nbsp;&nbsp;&nbsp; Treats waste water on-site
            </p>

            <p className="p-text3">
              <img  alt="" src={waterCare} />
              &nbsp;&nbsp;&nbsp;&nbsp; Consumes 80% less water
            </p>

            <p className="p-text4">
              <img  alt="" src={renewableEnergy} />
              &nbsp;&nbsp;&nbsp;&nbsp; Works on renewable energy
            </p>
            <br />

            <p className="p-text5">
              <a href="Ecomitra">
                <input type="button" name="learn" value="LEARN MORE" />{" "}
              </a>
            </p>
          </div>
        </div>
        <div className="col-ecolats-right">
          <img className="responsive-image " src={newImg} alt="" />
        </div>
      </div>

      {/* section four */}

      <div className="col-main-content">
        <div className="col-ecolats-left" style={{width:"100%",height:"auto" }}>
          <img src={newImg} alt=""  className="demo_img"/>
        </div>

        <div className="col-ecolats-left">
          <p
            className="recycle-water-heading-content"
            style={{ marginLeft: "40px" }}
          >
            TREAT & RECYCLE WATER
          </p>
          <ice className="rewater-content" 
          style={{ marginLeft: "40px" }}
          >
            REWATER
          </ice>
          <hr className="recycle-line-container" 
          style={{marginLeft:"40px"}} 
          />

          <div className="elats_right">
            <p>
              We are cleaning sewage streams and water bodies through
              eco-friendly
            </p>
            <p className="recycle-pera-two">
              biological interventions.We are waging a war on Water Crisis and
              Water
            </p>
            <p className="recycle-pera-three">
              {" "}
              Pollution with our innovative waste treatment system:
            </p>
          </div>
          <br />
          <div className="PERA_text">
            <p>
              <img class="drop-container" src={smallDropIcon} />
              &nbsp;&nbsp;&nbsp;&nbsp; Treats waste water to a reusable effluent
              level
              <br />
            </p>

            <p>
              <img class="left-setting-container" src={settingIcon} />
              &nbsp;&nbsp;&nbsp;&nbsp; Fully automated, no manualintervention
              <br />
            </p>

            <p>
              <img class="doller-container" src={dollerIcon} />
              &nbsp;&nbsp;&nbsp;&nbsp; Zero operation and maintenance cost
              <br />
            </p>

            <p>
              <img class="renewable-container" src={renewableEnergy} />
              &nbsp;&nbsp;&nbsp;&nbsp; Works on renewable energy
              <br />
            </p>
          </div>
          <br />
          <p>
            <a href="Rewater">
              <input type="button" name="rewater" value="LEARN MORE" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
