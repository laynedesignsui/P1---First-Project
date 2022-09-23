import React from "react"
import "../index.css"
import laptop_photo from "../assets/laptop.png"

function Header() {
  return (
    <div className="section">
      <header>
        <div className="row">
          <div className="home__description">
            <h1>Best place to learn frontend</h1>
            <p className="subheader">
              Go from being an absolute beginner to a pro with a simplified process
            </p>
            <button className="home__description--button">Start Now</button>
          </div>
          <figure>
            <img src={laptop_photo} alt="Home Page Image" className="header__img"/>
          </figure>
        </div>
      </header>
    </div>
  )
}

export default Header
