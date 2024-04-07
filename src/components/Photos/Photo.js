import React from "react";
import "./Photo.css";


const Photo = ({ photo: { title, link, imgUrl}, index }) => {
    return (
    <div className="photo-container">
        <h2 className="heading">{title}</h2>
        <img className="gallery_image" src={imgUrl} alt={title} />
    </div>
    );
};

export default Photo;