
import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <header className="flex justify-between items-center max-w-11/12 mx-auto my-[40px]">
            <h1 className='lg:text-[40px] text-3xl text-[#111111] font-bold '>Knowledge Cafe</h1>
            <img className="w-[60px] h-[60px]" src={profile} alt="" />
        </header>
    );
};

export default Header;