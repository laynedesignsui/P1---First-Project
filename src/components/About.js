import React from "react"
import "../index.css"
import about_photo from "../assets/about.jpg"

function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <div className="row">
        <div className="section__description">
          <div className="section__description--wrapper">
            <p className="section__description--para">
              A paragraph is a short collection of well-organized sentences
              which revolve around a single theme and is coherent. A good
              paragraph expresses everything it has to say briefly. To write a
              good paragraph you need an Introduction, a Body, and a Conclusion.
            </p>
            <p className="section__description--para">
              A paragraph is a short collection of well-organized sentences
              which revolve around a single theme and is coherent. A good
              paragraph expresses everything it has to say briefly. To write a
              good paragraph you need an Introduction, a Body, and a Conclusion.
            </p>
          </div>
          <figure className="about__img--wrapper">
            <img src={about_photo} />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default About
