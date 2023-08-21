import React, { useState } from "react";
import image from "../Home/home-front-banner.jpg";
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



      {/* section one  */}
      <div
        className="banner-img-container"
        style={{
          backgroundImage: `URL(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "600px",

          
        }}
      >
        <p
          className="Baneer-text"
          style={{ width:"100%", 
          position: "absolute",
          justifyContent: "center",
          textAlign:"center",
          marginTop:"400px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "white",
          opacity: ".8",


        }}
        >
          Sustainable creations for  &nbsp;<span id="banner-text">you</span>
        </p>
      </div>

      <div class="col-md-12-text-center">
        <p class="p-text-below-banner-txt">
          SUKRITI is working to solve
          <br />
          <ice className="two-major-factor">
            two major developmental challenges of our society
          </ice>
        </p>
      </div>

      {/* section two */}
      <div className="outer-text-of-banner">
        <p className="img-of-seat">
          <img src={seat} />
          &nbsp;&nbsp;&nbsp;&nbsp; Freedom from unhygienic <br />
          sanitation
        </p>

        <p className="water-drop-image">
          <img src={drop} />
          &nbsp;&nbsp;&nbsp;&nbsp; Rejuvenation <br />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of water bodies
        </p>
      </div>

      {/* section three */}
      <div class="content-Ecolet">
        <div class="container-mt">
          <div class="row">
            <div class="col-main-content">
              <br />
              <div class="col-ecolats-left ">
                <p class="heading-content">
                  <tc>SMART PUBLIC TOILETS</tc>
                </p>
                <ice className="ECO">ECOMITRA</ice>

                <hr className="smart-public-toilet-line-container" />

                <div class="elats_left">
                  <tc className="peracontainer1">
                    Public toilets in India today face three major issues: a
                    need for constant{" "}
                  </tc>
                  <ice className="peracontainer2">
                    maintenance, provision of an uninterrupted water supply, and
                    a lack of waste{" "}
                  </ice>
                  <ice className="peracontainer3">
                    disposal mechanisms. With EcoMitra we’ve solved these and
                    more:
                  </ice>
                </div>
                <br />

                <div className="PERA_text_form">
                  <p className="p-text1">
                    <img class="left-small_icon" src={settingIcon} />
                    &nbsp;&nbsp;&nbsp;&nbsp; Automated cleaning and maintenance
                  </p>

                  <p className="p-text2">
                    <img class="left-small_icon" src={smallDrop} />
                    &nbsp;&nbsp;&nbsp;&nbsp; Treats waste water on-site
                  </p>

                  <p className="p-text3">
                    <img class="left-small_icon" src={waterCare} />
                    &nbsp;&nbsp;&nbsp;&nbsp; Consumes 80% less water
                  </p>

                  <p className="p-text4">
                    <img class="left-small_icon" src={renewableEnergy} />
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

              <div class="ecolats-right-left">
                <div class="inner-recycle-background-front-container">
                  <p className="background-of-recyle-water-container">
                    <img
                      src={backgroundOfEcomitra}
                      className="ineer-background-of-ecomitra-container"
                      style={{width:"100%"}}
                    />
                  </p>

                  <p className="toilet-icon-of-recyle-water-container">
                    <img
                      src={fullImageOfToilet}
                      className="ineer-toileticon-ecomitra-container"
                    />
                  </p>

                  <p className="frontview-icon-of-recyle-water-container">
                    <img
                      src={frontView}
                      className="ineer-frontview-ecomitra-container"
                    />
                  </p>

                  <p className="image-icon-of-recyle-water-container">
                    <img
                      src={Image}
                      className="ineer-image-ecomitra-container"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* section four */}
      <div className="recycle-background-front-container"
      style={{width:"100"}}
      >
        <div>
          <div>
            <div className="inner-recycle-background-front-container">
              <p className="background-of-recyle-water-container">
                <img
                  src={RewaterIcon}
                  className="ineer-background-of-recyle-water-container"
                />
              </p>
              <p className="river-img-container">
                <img src={shiprazRiver} className="ineer-river-img-container" />
                <br />
              </p>

              <p className="boxes-img-container">
                <br />
                <img src={BoxesIcon} className="ineer-boxes-img-container" />
              </p>

              <p className="river-icon-container">
                <br />
                <img src={RiverIcon} className="ineer-river-icon-container" />
              </p>
            </div>

            <div>
              <p className="recycle-water-heading-content">
                TREAT & RECYCLE WATER
              </p>
              <ice className="rewater-heading-content">REWATER</ice>
              <hr className="line-of-recyle" />
              <p class="elats_right">
                <ice className="recycle-pera-one">
                  We are cleaning sewage streams and water bodies through
                  eco-friendly
                </ice>
                <ice className="recycle-pera-two">
                  biological interventions.We are waging a war on Water Crisis
                  and Water
                </ice>
                <ice className="recycle-pera-three">
                  {" "}
                  Pollution with our innovative waste treatment system:
                </ice>
                <br />
              </p>
              <div classna="title-of-recyle">
                <p className="inner-title-of-recyle1">
                  <img class="drop-container" src={smallDropIcon} />
                  &nbsp;&nbsp;&nbsp;&nbsp; Treats waste water to a reusable
                  effluent level
                  <br />
                </p>

                <p className="inner-title-of-recyle2">
                  <img class="left-setting-container" src={settingIcon} />
                  &nbsp;&nbsp;&nbsp;&nbsp; Fully automated, no
                  manualintervention
                  <br />
                </p>

                <p className="inner-title-of-recyle3">
                  <img class="doller-container" src={dollerIcon} />
                  &nbsp;&nbsp;&nbsp;&nbsp; Zero operation and maintenance cost
                  <br />
                </p>

                <p className="inner-title-of-recyle4">
                  <img class="renewable-container" src={renewableEnergy} />
                  &nbsp;&nbsp;&nbsp;&nbsp; Works on renewable energy
                  <br />
                </p>
                <br />
                <p className="inner-title-of-recyle5">
                  <a href="Rewater">
                    {" "}
                    <input type="button" name="learn" value="LEARN MORE" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section five */}
      <div className="outer-achievement-container "
      style={{width:"100%"}}
      >
        <div class="achievement-container ">
          <div class="achivment-text-center">
            <p className="heading-content-text-uppercase">Achievements</p>
            <p class="heading-content-text-lowercase">
              Our innovative & sustainable engineering, and its impactful
              execution
              <br />
              has helped us achieve many feats in a short span.
            </p>
          </div>
          <div className="carousel-wrap">
            {/* <button onClick={prevOutlet} OnClick={nextOutlet} className='prev-outlet-container'>
                      <div className='back-inner-container' >
                         <p className='inner-prev-icon'>&#8249;</p>
                         <p className='inner-next-icon'> &#8250;</p> 
                
                        </div> */}

            <div className="owl-carousel-owl-theme">
              <div className="item-carousel-card">
                <div className="centered-top">
                  <img src={McIcon} className="image-of-mc-icon" />
                  <p className="heading-text">Winner</p>
                  <p className="pera-text-of-mc-icon">
                    Mass Challenge, <br /> Israel
                  </p>
                </div>
              </div>

              <div className="item-carousel-card">
                <div className="centered-top">
                  <img className="achievement-img" src={awardIcon} />
                </div>
              </div>

              <div className="item-carousel-card">
                <div className="centered-top">
                  <div className="outer-idian-oil-image-container">
                    <img
                      src={indianOilIcon}
                      className="inner-idian-oil-image-container"
                    />
                  </div>
                  <div className=" text-center">
                    <p className="heading-text">Winner</p>
                    <p className="pera-text-of-mc-icon">Indian Oil,</p>
                    <p className="pera-text-of-mc-icon">Startup Fund Grant</p>
                  </div>
                </div>
              </div>

              {/* <div className="item-carousel-card">
                <div className="centered-top">
                  <img src={award2Icon} className="achievement-img" />
                </div>
              </div> */}

            </div>
            {/* </button> */}
          </div>
        </div>
        <div class="container-fluid text-center resMedia">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <p class="text-center media">
                <span>IN THE MEDIA&nbsp;:</span>
                
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section six */}
      <div>
        <div className="partner-container">
          <div className="partner-heading-content">
            <p>OUR PARTNERS</p>
          </div>

          <div className="outer-india-insitude-of-technology-banner">
            <div className="outer-iit-logo-container">
              <img src={iitLogo} className="iit-logo-container" />
            </div>
            <div className="vertical-line-container" />

            <div className="conent-of-the-iit-roorkee">
              <p className="inner-box-conent-of-the-iit-roorkee">
                <ice className="inner-box1-conent-of-the-iit-roorkee">
                  IIT Roorkee is helping us with the
                </ice>
                <br />
                <ice className="inner-box2-conent-of-the-iit-roorkee">
                  development of technology for our smart
                </ice>
                <br />
                <ice className="inner-box3-conent-of-the-iit-roorkee">
                  toilet.
                </ice>
              </p>
            </div>
          </div>

          <div className="main-university-of-surrey-container">
            <div className="outer-university-of-surrey-logo-container">
              <img
                src={surreyIcon}
                className="university-of-surrey-logo-container"
              />
            </div>
            <div className="vertical-surrrey-line-container" />

            <div>
              <p className="surrey">
                <ice className="surrey1">
                  University of Surrey, UK is helping us with the
                </ice>
                <ice className="surrey2">
                  development of an efficient waste treatment{" "}
                </ice>
                <ice className="surrey3">system.</ice>
              </p>
            </div>
          </div>

          <div className="indian-oil-outer-img-icon">
            <div>
              <img
                src={IconOfIndianOil}
                className="indian-oil-inner-img-icon"
              />
            </div>
            <div className="vertical-indian-oil-line-container" />

            <div className="outer-main-pera-content-of-indian-oil">
              <ice className="outer-main-pera1-content-of-indian-oil">
                Indian Oil is providing us with funding and{" "}
              </ice>
              <ice className="outer-main-pera2-content-of-indian-oil">
                mentoring for the development of smart toilet{" "}
              </ice>
              <ice className="outer-main-pera3-content-of-indian-oil">
                technologies.
              </ice>
            </div>
          </div>
        </div>
      </div>

      {/* sectionseven */}
      <div
        className="section-seven-main-container"
        style={{
          width:"100%",
          backgroundImage: `url(${BackgroundContactUs})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <footer
          className="main-footer-container"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="first-contaUs-column" style={{ marginTop: "70px" }}>
            <div>
              <div class="footer_icon">
                <img
                  src={IconOfLinkedin}
                  className="container-of-linkedinIcon"
                />
              </div>

              <div
                class="footer_icon"
                style={{
                  position: "absolute",
                  marginTop: "-55px",
                  marginLeft: "80px",
                }}
              >
                <img
                  alt=""
                  src={IconOfFacebook}
                  className="container-of-facebookIcon"
                />
              </div>
              <div
                class="footer_icon"
                style={{
                  position: "absolute",
                  marginTop: "-55px",
                  marginLeft: "160px",
                }}
              >
                <img src={IconOfYouTube} className="container-of-youTubeIcon" />
              </div>
            </div>
            <div className="old-ofice-address-container">
              <p
                className="contact"
                style={{
                  color: "white",
                  fontSize: "17px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  color: "#ffffffe8",
                  opacity: ".7",
                }}
              >
                011-40196604
                <br />
                contact@sukriti.ngo
                <br />
                <br />
                Registered Office :<br />
                190, DDA Office Complex,
                <br />
                Jhandewalan Phase 1 ,Delhi 110055, India
                <br />
              </p>
            </div>
            <div className="sukriti-Logo-Container ">
              <img src={LogoOfSukriti} alt="logo" className="Logo-Container" />
            </div>
          </div>
          <div className="second-contaUs-column">
            <div
              style={{
                marginTop: "100px",
              }}
            >
              <form action="Home.js" method="post">
                <div className="form-group">
                  <div className="form-inline">
                    <div
                      className="form-container"
                      style={{
                        fontSize: "18px",
                        fontFamily: "Avenir_book",
                        color: "#ffffffe8",

                        // opacity:".7"
                      }}
                    >
                      <input
                        style={{
                          width: "130px",
                          height: "35px",
                          borderBottomLeftRadius: "16px",
                          borderBottomRightRadius: "16px",
                          borderTopLeftRadius: "16px",
                          borderTopRightRadius: "16px",
                          textAlign: "center",
                        }}
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="First Name"
                        required
                        data-error="Please enter your name"
                      />
                    </div>
                    <br />

                    <div>
                      <input
                        style={{
                          width: "130px",
                          height: "35px",
                          borderBottomLeftRadius: "16px",
                          borderBottomRightRadius: "16px",
                          borderTopLeftRadius: "16px",
                          borderTopRightRadius: "16px",
                          textAlign: "center",
                          position: "absolute",
                          marginTop: "-60px",
                          marginLeft: "150px",
                        }}
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Last Name"
                        required
                        data-error="Please enter your Last name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <input
                    style={{
                      width: "280px",
                      height: "35px",
                      borderBottomLeftRadius: "16px",
                      borderBottomRightRadius: "16px",
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                      textAlign: "center",
                    }}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    required
                    data-error="Please enter your email"
                  />
                </div>
                <br />

                <div className="form-group">
                  <textarea
                    style={{
                      width: "280px",
                      height: "120px",
                      borderBottomLeftRadius: "14px",
                      borderBottomRightRadius: "14px",
                      borderTopLeftRadius: "14px",
                      borderTopRightRadius: "14px",
                      textDecoration: "center",
                    }}
                    rows="5"
                    placeholder="Message..."
                    name="msg"
                    required
                  ></textarea>
                </div>
                <br />
                <button
                  type="submit"
                  id="submit"
                  className="btn submit_butn"
                  style={{
                    width: "180px",
                    height: "50px",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    textDecoration: "center",
                    marginLeft: "50px",
                    backgroundColor: " #00bfa5",
                    color: "white",
                    fontFamily:
                      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  CONTACT US
                </button>
              </form>
            </div>
          </div>

          <div
            className="third-contaUs-column"
            style={{
              marginTop: "120px",
              color: "white",
              fontSize: "16px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              color: "#ffffffe8",
              opacity: ".7",
            }}
          >
            <div style={{ marginTop: "-30px", whiteSpace: "4px" }}>
              <p>
                Corporate Office :<br />
                1567, Sector 15, Part II
                <br />
                Gurugram, Haryana - 122022
                <br /> <br />
                Production Centre :<br />
                Sukriti Social Foundation
                <br />
                Opposite Vinay High School
                <br />
                Chandu Sultanpur Road
                <br />
                Near Sultanpur National Park
                <br />
                Gurugram, Haryana - 122022
                <br />
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
