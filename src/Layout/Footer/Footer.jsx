import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <a
          href="https://discord.gg/KjGqrcAGMg"
          target={"_blank"}
          className="footer-link"
        >
          <i className="fab fa-discord"></i>
        </a>
        <a
          href="https://t.me/MetaHorseOfficialTelegram"
          target={"_blank"}
          className="footer-link"
        >
          <i className="fab fa-telegram-plane"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
