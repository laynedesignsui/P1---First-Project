import React from "react"
import "../index.css"
import logo_photo from "../assets/FES.svg"

function Footer() {
  return (
    <div id="footer">
      <footer>
        <img src={logo_photo} className="footer__logo" />
        <div className="footer__links">
          <a href="#about" className="footer__link">
            About
          </a>
          <a href="#discord" className="footer__link">
            Discord
          </a>
          <a href="#contact" className="footer__link">
            Contact
          </a>
        </div>
        <p>Copyright Frontend Simplified</p>
      </footer>
    </div>
  )
}

export default Footer
