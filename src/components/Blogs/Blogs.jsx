import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import  PropTypes  from 'prop-types';

const Blogs = ({addToBookmark}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`blog.json`)
      .then((resp) => resp.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <main className="md:w-2/3">
      <p>Blogs {blogs.length}</p>
      {blogs.map((blog) => (
        <Blog key={blog.id} blg={blog} addToBookmark={addToBookmark} />
      ))}
    </main>
  );
};
Blogs.propsTypes = {
  addToBookmark:PropTypes.func
}
export default Blogs;
