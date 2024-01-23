import React from "react";
import "../App.css";
import "./ProfileSection.css";
import { Button } from "./Button";

function ProfileSection() {
    return (
        <div className='profile-container'>
            <h1>Sean Hershey</h1>
            <h2>Software Developer</h2>
            <div className="profile-btns">
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
    )
}

export default ProfileSection;