import React from "react";
import "./Rewater.css";
import RewaterImage from "../Rewater/rewater-banner.png";
import ImageOne from "../Rewater/group-26@3x.jpg";
import ImageTwo from "../Rewater/group-26-copy-3@2x.jpg";
import ImageThree from "../Rewater/group-29@3x.jpg";
import Imagefour from "../Rewater/group-26-copy-2@3x.jpg";
import prefabricated from "../Rewater/Prefabricated-waste-icon.svg";
import automated from "../Rewater/Fully-automated-icon.svg";
import HybridTechnology from "../Rewater/hybrid-technology-icon.svg";
import BlackWater from "../Rewater/black-water.svg";
import SolarEnergy from "../Rewater/solar-energy.svg";
import Shipra_River from "../Rewater/10.JPG";
import Rewater_video from "../Rewater/rewater_vid.mp4";
import PLAY_icon from "../Rewater/play.png";

const Rewater = () => {
  const my_func=()=>{
    if(document.getElementById('player').paused){
      document.getElementById('player').play()
      ('#play_btn').hide();
    }
    else{
      document.getElementById('player').pause()
      ('#play_btn').show();
    }
  };
  return (
    <div>
      {/* section one */}
      <div className=".rewater_banner">
        <div
          className="img-Content"
          style={{
            backgroundImage: `url(${RewaterImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "43%",
            position: "relative",
          }}
        >
          <p className="Text-of-Banner">
            {" "}
            Regenerating Water. Rejuvenating
            <span
              style={{
                color: "#00bfa5",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              }}
            >
              Lives.
            </span>
          </p>
        </div>
      </div>

      {/* section two */}
      <div className="recycleContainer">
        <div style={{ textAlign: "center" }}>
          <p className="pera-of-rcyl">WHY RECYCLE WATER ?</p>
        </div>
        <div className="carousel_images">
          <div>
            <img src="assets/ngo/spin.svg" />
          </div>

          <div>{/* <img src={ImageOne} /> */}</div>
          <div>{/* <img src={ImageTwo} /> */}</div>
          <div>{/* <img src={ImageThree} /> */}</div>

          <div>{/* <img src={Imagefour} /> */}</div>

          <div>
            {/* <svg viewbox="0 0 16000 16000">
            <circle class="b" cx="8000" cy="8000" r="5000"></circle>
          </svg> */}
          </div>
        </div>
      </div>

      {/* section three */}
      <div className="carousel-content">
        <p className="carousel-content-pera">
          ‘Water crisis’ has become a house-hold term these days with more and
          more cities on the brink of a water doomsday. There are only two ways
          to make clean water available: one is to conserve it, and the other is
          to reuse it. The latter is where we step in.
        </p>
      </div>
      {/* section four */}
      <div className="rewater-regenrating-container">
        <div>
          <p className="rewater_heading">
            <span>REWATER </span> <span>REGENRATING WATER</span>
          </p>
          {/* <hr class="el_hr" /> */}
        </div>
        <div className="content_img_con">
          <div className="inner-regenrating-container">
            <div className="icon-content">
              <img src={prefabricated} />
              <p className="rewater_pera">
                <span style={{ fontWeight: "650" }}>
                  Prefabricated waste treatment unit:
                </span>{" "}
                simple and quick underground installation.
              </p>
            </div>

            <div className="icon-content">
              <img src={automated} />

              <p className="rewater_pera">
                <span style={{ fontWeight: "650" }}>Fully automated:</span>
                self-functioning unit that requires no manual intervention.
              </p>
            </div>

            <div className="icon-content">
              <img src={HybridTechnology} />

              <p className="rewater_pera">
                <span style={{ fontWeight: "650" }}>
                  Uses hybrid technology:
                </span>
                produces minimum amount of foul gases.
                <br />
              </p>
            </div>

            <div className="icon-content">
              <img src={BlackWater} />

              <p className="rewater_pera">
                <span style={{ fontWeight: "650" }}>Recycles black water:</span>
                safe for non-potable use such as washing, flushing, cooling,
                horticulture, etc.
                <br />
              </p>
            </div>

            <div className="icon-content">
              <img src={SolarEnergy} />

              <p className="rewater_pera">
                <span style={{ fontWeight: "650" }}>Runs on solar energy:</span>
                no grid connection needed.
                <br />
              </p>
            </div>

            <div className="icon-content">
              <img src={SolarEnergy} />

              <p className="rewater_pera">
                <span style={{ fontWeight: "650" }}>
                  Zero operational costs.
                </span>
                <br />
              </p>
            </div>
          </div>
          <div className="vidImage" onClick={my_func}>
            <video
              controls
              id="player"
              poster={Shipra_River}
              className="rivar-imag"
            >
              <source src={Rewater_video} type="video/mp4" />
            </video>
            <img id="play_btn" src={PLAY_icon} className="play_ic" />
          </div>
          {/* part two */}
          <div className="vid-Image" onClick={my_func}>
            <video
              controls
              id="player"
              poster={Shipra_River}
              className="rivar_Image"
            >
              <source src={Rewater_video} type="video/mp4" />
            </video>
            <img id="play_btn" src={PLAY_icon} className="play_ic" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rewater;
