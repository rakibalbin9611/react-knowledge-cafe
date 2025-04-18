import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const BookMarks = ({ bookmarks, readingTime }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 bg-[#1111110D] ml-4 pt-4">
      <div className="border rounded-xl border-purple-600 mb-12 bg-[#6047EC08]">
        <h2 className="text-2xl font-bold text-center text-[#6047EC]  p-4">
          Spent time on read: {readingTime}
        </h2>
      </div>
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
