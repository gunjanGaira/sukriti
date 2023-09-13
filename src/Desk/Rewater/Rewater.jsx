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
import rewaterInsures1 from "../Rewater/rewater_insures1.svg";
import rewaterInsures2 from "../Rewater/rewater_insures2.png";
import rewaterInsures3 from "../Rewater/rewater_insures3.png";
import rewaterInsures4 from "../Rewater/rewater_insures4.png";
import rewaterInsures5 from "../Rewater/rewater_insures5.png";
import rewaterInsures6 from "../Rewater/rewater_insures6.png";
import rewaterInsures7 from "../Rewater/rewater_insures7.png";
import rewaterInsures8 from "../Rewater/rewater_insures8.png";
import rewaterInsures9 from "../Rewater/rewater_insures9.png";
import rewaterInsures10 from "../Rewater/rewater_insures10.png";
import rewaterInsures11 from "../Rewater/rewater_insures11.png";
import rewaterInsures12 from "../Rewater/rewater_insures12.png";
import rewaterInsures13 from "../Rewater/rewater_insures13.png";
import rewaterInsures14 from "../Rewater/rewater_insures14.png";
import rewaterInsures15 from "../Rewater/rewater_insures15.png";
import rewaterInsures16 from "../Rewater/rewater_insures16.png";
import rewaterInsures17 from "../Rewater/rewater_insures17.png";
import rewaterInsures18 from "../Rewater/rewater_insures18.png";
import rewaterInsures19 from "../Rewater/rewater_insures19.png";
import rewaterInsures20 from "../Rewater/rewater_insures20.png";
import rewaterInsures21 from "../Rewater/rewater_insures21.png";
import rewaterInsures22 from "../Rewater/rewater_insures22.png";
import rewaterInsures23 from "../Rewater/rewater_insures23.png";
import rewaterInsures24 from "../Rewater/rewater_insures24.png";
import rewaterInsures25 from "../Rewater/rewater_insures25.svg";
import rewaterInsures26 from "../Rewater/rewater_insures26.svg";
import bhowaliTownImage from "../Rewater/image_1.png";
import TiliyarLakeImage from "../Rewater/image _2.png";
import RadhakundImage from "../Rewater/image_3.png";
const Rewater = () => {
  const my_func = () => {
    if (document.getElementById("player").paused) {
      document.getElementById("player").play()("#play_btn").hide();
    } else {
      document.getElementById("player").pause()("#play_btn").show();
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
      {/* section five */}
      <div style={{ marginTop: "10%", width: "100%" }}>
        {/* <div><img src={ rewaterInsures1} /></div> */}
        <div className="insures">
          <div>
            <img src={rewaterInsures2} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures3} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures4} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures5} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures6} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures7} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures8} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures9} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures10} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures11} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures12} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures13} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures14} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures15} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures16} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures17} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures18} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures19} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures20} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures21} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures22} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures23} className="insures-img" />
          </div>
          <div>
            <img src={rewaterInsures24} className="insures-img" />
          </div>

          <div>
            <img src={rewaterInsures25} className="insures-arrow" />
          </div>
          <div>
            <img src={rewaterInsures26} className="insures-arrow" />
          </div>
        </div>
      </div>
      {/* section six */}
      <div>
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "#00bfa5" }}
        >
          <div className="h-Of_re">
            <p className="h-of-insures">REWATER ENSURES:</p>
          </div>
          <div>
            <div className="p-Of_re">
              <div>
                <p className="con-of-insures">BOD 10mg/l</p>
              </div>
              <div>
                <p className="con-of-insures">COD 100mg/l</p>
              </div>
              <div>
                <p className="con-of-insures">TSS 20mg/l</p>
              </div>
              <div>
                <p className="con-of-insures">Coliforms 10MPN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section seven */}
      {/* <div> */}
        <div className="rejuvenation">
          <div>
            <div>
              <p className="head-water-bodies">Rejuvenation of water bodies</p>
              <hr class="rewater-hr" />
            </div>
            <div className="pera-water-bodies">
              <p>
                We are working to clean polluted rivers and lakes, and to make
                them conducive to aquatic flora and fauna. This will not only
                help the ecosystem, but also help tourism and livelihood of the
                people supported by these water bodies. We aim for long term and
                permanent solutions with this effective methodology:
              </p>
            </div>
          </div>
         
            <div className="water-bodies">
              <div>
                <p className="water-bodies1" >
                  <span style={{fontWeight:"650"}}>Baseline survey:</span>
                  <span>finding parameters to define<br/> the actual problems.</span>
                </p>
              </div>
              <div>
                <p className="water-bodies1">
                  <span  style={{fontWeight:"650"}}>Custom proposal:</span>
                  <span>solutions are designed <br/>based on each survey.</span>
                </p>
              </div>
              <div>
                <p className="water-bodies1">
                  <span  style={{fontWeight:"650"}}>Sustainable:</span>
                  <span>
                    {" "}
                    automated , energy efficient, <br/>and low cost solutions.
                  </span>
                </p>
               </div>
               </div>
        </div>
      {/* section eight */}

      <div className="Bhowali-town">
        <div >
          <p className="h-Bhowali-town">Cleaning the waste stream in Bhowali town, Nainital:</p>
          <p className="p-Bhowali-town">
            Bhowali, a small town in Naintal district, does not have a sewer
            infrastructure. The result being, sewage is <br/>discharged directly into
            the nearby Shipra river which ultimately ends up in River Ganga.
          </p>
          <p className="p-Bhowali-town">
            We are designing a small, innovative waste treatment setup on the
            junction where the waste stream enters<br/> Shipra. Low on maintenance
            and low on energy consumption, this treatment plant would reduce the
            <br/> oxygen demand of waste water to less then 10 mg/L,
            reducing nitrogen and phosphorus concentrations and <br/>eliminating
            pathogens, thereby making sewage reusable.
          </p>
        </div>
        <img src={bhowaliTownImage} className="bhowaliImg"/>
      </div>
      {/* section nine */}
      <div className="tiliyarLake">
        <div>
         
          <img src={TiliyarLakeImage} className="tiliyarImage"/>
        </div>
        <div>
          <p className="h-Tiliyar-lake">Rejuvenation of Tiliyar lake in Rohtak, Haryana:</p>
          <p className="p-Tiliyar-lake">
            This lake is highly eutrophic meaning it has a lot of algal growth
            on its surface. The algal growth has reduced <br/> the aquatic flora and
            fauna and has also affected tourism.
          </p>
          <p className="p-Tiliyar-lake">
            Working with Directorate of Coldwater Fisheries Research, Bhimtal we
            are working on the revival of Tilyar lake. <br/> Aerators would be
            installed throughout the lake to increase the dissolved oxygen
            concentrations and algae <br/> eating fishes would be bred in the water.
            All these interventions would decrease algal growth, making water <br/>
            clean and transparent and increasing the aesthetics of the area.
          </p>
        </div>
      </div>
      {/* section ten */}
      <div className="Radha-kund">
        <div>
          <p className="h-radha-kund">Cleaning of Shyam Kund and Radha Kund in Goverdhan, Mathura</p>
          <p className="p-radha-kund">
            Radha Kund is a famous pilgrim place near Mathura, considered most
            supreme of all the religious places for <br/> Vaishnav Hindus. Millions of
            devotees travel to Radha Kund and nearby Shyam Kund for holy baths.
          </p>
          <p className="p-radha-kund">
            The stagnant water of the kund is highly contaminated with an
            enormous BOD, COD and Total Nitrogen levels.<br/> We are working on
            cleaning of the kund through a low cost, low energy waste treatment
            setup, on the banks of <br/> the kund, that can render the water
            colorless, odour free and without any pathogens making it hygienic,
            healthy <br/> and safe for devotees.
          </p>
        </div>
        
        <img src={RadhakundImage} className="radhakundImg" />
      </div>
    </div>
  );
};

export default Rewater;
