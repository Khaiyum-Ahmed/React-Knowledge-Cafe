
import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between items-center max-w-11/12 mx-auto my-[40px]">
            <h1 className='lg:text-[40px] text-3xl text-[#111111] font-bold '>Knowledge Cafe</h1>
            <img className="w-[60px] h-[60px]" src={profile} alt="" />
        </div>
    );
};

export default Header;