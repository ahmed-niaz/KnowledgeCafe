import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <main className="md:w-1/3">
      <h3 className="text-3xl font-extrabold bg-[#1111110D] p-10 rounded-2xl mt-8 text-center">
        Bookmarked Blog: {bookmarks.length}
        {
          bookmarks.map((bookmark)=><Bookmark key={bookmark.id} bmarks={bookmark}/>)
        }
      </h3>
    </main>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
};
export default Bookmarks;
