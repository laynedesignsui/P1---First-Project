import React from "react"
import "../index.css"
import discord_photo from "../assets/discord.png"

function Discord() {
  return (
    <div id="discord">
      <h2>Discord</h2>
      <div className="row">
        <div className="section__description">
          <figure className="about__img--wrapper">
            <img src={discord_photo} alt="Discord" />
          </figure>
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
        </div>
      </div>
    </div>
  )
}

export default Discord
