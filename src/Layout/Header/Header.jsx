import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="left-header">
        <p className="logo">Zed</p>
        <nav className={`${open ? "open" : ""}`}>
          <a href="..." className="nav-links">
            Racing
          </a>
          <a href="..." className="nav-links">
            Breeding
          </a>
          <a href="..." className="nav-links">
            MarketPlace
          </a>
          <a href="..." className="nav-links">
            Learn
          </a>
          <a href="..." className="nav-links">
            Whats New
          </a>
        </nav>
      </div>

      <div className="right-header">
        <p>Want to Play ZED?</p>
        <button>START</button>
      </div>
      <i
        onClick={() => {
          document.querySelector("body").classList.toggle("overflow");
          setOpen((prev) => !prev);
        }}
        className={`fas ${open ? "fa-times" : "fa-bars"} mobile`}
      ></i>
    </div>
  );
}

export default Header;
