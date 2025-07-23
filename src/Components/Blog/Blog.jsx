import { PiBookmarkSimple } from "react-icons/pi";

const Blog = ({ blog, handleAddToBookmark }) => {
    const { cover_img, title, author, author_img, hashtags, reading_time, posted_date } = blog;
    return (
        <div className="space-y-4">
            <img className="w-full h-[450px]" src={cover_img} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-[60px] h-[60px] rounded-4xl" src={author_img} alt="" />
                    <div className="ml-2">
                        <h4 className="text-[#111111] text-[24px] font-bold">{author}</h4>
                        <p className="text-[rgba(17,17,17,.6)] text-base font-semibold ">{posted_date}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <span className="text-[rgba(17,17,17,.6)] text-[20px] font-medium">{reading_time} min read</span>
                    <button 
                    onClick={() => handleAddToBookmark(blog)}
                     className="text-2xl ml-1 text-[rgba(17,17,17,.6)] cursor-pointer"><PiBookmarkSimple /></button>
                </div>
            </div>
            <h2 className="text-[#111111] text-[40px] font-bold">{title}</h2>

            <p>
                {
                    hashtags.map(hash => <span className="ml-1 font-medium text-[rgba(17,17,17,.6)] text-xl"><a>{hash}</a></span>)
                }
            </p>
            <div>

            </div>
        </div>
    );
};

export default Blog;