const Header = () => {
    return (
        <div>
            <div className="relative flex content-end flex-col justify-start header-bg my-7 mx-auto p-10 h-[34vw] rounded-[20px]">
                <div className="w-1/2 absolute bottom-10 header-animation">
                    <h2 className="font-medium text-white text-6xl mb-3">Order your <br />favorite food here</h2>
                    <p className="text-white text-lg mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolorem unde nam illum, quam cupiditate sint delectus doloribus, omnis nostrum itaque, at commodi ipsa pariatur ducimus ut dolorum eos soluta!</p>
                    <button className="bg-transparent text-base  rounded-[50px] cursor-pointer py-4 px-8 transition duration-300 text-gray-700 bg-white">View Menu</button>
                </div>
            </div>
        </div>
    );
};

export default Header;