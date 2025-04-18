import React from "react";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleBookMark, handleBookAsRead }) => {
  console.log(blog);
  const {
    title,
    author,
    author_img,
    cover,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-10">
      <img className="rounded-lg" src={cover} alt="" />
      <div className="md:flex justify-between items-center mt-4 mb-4">
        <div className="flex items-center">
          <div>
            <img className="w-14 " src={author_img} alt="" srcset="" />
          </div>
          <div className="ml-6">
            <h2 className="font-bold text-2xl">{author}</h2>
            <p className="font-semibold text-base text-gray-600">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-base text-gray-600 mr-2">
            {reading_time} min read
          </p>
          <button
            onClick={() => handleBookMark(blog)}
            className="text-3xl text-red-600"
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h2 className="mb-4 font-bold text-4xl">{title}</h2>
      <p className="mb-5">
        {hashtags.map((hash) => (
          <span className="mr-2">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleBookAsRead(reading_time)}
        className="text-purple-800 font-bold underline"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
