import React from 'react';

const Blog = ({blog}) => {

    return (
        <div>
          <img className='rounded-xl' src={blog.cover} alt="" />
        </div>
    );
};

export default Blog;