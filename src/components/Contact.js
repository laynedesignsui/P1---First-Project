import React from 'react'
import "../index.css"

function Contact() {
    return(
        <div id='contact'>
            <h2>Contact</h2>
            <form action=''>
                <label>Email</label>
                <input type="email" placeholder="emailexample@email.com" />
                <label>Message</label>
                <textarea type="text" placeholder="Hello Layne! I would like to tell you..." />
                <button>Contact Us!</button>
            </form>
        </div>
    )
}

export default Contact