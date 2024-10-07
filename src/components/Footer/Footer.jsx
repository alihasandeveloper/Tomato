import { assets } from "../../assets/assets";
const Footer = () => {
    return (
        <div className=" bg-gray-800 " id="footer">
            <div className="flex  w-[80%] mx-auto mt-10 py-20">
                <div className="w-1/2">
                    <img src={assets.logo} alt="" />
                    <p className="text-white font-light text-lg mt-3 w-9/12 mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem recusandae quo aspernatur vel rerum modi ducimus necessitatibus animi suscipit!</p>
                    <div className="flex gap-3 items-center justify-start">
                        <img className="cursor-pointer"  src={assets.facebook_icon} alt="" />
                        <img  className="cursor-pointer" src={assets.twitter_icon} alt="" />
                        <img  className="cursor-pointer" src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="flex justify-between w-1/2">
                    <div>
                        <h2 className="text-white font-medium text-2xl font-bold mb-3" >Company</h2>
                        <ul className=" ">
                            <li className="text-white cursor-pointer font-light mb-2">Home</li>
                            <li className="text-white cursor-pointer font-light mb-2">About us</li>
                            <li className="text-white cursor-pointer font-light mb-2">Delivery</li>
                            <li className="text-white cursor-pointer font-light mb-2">Privacy policy</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white font-medium text-2xl font-bold mb-3 uppercase" >Get In Touch</h2>
                        <ul className=" ">
                            <li className="text-white cursor-pointer font-light mb-2">+45-544-5469</li>
                            <li className="text-white cursor-pointer font-light mb-2">contact@tomato.com</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className=" w-[80%] mx-auto">
                <hr className="" />
                <p className="text-center text-white py-3 ">Copyright 2024 © Tomato.com - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;