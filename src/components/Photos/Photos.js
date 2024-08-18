import React from 'react';
import Photo from './Photo';
import './Photos.css';


const Photos = () => {
    const galleryPhotos = [
        {
        title: 'fEMR',
        link: '/projects#femr',
        imgUrl: 'https://lh3.googleusercontent.com/d/1tqut77BaV7eObpsiYZy1Q1Ft1xH3GrOY',
        },
        {
        title: 'Glowbe',
        link: '/projects#glowbe',
        imgUrl: 'https://lh3.googleusercontent.com/d/1_LJV6mu6bQnNFVQmKN8mBCZwKk3TWlHx',
        },
        {
        title: 'Structural Damage',
        link: '/projects#structural',
        imgUrl: 'https://lh3.googleusercontent.com/d/1O1APkihqOSfJ-7F1BO67iirUaxB34h9S',
        },
        {
        title: 'Cat and Mouse',
        link: '/projects#cat',
        imgUrl: 'https://lh3.googleusercontent.com/d/1Z9mRB-U-QZtKO-XiOlKbLzhMlVbB-fQI',
        },
        {
        title: 'Oazo',
        link: '/projects#oazo',
        imgUrl: 'https://lh3.googleusercontent.com/d/1n9UUQmAQ6mBzGP4txyn23VtyHUxLzLUb',
        },
        {
        title: 'Mandelbrot Set',
        link: '/projects#set',
        imgUrl: 'https://lh3.googleusercontent.com/d/1YXAspZrXWrGpI4GJ1D4y85g-wPisT5mo',
        },
    ];
    return (
    <div className='photos-container'>
        {galleryPhotos.map((photo, index) => (
            <Photo key={index} index={index} photo={photo} />
        ))}
    </div>
    );
};

export default Photos;