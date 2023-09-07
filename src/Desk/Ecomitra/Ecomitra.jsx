import React from "react";
import "./Ecomitra.css";
import EcoBanner from "../Ecomitra/eco-banner.png";
import SpinIcon from "../Ecomitra/spin.svg";
import Group1 from "../Ecomitra/group1.jpg";
import Group2 from "../Ecomitra/group2.jpg";
import Group3 from "../Ecomitra/group3.jpg";
import Group4 from "../Ecomitra/group4.jpg";

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
      <div>
        <div>
          <p>
            Today, public toilets in India suffer from three major challenges:
          </p>
        </div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <img src="./assets/home/rectangle-14-copy-5@3x.png" />
                </div>
                <div>
                  <p>Constant maintenance</p>
                </div>
              </div>
              <div>
                <div>
                  <img src="./assets/home/rectangle-14-copy-3@3x.png" />
                </div>
                <div>
                  <p>
                    Uninterrupted water supply to meet high water requirements
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    class="image small-icon"
                    src="./assets/home/rectangle-14-copy-6@3x.png"
                  />
                </div>
                <div>
                  <p>Inadequate waste disposal mechanisms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <div>
                <p>
                  A combination of these three factors forces the general
                  public, especially women to use open spaces for urination and
                  defecation. This not only compromises their dignity and
                  safety, but also their health, causing various diseases,
                  chronic illness, malnutrition, and on a much larger scale; the
                  loss of human resource!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecomitra;
