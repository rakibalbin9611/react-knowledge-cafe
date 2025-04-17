import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const BookMarks = ({ bookmarks }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 pt-4">
      <h2 className="text-center font-bold text-2xl">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default BookMarks;
