import React from 'react';
import './Post.css';


const Post = ({ post: { title, body, imgUrl, link, id}, index }) => {
    return (
    <div> 
        <div id={id} className='bookmark'/>
        <div className='post-container'>
            <h1 className='heading'>{title}</h1>
            <div className='post-content'>
                <img className='image' src={imgUrl} alt='post' loading='lazy'/>
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