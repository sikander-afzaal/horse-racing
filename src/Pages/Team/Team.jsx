import React from "react";
import "./Team.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
function Team() {
  return (
    <div id="team" className="team">
      <h1>Core Team</h1>
      <p>
        The team always plays an important role in the success of a project. As
        a team, we have been working with each other for more than 5 years, with
        everyone being highly experienced in their own expertise
      </p>
      <Splide
        options={{
          autoplay: "play",
          type: "loop",
          rewind: true,
          perPage: 3,
          height: "auto",
          gap: "0.5rem",
          width: "90%",
          arrows: false,
          focus: "center",
          perMove: 1,
          breakpoints: {
            1339: {
              width: "90%",
            },
            947: {
              width: "100%",
            },
            699: {
              perPage: 3,
            },
            592: {
              width: "100%",
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <div className="box">
            <img
              src="https://thetanarena.com/59fd9ce83ce66b6492f0.png"
              alt=""
            />
            <h2>Kahn Nehujm</h2>
            <p style={{ color: "#C545DF" }}>Solution Architect Advisor</p>
            <p>Over 7 years EXP on System Scaling</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box">
            <img
              src="https://thetanarena.com/59fd9ce83ce66b6492f0.png"
              alt=""
            />
            <h2>Kahn Nehujm</h2>
            <p style={{ color: "#C545DF" }}>Solution Architect Advisor</p>
            <p>Over 7 years EXP on System Scaling</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box">
            <img
              src="https://thetanarena.com/59fd9ce83ce66b6492f0.png"
              alt=""
            />
            <h2>Kahn Nehujm</h2>
            <p style={{ color: "#C545DF" }}>Solution Architect Advisor</p>
            <p>Over 7 years EXP on System Scaling</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box">
            <img
              src="https://thetanarena.com/59fd9ce83ce66b6492f0.png"
              alt=""
            />
            <h2>Kahn Nehujm</h2>
            <p style={{ color: "#C545DF" }}>Solution Architect Advisor</p>
            <p>Over 7 years EXP on System Scaling</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box">
            <img
              src="https://thetanarena.com/59fd9ce83ce66b6492f0.png"
              alt=""
            />
            <h2>Kahn Nehujm</h2>
            <p style={{ color: "#C545DF" }}>Solution Architect Advisor</p>
            <p>Over 7 years EXP on System Scaling</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box">
            <img
              src="https://thetanarena.com/59fd9ce83ce66b6492f0.png"
              alt=""
            />
            <h2>Kahn Nehujm</h2>
            <p style={{ color: "#C545DF" }}>Solution Architect Advisor</p>
            <p>Over 7 years EXP on System Scaling</p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Team;
