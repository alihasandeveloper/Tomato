import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useState } from "react";


const Navber = ({isLogin, setIsLogin}) => {
    const [menu, setMenu] = useState("home");
    return (
        <>
            <div className="flex justify-between items-center px-0 py-5 ">
                <div>
                    <img className="w-[150px]" src={assets.logo} alt="" />
                </div>
                <div>
                    <ul className="flex list-none gap-5 text-[18px] font-light cursor-pointer">
                        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "text-[#ff623f] border-b-2 border-[#ff623f] pb-1" : ""}>Home</Link>
                        <a href="#menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "text-[#ff623f] border-b-2 border-[#ff623f] pb-1" : ""}>Menu</a>
                        <a href="#footer" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "text-[#ff623f] border-b-2 border-[#ff623f] pb-1" : ""}>Mobile App</a>
                        <a href="#footer" onClick={() => setMenu("contact")} className={menu === "contact" ? "text-[#ff623f] border-b-2 border-[#ff623f] pb-1" : ""}>Contact Us</a>
                    </ul>
                </div>
                <div className="flex gap-10 items-center">
                    <div>
                        <img src={assets.search_icon} alt="" />
                    </div> 
                    <div className="relative">
                        <img src={assets.basket_icon} alt="" />
                        <div className="w-3 h-3 rounded-full bg-[#ff623f] absolute top-[-5px] right-[-10px]"></div>
                    </div>
                    <button className="bg-transparent text-base border border-[#ff623f]  rounded-[50px] cursor-pointer py-2.5 px-6 transition duration-300 hover:bg-[#ff623f] hover:text-white text-[#ff623f]" onClick={() => setIsLogin(true)}>Sign in</button>
                </div>
            </div>
        </>
    );
};

export default Navber;
