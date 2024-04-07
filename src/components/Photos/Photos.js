import React from "react";
import Photo from "./Photo";
import "./Photos.css";


const Photos = () => {
    const galleryPhotos = [
        {
        title: "fEMR",
        link: "/projects",
        imgUrl:
            "https://i.ibb.co/LrRBkVt/femr.png",
        },
        {
        title: "Cat and Mouse",
        link: "/projects",
        imgUrl:
            "https://i.ibb.co/3TdGqMk/catandmouse.png",
        },
        {
        title: "Pacman",
        link: "/projects",
        imgUrl:
            "https://i.ibb.co/G3cCjyK/pacman.png",
        },
        {
        title: "Oazo",
        link: "/projects",
        imgUrl:
            "https://i.ibb.co/dfq2rMD/oazo.png",
        },
    ];
    return (
    <div className="photos-container">
        {galleryPhotos.map((photo, index) => (
            <Photo key={index} index={index} photo={photo} />
        ))}
    </div>
    );
};

export default Photos;