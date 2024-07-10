import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Glowbe } from './Glowbe'
import './HomeSection.css';

function HomeSection() {
    return (
    <div className='home-container'>
        <h1>Sean Hershey</h1>
        <h2>Software Developer</h2>
        <div className='home-btns'>
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
        <div className='home-bullets'>
            <p> 🌎 I'm building web apps that help people</p>
            <p> 🐎 I went to CalPoly</p>
            <p> 👨‍💻 for a Bachelor of Science in Computer Science</p>
            <p> 🌺 I'm from Hawaii and live in California</p>
            <p> 📧 Contact me at sean.p.hershey@gmail.com</p>
        </div>
        <div className='canvas-container'>
            <div className='canvas'>
                <Glowbe />
            </div>
        </div>
        <Link to='/projects#fEMR%20Dynamic%20Translation'>
            <div className='showcase'>
                <img className='showcase-img' src='https://i.ibb.co/RPWCCw3/femr.gif' alt='femr'></img>
            </div>
        </Link>
        <iframe title='jitterbug' className='itch-frame' src='https://itch.io/embed/2769811?dark=true'>
            <a href='https://seanhershey.itch.io/jitterbug'>Jitterbug</a>
        </iframe>
    </div>
    );
}

export default HomeSection;