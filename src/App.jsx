import { useState } from "react";
import "./App.css";

import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookMark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex container mx-auto mt-8">
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
      </main>
    </>
  );
}

export default App;
