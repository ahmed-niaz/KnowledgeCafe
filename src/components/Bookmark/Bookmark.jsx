import PropsTypes from 'prop-types'
const Bookmark = ({bmarks}) => {
    const {title} = bmarks;
    return (
       <main className='bg-white p-8 rounded-xl mt-10'>
        <h2 className='text-3xl'>{title}</h2>
       </main>
    );
};
Bookmark.propTypes = {
    bmarks: PropsTypes.object,
}
export default Bookmark;