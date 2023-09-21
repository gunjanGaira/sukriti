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
import demoImage from "../Home/re-img.png";
import group_5 from "../Home/group-5.svg";
import group_21 from "../Home/group-21.svg";
import ndtvLogo from "../Home/ndtv-seeklogo-com.svg";
import iitLogo from "../Home/iit-roorkee-logo.png";
import surreyIcon from "../Home/university-of-surrey.png";
import IconOfIndianOil from "../Home/Icon-of-indianoil.png";
import newImg from "../Home/new-img.png";
import Footer from "../Footer/Footer";
import Home_carousel from "../Carousel/Home_carousel";
// import Home_carousel from "../"

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
      {/* section one */}
      <div
        className="banner-img-container"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingTop: "43%",
          position: "relative",
          width: "100%",
        }}
      >
        <p className="Banner-text">
          Sustainable creations for <span id="banner-text">you</span>
        </p>
      </div>

      {/* section two */}
      <div className="below-banner">
        <div>
          <p className="belw-ban-inr-con">
            SUKRITI is working to solve
            <br />
            <ice className="belw-ban-inr-con">
              two major developmental challenges of our society
            </ice>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
          className="commanText"
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
        <div className="col-ecolats">
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

          <div className="PERA_text_form">
            <div className="p-text1">
              <img alt="" src={settingIcon} className="icons-of-home" />
              <p className="p-text"> Automated cleaning and maintenance</p>
            </div>

            <div className="p-text1">
              <img alt="" src={smallDrop} className="icons-of-home" />
              <p className="p-text"> Treats waste water on-site</p>
            </div>

            <div className="p-text1">
              <img alt="" src={waterCare} className="icons-of-home" />
              <p className="p-text"> Consumes 80% less water</p>
            </div>

            <div className="p-text1">
              <img alt="" src={renewableEnergy} className="icons-of-home" />
              <p className="p-text"> Works on renewable energy</p>
            </div>

            <p className="p-text5">
              <a href="Ecomitra">
                <input type="button" name="learn" value="LEARN MORE" />
              </a>
            </p>
          </div>
        </div>
        <div className="col-ecolats-right">
          <img className="responsive-image " src={newImg} alt="" />
        </div>
      </div>

      {/* section four */}
      <div className="main-content">
        <div className="col-ecolats-left">
          <img src={demoImage} alt="" className="demo_img" />
        </div>

        <div className="col-ecolats-left">
          <p className="recycle-water-heading-content">TREAT & RECYCLE WATER</p>
          <ice className="rewater-content">REWATER</ice>
          <hr className="recycle-line-container" />

          <div className="elats_right">
            <p>
              We are cleaning sewage streams and water bodies through
              eco-friendly
            </p>
            <p>
              biological interventions.We are waging a war on Water Crisis and
              Water
            </p>
            <p> Pollution with our innovative waste treatment system:</p>
          </div>
          <br />

          <div className="PERA_text">
            <div className="p-text2">
              <img className="icons-of-home" src={smallDropIcon} />

              <p className="p-text">
                {" "}
                Treats waste water to a reusable effluent level
              </p>
              <br />
            </div>

            <div className="p-text2">
              <img className="icons-of-home" src={settingIcon} />

              <p className="p-text">Fully automated, no manualintervention</p>
            </div>

            <div className="p-text2">
              <img className="icons-of-home" src={dollerIcon} />

              <p className="p-text">Zero operation and maintenance cost</p>
            </div>

            <div className="p-text2">
              <img className="icons-of-home" src={renewableEnergy} />

              <p className="p-text">Works on renewable energy</p>
            </div>
          </div>
          <br />
          <p>
            <a href="Rewater">
              <input type="button" name="rewater" value="LEARN MORE" />
            </a>
          </p>
        </div>
      </div>

      {/* section five */}
      <div className="outer-achievement-container " style={{ width: "100%" }}>
        <div className="achievement-container ">
          <div className="achivment-text-center">
            <p className="heading-uppercase">Achievements</p>
            <p className="heading-lowercase">
              Our innovative & sustainable engineering, and its impactful
              execution
              <br />
              has helped us achieve many feats in a short span.
            </p>
          </div>
          <div>
            <Home_carousel />
          </div>
        </div>
        <div className="media_section">
          <div className="media_class">
            <p className="text-center-media">IN THE MEDIA&nbsp;:&nbsp;</p>
          </div>{" "}
          &nbsp;&nbsp;
            <div className="groups_img">
              <img src={group_5}  className="d_j_image"/>
            </div>
            &nbsp;&nbsp;
            <div className="groups_img">
              <img src={group_21} className="hindustan_times"/>
            </div>
            &nbsp;&nbsp;
            <div className="groups_img">
              <img src={ndtvLogo} className="ndtv"/>
            </div>
        </div>
      </div>

      {/* section six */}
      <div className="partner-container">
        <div className="partner-heading-content">
          <p>OUR PARTNERS</p>
        </div>

        <div className="outer-iit-conta">
          <div className="outer-iit-logo-container">
            <img src={iitLogo} className="iit-logo-container" />
            <div className="vertical-line-container" />
            <p className="pt">
              IIT Roorkee is helping us with the
              <br />
              development of technology for our smart
              <br />
              toilet.
            </p>
          </div>
        </div>

        <div className="outer-iit-conta">
          <div className="outer-iit-logo-container">
            <img src={surreyIcon} className="surrey-logo-container" />
            <div className="vertical-surrrey-line-container" />
            <p className="pt2">
              University of Surrey, UK is helping us with the
              <br />
              development of an efficient waste treatment
              <br />
              system.
            </p>
          </div>
        </div>
        <div className="outer-iit-conta">
          <div className="outer-iit-logo-container">
            <img src={IconOfIndianOil} className="indian-oil-icon" />
            <div className="vertical-surrrey-line-container" />
            <p className="pt3">
              Indian Oil is providing us with funding and
              <br />
              mentoring for the development of smart toilet
              <br />
              technologies.
            </p>
          </div>
        </div>
      </div>

      {/*section seven */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
