import { useDebugValue, useState } from "react";
import "./App.css";

import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookAsRead = (time) => {
    setReadingTime(readingTime + time);
  };

  const handleBookMark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex container mx-auto mt-8">
        <Blogs
          handleBookAsRead={handleBookAsRead}
          handleBookMark={handleBookMark}
        ></Blogs>
        <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
      </main>
    </>
  );
}

export default App;
