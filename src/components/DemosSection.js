import React from 'react';
import Footer from './Footer'
import '../App.css';
import './DemosSection.css';


function DemosSection() {
    return (
    <div className='demos-container'>
        <h1>Demos</h1>
        
        <div className='footer-wrap'>
            <Footer/>
        </div>
    </div>
    );
}

export default DemosSection;