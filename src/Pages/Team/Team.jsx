import React from "react";
import "./Team.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import team from "../../Assets/team.png";
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
            <img src={team} alt="" />
            <h2>MetaSami</h2>
            <p style={{ color: "#C545DF" }}>PRESIDENT & CO-FOUNDER</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box">
            <img src={team} alt="" />
            <h2>MetaWin</h2>
            <p style={{ color: "#C545DF" }}>CEO & CO-FOUNDER</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box">
            <img src={team} alt="" />
            <h2>MetaJun</h2>
            <p style={{ color: "#C545DF" }}>CMO & CO-FOUNDER</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box">
            <img src={team} alt="" />
            <h2>MetaJoseph</h2>
            <p style={{ color: "#C545DF" }}>HEAD OF STRATEGIC PARTNERSHIP</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box">
            <img src={team} alt="" />
            <h2>MetaJohn</h2>
            <p style={{ color: "#C545DF" }}>HEAD OF COMMUNITY MANAGEMENT</p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Team;
