import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    // console.log(food_list)
    return (
        <div>
            <div id="food-display">
                <h2 className="font-medium text-5xl text-[#262626]  my-10">Top dishes near you</h2>
                <div className="grid gap-5 grid-cols-4 food-items transition duration-500 ease-in">
                    {food_list.map((item, index) => {
                        if (category === "all" || category === item.category) {
                            return <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} desc={item.description} category={item.category} />
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default FoodDisplay;