import React from 'react'
import "./Careers.css";
import CareerBanner from "../Careers/career-banner.jpg";

const Careers = () => {
  return (
    <div>
        {/* section one */}
        <div className="career-container">
        <div
          className="img-career-container"
          style={{
            backgroundImage: `url(${CareerBanner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "42%",
            position: "relative",
            width: "100%",
          }}
        >
          <p id="bannerTextcareer">
            {" "}
            Join our mission to spread
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
    </div>
  )
}

export default Careers