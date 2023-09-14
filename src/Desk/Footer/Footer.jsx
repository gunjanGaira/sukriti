import React from 'react'
import "./Footer.css"
import BackgroundContactUs from "../Home/contact-us-background.JPG";
import secBackOfConUs from "../Home/back.png";
import IconOfLinkedin from "../Home/linkedin-icon.png";
import IconOfFacebook from "../Home/facebook-icon.png";
import IconOfYouTube from "../Home/youtube-icon.png";
import LogoOfSukriti from "../Home/Sukriti-Logo.svg";
import newImg from "../Home/new-img.png";

const Footer = () => {
  return (
    <div>
         {/*section one */}
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

      {/* sectiontwo */}
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
  )
}

export default Footer