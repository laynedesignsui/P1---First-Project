import React from "react"
import "../index.css"
import logo_photo from "../assets/FES.svg"

function NavBar() {
  return (
    <div className="section">
      <nav>
        <img src={logo_photo} className="logo" />
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Discord</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
