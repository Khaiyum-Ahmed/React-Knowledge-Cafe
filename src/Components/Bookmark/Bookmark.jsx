
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="mb-5 p-4 bg-white rounded-xl">
            <h2 className="text-[18px] font-semibold text-[#111]">{title}</h2>
        </div>
    );
};

export default Bookmark;