import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  return (
    <div>
      <div className="card bg-base-100 h-[500px] shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <img className="w-10" src={blog.author_img} alt="" />
              <h3 className="text-xl font-semibold">{blog.author}</h3>
            </div>
            <button onClick={() => handleBookMark(blog)} className="">
              <FaBookmark size={20} />
            </button>
          </div>

          <h2 className="card-title">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex">
            {blog.hashtags.map((has) => (
              <p>#{has}</p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button onClick={()=> handleMarkAsRead(blog.reading_time)} className="btn btn-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
