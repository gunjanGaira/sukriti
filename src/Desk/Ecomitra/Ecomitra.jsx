import React from "react";
import "./Ecomitra.css";
import EcoBanner from "../Ecomitra/eco-banner.png";
import SpinIcon from "../Ecomitra/spin.svg";
import Group1 from "../Ecomitra/group1.jpg";
import Group2 from "../Ecomitra/group2.jpg";
import Group3 from "../Ecomitra/group3.jpg";
import Group4 from "../Ecomitra/group4.jpg";
import Factor1 from "../Ecomitra/keyOne.png";
import Factor2 from "../Ecomitra/keyTwo.png";
import Factor3 from "../Ecomitra/keyThree.png";
import smartHygieneIcon from "../Ecomitra/smart-hygiene-icon.svg";
import smartentryIcon from "../Ecomitra/smart-entry-icon.svg";
import wasteWaterIcon from "../Ecomitra/water-treatment-icon.png";
import healthMonitoring from "../Ecomitra/smart-health-icon.svg";
import solarEnergy from "../Ecomitra/solar-energy.svg";
import robustStructure from "../Ecomitra/Robust-Structure.svg";
import EcoVideo from "../Ecomitra/eco-video.mp4";
import playIcon from "../Ecomitra/play.png";
import VideoImage from "../Ecomitra/video-img(2).png";
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
import BackgroundContactUs from "../Home/contact-us-background.JPG";
import secBackOfConUs from "../Home/back.png";
import IconOfLinkedin from "../Home/linkedin-icon.png";
import IconOfFacebook from "../Home/facebook-icon.png";
import IconOfYouTube from "../Home/youtube-icon.png";
import LogoOfSukriti from "../Home/Sukriti-Logo.svg";


const Ecomitra = () => {
  return (
    <div>
      {/* section one */}
      <div className="eco-container">
        <div
          className="img-eco-container"
          style={{
            backgroundImage: `url(${EcoBanner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "42%",
            position: "relative",
            width: "100%",
          }}
        >
          <p id="bannerTextEcolat">
            {" "}
            Smart. Simple.{" "}
            <span
              style={{
                color: "#00bfa5",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              }}
            >
              Sustainable.
            </span>
          </p>
        </div>
      </div>

      {/* section two */}
      <div
        className="container-fluid-slide1"
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
        <div class="text-center">
          <p className="heading-content-elat_h">WHY SANITATION ?</p>
        </div>
        <div>
          {/* Loading Screen */}
          <div className="jssorl-009-spin">
            <img
            // style={{marginTop:"-19px",position:"relative",top:"50%",width:"38px",height:"38px"}}
            // src={SpinIcon}
            />
          </div>
          <div className="image-Con" data-u="slides">
            <div>
              <img
                data-u="image"
                // src={Group3}
                style={{ paddingRight: "20px" }}
              />
            </div>
            <div>
              <img
                data-u="image"
                // src={Group4}
                style={{ paddingRight: "20px" }}
              />
            </div>
            <div>
              <img
                data-u="image"
                // src={Group2}
                style={{ paddingRight: "20px" }}
              />
            </div>
            <div>
              <img
                data-u="image"
                // src={Group1}
                style={{ paddingRight: "20px" }}
              />
            </div>
          </div>
          {/*  Bullet Navigator  */}
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
              <svg
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
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* section three */}
      <div className="challenges_container">
        <div>
          <p className="headingOfChallenges">
            Today, public toilets in India suffer from three major challenges:
          </p>
        </div>

        <div className="keys_con">
          <div className="key1">
            <img src={Factor1} className="fectorImg" />

            <p className="peraKey">Constant maintenance</p>
          </div>

          <div className="key2">
            <img src={Factor2} className="fectorImg" />
            <p className="peraKey">
              Uninterrupted water supply to meet <br /> high water requirements
            </p>
          </div>

          <div className="key3">
            <img src={Factor3} className="fectorImg" />
            <p className="peraKey">
              Inadequate waste disposal <br /> mechanisms
            </p>
          </div>
        </div>

        <div className="keyPera">
          <p
            className="LONG-PERA"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ",
              lineHeight: "1.6",
            }}
          >
            A combination of these three factors forces the general public,
            especially women to use open spaces for urination and defecation.
            This not
            <br /> only compromises their dignity and safety, but also their
            health, causing various diseases, chronic illness, malnutrition, and
            on a much larger <br />
            scale; the loss of human resource!
          </p>
        </div>
      </div>

      {/* section four */}
      <div className="mainCon">
        <div>
          <div>
            <p className="H_of_smrt_sluton">
              ECOMITRA
              <span> : A SMART SOLUTION </span>
            </p>
            {/* <hr /> */}
          </div>

          <div className="solution-Container">
            <div style={{ display: "flex" }}>
              <img src={smartHygieneIcon} />
              <p className="pera-solution-Container">
                <span>Smart hygiene maintenance: </span>
                eliminates manual cleaning with auto
                <br /> flushing and floor cleaning. It also decides the optimum
                water required.
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <img src={smartentryIcon} />
              <p className="pera-solution-Container">
                <span>Smart entry management:</span>
                stops user entry in case of empty water <br /> tanks or chokes,
                a patented sensorless tech. <br />
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <img
                src={wasteWaterIcon}
                style={{ width: "30px", height: "30px", marginTop: "3%" }}
              />
              <p className="pera-solution-Container">
                <span>On-site waste water treatment:</span>
                saves 80% water by recycling it for <br /> flushing, floor
                cleaning, etc. A patented model, it is maintenance free <br />{" "}
                with zero operational costs.
                <br />
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <img src={healthMonitoring} />
              <p className="pera-solution-Container">
                <span>Smart health monitoring:</span>
                conveys maintenance schedule to central <br /> monitoring
                station based on the toilet’s health.
                <br />
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <img src={solarEnergy} />
              <p className="pera-solution-Container">
                <span>Runs on solar energy:</span> no grid connection needed.
                <br />
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <img src={robustStructure} />
              <p className="pera-solution-Container">
                <span>Robust Structure:</span>
                Our toilet is a strong and robust RCC superstructure.
                <br /> The use of metallic fixtures and sturdy fittings ensure
                their use over a<br />
                long period of time and reduce the probability and need of{" "}
                <br />
                replacement.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="ev_container">
            <img id="play_btn" class="e_play_btn" src={playIcon} />
            <video
              className="eco-vi-Img"
              poster={VideoImage}
              src={EcoVideo}
              type="video/mp4"
            ></video>
            {/* <img id="play_btn" class="e_play_btn" src={playIcon} /> */}
          </div>
        </div>
      </div>

      {/* section five */}
      <div>
        <div>
          <div>{/* <img src={SpinIcon} /> */}</div>
          <div>
            <div>{/* <img  src={Img1} /> */}</div>
            <div>{/* <img src={Img2}/> */}</div>
            <div>{/* <img src={Img3} /> */}</div>
            <div>{/* <img src={Img4}/> */}</div>
            <div>{/* <img src={Img5} /> */}</div>
            <div>{/* <img  src={Img6} /> */}</div>
            <div>{/* <img  src={Img7} /> */}</div>
            <div>{/* <img  src={Img8} /> */}</div>
            <div>{/* <img src={Img9} /> */}</div>
            <div>{/* <img  src={Img10} /> */}</div>
            <div>{/* <img  src={Img11} /> */}</div>
            <div>{/* <img src={Img12}/> */}</div>
            <div>{/* <img  src={Img13} /> */}</div>
            <div>{/* <img  src={Img14} /> */}</div>
            <div>{/* <img  src={Img15} /> */}</div>
            <div>{/* <img src={Img16} /> */}</div>
            <div>{/* <img src={Img17}/> */}</div>
            <div>{/* <img  src={Img18} /> */}</div>
            <div>{/* <img src={Img19}/> */}</div>
            <div>{/* <img src={Img20} /> */}</div>
            <div>{/* <img  src={Img21} /> */}</div>
            {/* <img  src={Img22} /> */}
          </div>
          <div>{/* <img  src={Img23}  /> */}</div>
        </div>

        <div>{/* <img src={Img24} alt="" /> */}</div>
        <div>{/* <img src={Img25} alt=""/> */}</div>
        <div className="memories-content">
          <div>
            <p>
              EcoMitra saves 0.5 million
              <br /> litres of water per toilet every <br />
              year
            </p>
          </div>
          <div>
            <p>
              Prevents soil and water degradation
              <br /> caused by dumping of untreated waste
            </p>
          </div>
          <div>
            <p>
              Solar panels save 1,000 units of
              <br /> electricity per Ecomitra every year
            </p>
          </div>
        </div>
      </div>

      {/* section six */}

      <div className="impect_container">
        <p className="impe">IMPACT</p>
        {/* <hr class="eco_hr" /> */}
        <p className="impe_content">
          In the first five years, we are looking at directly impacting
          <b> 5 million Indians </b>who have to use unhygienic public toilets at
          their workplaces or while commuting. We are also looking at impacting
          students in government schools and institutions which do not have a
          single, well-maintained toilet within their premises; girls and women
          who have to change their diets out of the fear of safety while
          defecating in open, or who suffer from diseases due to unavailability
          of proper sanitary care; and the thousands of people who use
          unhygienic, poorly-maintained public toilets every day throughout the
          country.
        </p>
      </div>
      {/* section seven */}
      <footer className="footer-container">
        <img src={BackgroundContactUs} className="section-seven-container" />

        <div className="Footer-content-container">
          <div className="first-contaUs-column"style={{justifySelf:"center"}}>
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
                Jhandewalan Phase 1 ,
                <br />
                Delhi 110055, India
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
          <div className="second-contaUs-column"style={{justifySelf:"center"}}>
            <div>
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

          <div className="third-contaUs-column" style={{justifySelf:"center"}}>
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

export default Ecomitra;
