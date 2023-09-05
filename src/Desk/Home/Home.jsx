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
import McIcon from "../Home/mc-icon.png";
import iitLogo from "../Home/iit-roorkee-logo.png";
import surreyIcon from "../Home/university-of-surrey.png";
import IconOfIndianOil from "../Home/Icon-of-indianoil.png";
import BackgroundContactUs from "../Home/contact-us-background.JPG";
import secBackOfConUs from "../Home/back.png";
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
      {/* section one */}
      <div
        className="banner-img-container"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingTop: "50%",
          position: "relative",
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

            {/* </div> */}

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

      <div className="col-main-content">
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
            {/* <div>
            <button onClick={prevOutlet} OnClick={nextOutlet} className='prev-outlet-container' />
                      <div className='back-inner-container' >
                         <p className='inner-prev-icon'>&#8249;</p>
                         <p className='inner-next-icon'> &#8250;</p> 
                
                        </div> 
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

              {/* <div className="item-carousel-card">
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
                </div> */}

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

      <footer className="footer-container">
        <img src={BackgroundContactUs} className="section-seven-container" />

        <div className="Footer-content-container">
          <div className="first-contaUs-column">
            <div className="footerMainCopntainer">
              <img src={IconOfLinkedin} className="linkedinIcon" />
              <img src={IconOfFacebook} className="facebookIcon" />
              <img src={IconOfYouTube} className="youtubeIcon" />
            </div>

            <div className="old-ofice-address-container">
              <p className="contact">
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
              <img
                src={LogoOfSukriti}
                alt="logo"
                className="sukriti-Logo-Container "
              />
            </div>
          </div>
          <div className="second-contaUs-column">
            <div
              style={
                {
                  // marginTop: "100px"
                }
              }
            >
              <form action="Home.js" method="post" className="form">
                <div className="form-group">
                  <div className="form-inline">
                    <div className="input-point">
                      <input
                        className="input-point"
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
                        className="input-point2"
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
                    className="input-point3"
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
                    className="textarea"
                    rows="5"
                    placeholder="Message..."
                    name="msg"
                    required
                  ></textarea>
                </div>
                <br />
                <button type="submit" id="submit" className="btn-submit_butn">
                  CONTACT US
                </button>
              </form>
            </div>
          </div>

          <div className="third-contaUs-column" >
            <p className="Second-contact" style={{ fontSize: "15px",opacity:"0.7",lineHeight:"1.7",
          marginTop:"-10px" }}>
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
      {/* </div> */}

      {/* section eight */}

      <footer className="EightContainer">
        <div style={{width:"100%"}}>
          <img src={secBackOfConUs} className="backOfEightContainer" />
        </div>

        <div className="logoicon">
          <div className="icons">
            <img
              src={IconOfLinkedin}
              className="linkedinIcon"
              style={{ width: "10%" }}
            />
            <img
              src={IconOfFacebook}
              className="facebookIcon"
              style={{ marginLeft: " 8%", width: "10%" }}
            />
            <img
              src={IconOfYouTube}
              className="youtubeIcon"
              style={{ marginLeft: "8%", width: "10%" }}
            />
          </div>
          <form action="Home.js" method="post" className="form">
            <div className="Form">
              <div className="form-inline">
                <div className="inputs">
                  <input
                    className="inputOne"
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
                    className="inputTwo"
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
                className="inputThree"
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                required
                data-error="Please enter your email"
              />
            </div>
            <br />

            <div className="form">
              <textarea
                className="text-area"
                rows="5"
                placeholder="Message..."
                name="msg"
                required
              ></textarea>
            </div>
            <br />
            <button type="submit" id="submit" className="submit-button">
              CONTACT US
            </button>
          </form>
            <p className="address" >
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
            <p className="prevAddress">
                011-40196604
                <br />
                contact@sukriti.ngo
                <br />
                Registered Office :<br />
                190, DDA Office Complex,
                <br />
                Jhandewalan Phase 1 ,
                <br />
                Delhi 110055, India
                <br />
              </p>
          </div>
          
              <img
                src={LogoOfSukriti}
                alt="logo"
                className="sukriti-Logo "
              />

      </footer>
    </div>
  );
};

export default Home;
