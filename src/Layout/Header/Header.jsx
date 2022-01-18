import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="left-header">
        <p className="logo">Zed</p>
        <nav className={`${open ? "open" : ""}`}>
          <a href="#hero" className="nav-links">
            Home
          </a>
          <a href="#team" className="nav-links">
            Team
          </a>
          <a href="#roadmap" className="nav-links">
            Roadmap
          </a>
          <button className="connect">CONNECT</button>
        </nav>
      </div>

      <div className="right-header">
        <p>Want to Play ZED?</p>
        <button>START</button>
      </div>
      <i
        onClick={() => {
          document.querySelector("body").classList.toggle("overflow");
          document.querySelector("#team").classList.toggle("index");
          setOpen((prev) => !prev);
        }}
        className={`fas ${open ? "fa-times" : "fa-bars"} mobile`}
      ></i>
    </div>
  );
}

export default Header;
