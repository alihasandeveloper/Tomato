import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
    // console.log("category: "+category)
    return (
        <div>
            <div>
                <div className="md:w-[60%] mb-10" id="menu">
                    <h2 className="font-medium text-5xl text-[#262626] mb-3">Explore our menu</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, aliquid ipsum. Minima illum esse sunt quos modi rerum saepe porro aspernatur, unde quisquam veritatis quo facere voluptate. Esse, laborum debitis?</p>
                </div>
                <div className="flex gap-5 justify-between items-center overflow-x-auto category-scroll">
                    {
                        menu_list.map((item, index) => {
                            return (
                                <div className="" onClick={() => setCategory(value => value === item.menu_name ? 'all' : item.menu_name)} key={index}>
                                    <div className="category">
                                        <img className={category === item.menu_name ? "border-[3px] border-[#ff623f] p-[3px] rounded-full transition duration-500 ease-in-out shadow-lg" : "border-[3px] border-transparent p-[3px] rounded-full transition duration-500 ease-in-out"} src={item.menu_image} alt={item.menu_name} />
                                    </div>
                                    <h3 className={category === item.menu_name ? "text-center text-xl medium mt-3 text-[#ff623f] transition duration-500 ease-in-out " : "text-center text-xl medium mt-3 transition duration-500 ease-in-out"}>{item.menu_name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
                <hr className="border-none h-0.5 bg-[#ff623f] my-10" />
            </div>
        </div>
    );
};

export default ExploreMenu;
