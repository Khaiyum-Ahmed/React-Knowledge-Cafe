import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3" >
            <div className="bg-[rgba(96,71,236,.1)] rounded-xl border border-[#6047EC] p-5 ml-6 mb-6">
                <h3 className="text-2xl font-bold text-[#6047EC] text-center">Reading Time: {readingTime}</h3>
            </div>
            <div className="bg-[rgba(17,17,17,.05)] p-4 rounded-xl space-y-5 ml-6">
                <h2 className="text-2xl font-bold text-[#111]">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;