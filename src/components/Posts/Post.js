import React from 'react';
import './Post.css';


const Post = ({ post: { title, body, imgUrl, link}, index }) => {
    return (
    <div> 
        <div id={title} className='bookmark'/>
        <div className='post-container'>
            <h1 className='heading'>{title}</h1>
            <div className='post-content'>
                <img className='image' src={imgUrl} alt='post' />
                <div className='post-text'>
                    <p>{body}</p>
                    <a href={link}>{link}</a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Post;