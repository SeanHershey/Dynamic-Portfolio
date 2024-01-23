import React from "react";
import "../App.css";
import "./GallerySection.css";
import Photos from "./Photos/Photos"


function GallerySection() {
    return (
        <div className='gallery-container'>
            <h1>Gallery</h1>
            <Photos />
        </div>
    )
}

export default GallerySection;