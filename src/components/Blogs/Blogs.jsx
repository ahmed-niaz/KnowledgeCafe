import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
        <Blog key={blog.id} blg={blog} />
      ))}
    </main>
  );
};

export default Blogs;
