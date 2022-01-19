import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="box-hero">
        <h1>OWN. RACE. EARN.</h1>
        <p>
          The future of digital racehorse ownership is here. Race your way to
          the top and build your legacy today
        </p>
        <button className="connect hero-btn">START</button>
      </div>
    </div>
  );
}

export default Hero;
