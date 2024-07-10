import React from 'react';
import { Link } from 'react-router-dom'
import './Photo.css';


const Photo = ({ photo: { title, link, imgUrl}, index }) => {
    return (
    <div className='photo-container'>
        <Link to={link}>
            <h2 className='heading'>{title}</h2>
            <img className='gallery_image' src={imgUrl} alt={title} />
        </Link>
    </div>
    );
};

export default Photo;