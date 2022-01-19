import React from "react";
import "./Hero.css";
import video from "../../Assets/Video.mp4";
function Hero() {
  return (
    <>
      <div id="hero" className="hero">
        {/* <div className="box-hero">
        <h1>OWN. RACE. EARN.</h1>
        <p>
          The future of digital racehorse ownership is here. Race your way to
          the top and build your legacy today
        </p>
        <button className="connect hero-btn">START</button>
      </div> */}
      </div>
      <video
        style={{ maxWidth: "100%", width: "100%" }}
        autoPlay={true}
        controls={true}
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default Hero;
