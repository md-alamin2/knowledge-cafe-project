import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("blogs.json")
      .then((data) => data.json())
      .then((res) => setBlogs(res));
  }, []);
  
  return (
    <div>
        <h1 className="text-3xl font-bold">Blogs: {blogs.length}</h1>
        <div>
            {
                blogs.map((blog)=><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    </div>
  );
};

export default Blogs;