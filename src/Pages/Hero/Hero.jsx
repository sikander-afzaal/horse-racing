import React from "react";
import "./Hero.css";
import video from "../../Assets/Video.mp4";
import poster from "../../Assets/Thumbnail.png";
function Hero() {
  return (
    <div className="flexbox">
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
        autoPlay={true}
        loop
        muted
        poster={poster}
        style={{ maxWidth: "90%", width: "100%", margin: "auto" }}
        controls={true}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
