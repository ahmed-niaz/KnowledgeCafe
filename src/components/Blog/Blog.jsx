import PropTypes from "prop-types";
import bookmark from '../../assets/images/bookmark.svg'
const Blog = ({ blg,addToBookmark }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blg;
  return (
    <main className="mb-20">
      <img
        className="w-full mb-6 rounded-xl"
        src={cover}
        alt={"Cover picture of the ${title}"}
      />
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src={author_img} />
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold">{author}</p>
            <p className="text-xl">{posted_date}</p>
          </div>
        </div>
        {/* left */}
        <div className="flex flex-row items-center gap-4">
          <span>{reading_time} min read</span>
          <button onClick={()=>addToBookmark(blg)}>
            <img src={bookmark} alt="" />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p>
        {hashtags.map((hash,idx) => (
          <span key={idx} className="text-xl font-bold mr-4 ">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
    </main>
  );
};
Blog.propTypes = {
  blg: PropTypes.object.isRequired,
  addToBookmark:PropTypes.func
};
export default Blog;
