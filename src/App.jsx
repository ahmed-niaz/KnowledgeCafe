import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <main className="container mx-auto">
      <Header/>
      <div className="md:flex">
      <Blogs/>
      <Bookmark/>
      </div>
      
    </main>
  )
};

export default App;
