import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

const App = () => {
  const [bookmarks,setBookmarks] = useState([]);
  const addToBookmark = (bm)=>{
    const newBookmarks = [...bookmarks,bm]
    setBookmarks(newBookmarks)
  }
  return (
    <main className="container mx-auto">
      <Header/>
      <div className="md:flex gap-8">
      <Blogs addToBookmark={addToBookmark}/>
      <Bookmark bookmarks= {bookmarks}/>
      </div>
      
    </main>
  )
};

export default App;
