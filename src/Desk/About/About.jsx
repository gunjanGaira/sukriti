import React from "react";
import "./About.css";
import image from "../About/about-banner.png";
import background from "../About/fi.img.png";
import advisor1 from "../About/Dr.pramodAgarwal.png";
import advisor2 from "../About/Dr.PradeepKumar.jpg";
import advisor3 from "../About/Dr.devendra.png";
import advisor4 from "../About/Ms. AriellaBernstein.png";
import advisor5 from "../About/Mr..Nadav.png";
import advisor6 from "../About/Mr.NishithAcharya.png";
import BackgroundContactUs from "../Home/contact-us-background.JPG";
import secBackOfConUs from "../Home/back.png";
import IconOfLinkedin from "../Home/linkedin-icon.png";
import IconOfFacebook from "../Home/facebook-icon.png";
import IconOfYouTube from "../Home/youtube-icon.png";
import LogoOfSukriti from "../Home/Sukriti-Logo.svg";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      {/* section one */}
      <div className="headerContent">
        <div
          className="imgContent"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "45%",
            position: "relative",
            width: "100%",
          }}
        >
          <p className="TextofBanner">
            {" "}
            Spreading a million{" "}
            <span
              style={{
                color: "#00bfa5",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              }}
            >
              smiles
            </span>
          </p>
        </div>
      </div>
      {/* secttion two */}
      <div className="visiov-container">
        <p className="heading-of-vision">OUR VISION</p>
        {/* <hr /> */}
        <p className="p-Of-Vision">
          Sukriti is a Sanskrit word that translates to ‘good creations’.
          Staying true to our name, we want to spread a <br />
          million smiles by providing sustainable engineering solutions for some
          of the major issues faced by our society.
        </p>
      </div>

      {/* section three */}
      <div className="story">
        <div>
          <img src={background} className="right-side" />
        </div>

        <div className="story-container">
          <p className="pera-H">OUR STORY</p>
          <hr />
          <p className="pera-C">
            India has shown strong economic growth in the past few decades, with
            accelerated growth across agriculture, industry, and services.
            However, this growth has come at a cost – a deteriorating
            environment and an increasing scarcity of resources. The 2018
            Environmental Performance Index, which ranked 180 countries on
            environmental health and ecosystem vitality, saw India at 177th
            position. Over the past decade, the number of deaths due to
            particulate matter pollution have risen to 1.6 million. Poor
            sanitation facilities cost India $54 billion every year. And 80% of
            untreated sewage in India flows directly to its rivers. Yet, amidst
            all this, India also presents a massive opportunity in disguise.
            India’s rural-to-urban transition is turning out to be one of the
            fastest in human history, and how this transition takes place could
            change the course of humanity’s future. It follows then, that one of
            the greatest challenges facing India is decoupling economic growth
            from environmental degradation. And the key to solving this
            challenge lies in smart engineering solutions.
          </p>
          <p className="pera-C2">
            When we graduated from IIT Roorkee, we realized that
            post-graduation, a lot of students ended up working in
            non-engineering sectors. To be honest, we could have been tempted to
            do the same. But when we saw the magnitude of the challenge before
            us, and the need the country has for ambitious engineers who want to
            ‘change the world’ in every sense of the phrase, we knew what we
            wanted. We wanted to bring together a team of highly passionate
            engineers who would work on solving some of the most daunting
            developmental challenges in the country. Thus, Sukriti was born.
          </p>

          <p className="pera-C3">
            We started our work in the Water, Sanitation, and Hygiene (WASH)
            sector by developing eco-toilets to transform India’s sanitation
            scenario. Now, we are venturing into treatment of water in the
            country’s lakes and rivers.
          </p>
        </div>
      </div>

      {/* section four */}
      <div className="container-of-advisors">
        <div className="H-P-container">
          <p
            style={{
              fontSize: "20px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontWeight:"700"
            }}
          >
            OUR ADVISORS
          </p>
          {/* <hr /> */}
          <p>
            For a startup to become a Unicorn, it needs lot of right
            ingredients. More than anything else, it needs group of experts,
            carrying multitude
            <br /> of experience, willing to work as tirelessly as the team
            itself. We are lucky to have ours!
          </p>
        </div>

        <div className="adv-description">
          <div className="row-first">
            <div >
              <div className="Advisor1">
                <img src={advisor1} className="Advisor1" style={{marginLeft:"50%"}} />
              </div>

              <div>
                <p className="profile-pera">Dr. Pramod Agarwal</p>
                <p className="content-pera">
                  Prof Department of Electrical Engineering,
                  <br />
                  IIT Roorkee
                </p>
              </div>
            </div>

            <div>
              <div className="Advisor2">
                <img src={advisor2} className="Advisor1" style={{marginLeft:"20%"}}/>
              </div>

              <div>
                <p className="profile-pera">Dr. Pradeep Kumar</p>
                <p className="content-pera">
                  Prof Department of Environment <br />
                  Engineering IIT Roorkee
                </p>
              </div>
            </div>

            <div>
              <div className="Advisor3">
                <img src={advisor3} className="Advisor1" />
              </div>

              <div>
                <p className="profile-pera">Dr. Devendra Saroj</p>
                <p className="content-pera">
                  Senior Lecturer,
                  <br />
                  University of Surrey, UK
                </p>
              </div>
            </div>
          </div>
          <div className="row-second">
            <div>
              <div className="Advisor4">
                <img src={advisor4} className="Advisor1" style={{marginLeft:"20%"}}/>
              </div>

              <div>
                <p className="profile-pera">Ms. Ariella Bernstein</p>
                <p className="content-pera">
                  Chief of Staff at Jerusalem Foundation
                </p>
              </div>
            </div>

            <div>
              <div className="Advisor5">
                <img src={advisor5} className="Advisor1"  style={{marginLeft:"30%"}}/>
              </div>
              <div>
                <p className="profile-pera">Mr. Nadav Avidan</p>
                <p className="content-pera" >
                  Most prominent Branding, Story Telling
                  <br />
                  and PR voices in Israel
                </p>
              </div>
            </div>

            <div>
              <div className="Advisor6">
                <img src={advisor6} className="Advisor1" style={{marginLeft:"25%"}}/>
              </div>

              <div>
                <p className="profile-pera" >Mr. Nishith Acharya</p>
                <p className="content-pera">
                  Ex Director Innovation and Entrepreneurship,
                  <br />
                  US Department of Commerce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section five */}
       <div>
        <Footer/>
       </div>
    


    </div>
  );
};

export default About;
