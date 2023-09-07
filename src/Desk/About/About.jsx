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
    
    {/* section five  */}
     {/*section seven */}
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

export default About;
