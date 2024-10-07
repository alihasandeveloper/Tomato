import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemID) => {
        if (!cartItem[itemID]) {
            setCartItem((value) => ({ ...value, [itemID]: 1 }));
        }
        else {
            setCartItem((value) => ({ ...value, [itemID]: value[itemID] + 1 }));
        }
    }

    const removeToCart = (itemID) => {
        setCartItem((value) => ({ ...value, [itemID]: value[itemID] - 1 }));
    }

    useEffect(() => {
        console.log(cartItem);

    }, [cartItem]);
    const ContextValue = {
        food_list,
        cartItem,
        addToCart,
        removeToCart
    }
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;