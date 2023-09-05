import React from "react";
import "./About.css";
import image from "../About/about-banner.png";
import background from '../About/fi.img.png';
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
        <div className="right-side">
          <img src={background} style={{marginLeft:"20%"}}/>
        </div>

          <div className="story-container">
             <p >OUR STORY</p>
              <hr />
              <p>
                India has shown strong economic growth in the past few decades,
                with accelerated growth across agriculture, industry, and
                services. However, this growth has come at a cost – a
                deteriorating environment and an increasing scarcity of
                resources. The 2018 Environmental Performance Index, which
                ranked 180 countries on environmental health and ecosystem
                vitality, saw India at 177th position. Over the past decade, the
                number of deaths due to particulate matter pollution have risen
                to 1.6 million. Poor sanitation facilities cost India $54
                billion every year. And 80% of untreated sewage in India flows
                directly to its rivers. Yet, amidst all this, India also
                presents a massive opportunity in disguise. India’s
                rural-to-urban transition is turning out to be one of the
                fastest in human history, and how this transition takes place
                could change the course of humanity’s future. It follows then,
                that one of the greatest challenges facing India is decoupling
                economic growth from environmental degradation. And the key to
                solving this challenge lies in smart engineering solutions.
              </p>
              <p>
                When we graduated from IIT Roorkee, we realized that
                post-graduation, a lot of students ended up working in
                non-engineering sectors. To be honest, we could have been
                tempted to do the same. But when we saw the magnitude of the
                challenge before us, and the need the country has for ambitious
                engineers who want to ‘change the world’ in every sense of the
                phrase, we knew what we wanted. We wanted to bring together a
                team of highly passionate engineers who would work on solving
                some of the most daunting developmental challenges in the
                country. Thus, Sukriti was born.
              </p>

              <p>
                {" "}
                We started our work in the Water, Sanitation, and Hygiene (WASH)
                sector by developing eco-toilets to transform India’s sanitation
                scenario. Now, we are venturing into treatment of water in the
                country’s lakes and rivers.
              </p>
            </div>
          
        
      </div>


    </div>
  );
};

export default About;
