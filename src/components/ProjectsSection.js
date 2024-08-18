import React from 'react';
import Posts from './Posts/Posts'
import Footer from './Footer'
import '../App.css';
import './ProjectsSection.css';


function ProjectsSection() {
    return (
    <div className='projects-container'>
        <h1>Projects</h1>
        <Posts/>
        <Footer/>
    </div>
    );
}

export default ProjectsSection;