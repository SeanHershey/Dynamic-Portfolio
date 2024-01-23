import React from "react";
import "./Post.css";

const Post = ({ post: { title, body,
imgUrl}, index }) => {
return (
	<div className="post-container">
        <h1 className="heading">{title}</h1>
        <div className="post-content">
            <img className="image" src={imgUrl} alt="post" />
            <p>{body}</p>
        </div>
	</div>
);
};

export default Post;