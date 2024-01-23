import React from "react";
import "../App.css";
import "./ProjectsSection.css";
import Posts from "./Posts/Posts"

function ProjectsSection() {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <Posts />
        </div>
    )
}

export default ProjectsSection;