import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiItemCarousel = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
  };
  const autoPlaySpeed = 3000; // 3 seconds per slide

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={autoPlaySpeed}
      infinite={true}
    >

      <div style={{}}>
        <img
          style={{ width: "250px", margin: "0px 20px" }}
          src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <img
          style={{ width: "250px", margin: "0px 20px" }}
          src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <img
          style={{ width: "250px", margin: "0px 20px" }}
          src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <img
          style={{ width: "250px", margin: "0px 20px" }}
          src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <img
          style={{ width: "250px", margin: "0px 20px" }}
          src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <img
          style={{ width: "250px", margin: "0px 20px" }}
          src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <img
          style={{ width: "250px", margin: "0px 20px" }}
          src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default MultiItemCarousel;
