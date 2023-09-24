import React from "react";
import "./Rewater.css";
import RewaterImage from "../Rewater/rewater-banner.png";
import prefabricated from "../Rewater/Prefabricated-waste-icon.svg";
import automated from "../Rewater/Fully-automated-icon.svg";
import HybridTechnology from "../Rewater/hybrid-technology-icon.svg";
import BlackWater from "../Rewater/black-water.svg";
import SolarEnergy from "../Rewater/solar-energy.svg";
import Shipra_River from "../Rewater/10.JPG";
import Rewater_video from "../Rewater/rewater_vid.mp4";
import PLAY_icon from "../Rewater/play.png";
import bhowaliTownImage from "../Rewater/image_1.png";
import TiliyarLakeImage from "../Rewater/image _2.png";
import RadhakundImage from "../Rewater/image (2).png";
import Footer from "../Footer/Footer";
import Rewater_carousel from "../Carousel/Rewater_carousel";
import Rewater_sec_carousel from "../Carousel/Rewater_sec_carousel";
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
        <div >
         <Rewater_carousel/>
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
        <div >
       <Rewater_sec_carousel/>
        </div>
      </div>
      {/* section six */}
      <div className="re-ensure">
       
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
     <div className="ei-con">
      <div className="Bhowali-town">
        <div >
          <p className="h-Bhowali-town">Cleaning the waste stream in Bhowali town, Nainital:</p>
          <p className="p-Bhowali-town">
            Bhowali, a small town in Naintal district, does not have a sewer
            infrastructure. The result being, sewage is <br/>discharged directly into
            the nearby Shipra river which ultimately ends up in River Ganga.
          </p>
          <p className="p2-Bhowali-town">
            We are designing a small, innovative waste treatment setup on the
            junction where the waste stream enters<br/>
            Shipra. Low on maintenance
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
          <p className="p2-Tiliyar-lake">
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
          <p className="p2-radha-kund">
            The stagnant water of the kund is highly contaminated with an
            enormous BOD, COD and Total Nitrogen levels.<br/> We are working on
            cleaning of the kund through a low cost, low energy waste treatment
            setup, on the banks of <br/> the kund, that can render the water
            colorless, odour free and without any pathogens making it hygienic,
            healthy <br/> and safe for devotees.
          </p>
        </div>
        
        <img
         src={RadhakundImage} 
         className="radhakundImg" />
      </div>
      </div>
      {/* section eleven */}
      <div >
        <Footer />
      
      </div>
    </div>
  );
};

export default Rewater;
