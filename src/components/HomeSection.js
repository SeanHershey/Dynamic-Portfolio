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
    </div>
    );
}

export default HomeSection;