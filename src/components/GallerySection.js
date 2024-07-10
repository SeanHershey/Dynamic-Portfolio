import React from 'react';
import Photos from './Photos/Photos'
import '../App.css';
import './GallerySection.css';


function GallerySection() {
    return (
    <div className='gallery-container'>
        <h1>Gallery</h1>
        <Photos/>
    </div>
    );
}

export default GallerySection;