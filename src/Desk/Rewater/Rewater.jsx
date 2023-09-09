import React from "react";
import "./Rewater.css";
import RewaterImage from "../Rewater/rewater-banner.png";

const Rewater = () => {
  return (
    <div>
      {/* section one */}
      <div className=".rewater_banner">
        <div
          className="imgContent"
          style={{
            backgroundImage: `url(${RewaterImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "43%",
            position: "relative",
            width: "100%",
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
        <div 
         style={{textAlign:"center"}}
         >
          <p className="pera-of-rcyl">WHY RECYCLE WATER ?</p>
        </div>
        <div className="carousel_images">
        <div>
          <img src="assets/ngo/spin.svg" />
        </div>

        <div>
          <img src="assets/ngo/group-26@3x.jpg" />
        </div>
        <div>
          <img src="assets/ngo/group-26-copy-3@2x.jpg" />
        </div>
        <div>
          <img src="assets/ngo/group-29@3x.jpg" />
        </div>

        <div>
          <img src="assets/ngo/group-26-copy-2@3x.jpg" />
        </div>

        <div>
          <svg viewbox="0 0 16000 16000">
            <circle class="b" cx="8000" cy="8000" r="5000"></circle>
          </svg>
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
    </div>
  );
};

export default Rewater;
