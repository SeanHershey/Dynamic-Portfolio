import React from "react";
import "../App.css";
import "./ContactSection.css";


function ContactSection() {
    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <a href = "mailto:sean.p.hershey@gmail.com"> <p>sean.p.hershey@gmail.com</p></a>
            <br/>
            <a href = "https://github.com/SeanHershey"> <p>github.com/SeanHershey</p></a>
            <br/>
            <a href = "https://www.linkedin.com/in/SeanHershey/"> <p>linkedin.com/in/SeanHershey</p></a>
        </div>
    )
}

export default ContactSection;