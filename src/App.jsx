import "./App.css";

import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="md:flex container mx-auto mt-8">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </main>
    </>
  );
}

export default App;
