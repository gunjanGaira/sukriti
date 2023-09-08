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
              stops user entry in case of empty water <br /> tanks or chokes, a
              patented sensorless tech. <br />
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
              conveys maintenance schedule to central <br /> monitoring station
              based on the toilet’s health.
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
              long period of time and reduce the probability and need of <br />
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
      
    </div>
  );
};

export default Ecomitra;
