import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Photo.css';


const Photo = ({ photo: { title, link, imgUrl}, index }) => {
    return (
    <div className='photo-container'>
        <HashLink to={link}>
            <h2 className='heading'>{title}</h2>
            <img className='gallery_image' src={imgUrl} alt={title} />
        </HashLink>
    </div>
    );
};

export default Photo;