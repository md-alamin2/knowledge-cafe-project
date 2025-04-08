import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookMark, handleMarkAsRead}) => {
const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("blogs.json")
      .then((data) => data.json())
      .then((res) => setBlogs(res));
  }, []);

  return (
    <div>
        <h1 className="text-3xl font-bold">Blogs: {blogs.length}</h1>
        <div className="all-blogs grid grid-cols-2 gap-4 mt-3">
            {
                blogs.map((blog)=><Blog key={blog.id} blog={blog} handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    </div>
  );
};

export default Blogs;