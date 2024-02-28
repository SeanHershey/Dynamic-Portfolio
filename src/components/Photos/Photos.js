import React from "react";
import Photo from "./Photo";
import "./Photos.css";


const Photos = () => {
    const galleryPhotos = [
        {
        title: "Project",
        link: "/projects/a#project",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
        },
        {
        title: "Project",
        link: "/projects/a#project",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
        },
        {
        title: "Project",
        link: "/projects/a#project",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
        },
        {
        title: "Project",
        link: "/projects/a#project",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
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