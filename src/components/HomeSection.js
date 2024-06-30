import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HomeSection.css";


function HomeSection() {
    return (
    <div className='home-container'>
        <h1>Sean Hershey</h1>
        <h2>Software Developer</h2>
        <div className="home-btns">
            <Button
                className='btns'
                buttonStyle='btn--outline--highlight'
                buttonSize='btn--large'
                link='/projects'
            > Projects </Button>
            <Button
                className='btns'
                buttonSize='btn--large'
                link='/gallery'
            > Gallery </Button>
        </div>
        <div className="home-bullets-wrap">
            <div className="home-bullets">
                <p> 🌎 I'm building web apps that help people</p>
                <p> 🐎 I went to CalPoly</p>
                <p> 👨‍💻 for a Bachelor of Science in Computer Science</p>
                <p> 🌺 I'm from Hawaii and live in California</p>
                <p> 📧 Contact me at sean.p.hershey@gmail.com</p>
            </div>
        </div>
    </div>
    );
}

export default HomeSection;