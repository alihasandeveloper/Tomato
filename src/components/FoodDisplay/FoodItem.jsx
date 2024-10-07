import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ key, id, name, image, price, desc, category }) => {

    // const [itemCount, setItemCount] = useState(0);
    const { cartItem, addToCart, removeToCart } = useContext(StoreContext);
    // console.log(assets.rating_starts)
    return (
        <>
            <div className="shadow-md rounded-[20px]">
                <div className="relative">
                    <img className=" w-full rounded-t-[20px]" src={image} alt="" />
                    {!cartItem[id]
                        ? <img className=" cursor-pointer absolute bottom-3 right-3 transition duration-500" onClick={() => addToCart(id)} src={assets.add_icon_white} />
                        : <div className="flex gap-2 items-center bg-white shadow-md absolute bottom-3 right-3 p-3 rounded-[50px] transition duration-500">
                            <img className="w-7 cursor-pointer " onClick={() => removeToCart(id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItem[id]}</p>
                            <img className="w-7 cursor-pointer " onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                        </div>
                    }
                </div>
                <div className="p-7 ">
                    <div className="flex justify-between items-center my-2">
                        <h2 className="font-medium text-xl text-[#ff623f]">{name}</h2>
                        <img src={assets.rating_starts} alt="" />
                    </div>
                    <p>{desc}</p>
                    <p className="text-[#ff623f] text-xl font-bold mt-3">${price}</p>
                </div>
            </div>
        </>
    );
};

export default FoodItem;    