import React from 'react';
import Posts from './Posts/Posts'
import '../App.css';
import './ProjectsSection.css';


function ProjectsSection() {
    return (
    <div className='projects-container'>
        <h1>Projects</h1>
        <Posts/>
    </div>
    );
}

export default ProjectsSection;