import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="left-header">
        <img src={logo} className="logo" alt="" />
        <nav className={`${open ? "open" : ""}`}>
          <a
            onClick={() => {
              document.querySelector("body").classList.toggle("overflow");
              document.querySelector("#team").classList.toggle("index");
              setOpen((prev) => !prev);
            }}
            href="#hero"
            className="nav-links"
          >
            Home
          </a>
          <a
            onClick={() => {
              document.querySelector("body").classList.toggle("overflow");
              document.querySelector("#team").classList.toggle("index");
              setOpen((prev) => !prev);
            }}
            href="#team"
            className="nav-links"
          >
            Team
          </a>
          <a
            onClick={() => {
              document.querySelector("body").classList.toggle("overflow");
              document.querySelector("#team").classList.toggle("index");
              setOpen((prev) => !prev);
            }}
            href="#roadmap"
            className="nav-links"
          >
            Roadmap
          </a>
          <button className="connect">CONNECT</button>
        </nav>
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
