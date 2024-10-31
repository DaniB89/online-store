import { useState } from "react";
import DataContext from "./dataContext";

function  GlobalProvider(props) {
const [cart, setCart] = useState([]),
const [user, setUser] = useState({name:"Dani", id:125689 });

function addToCart(producct) {
    const copy = [...cart]
    copy.push(copy);
    setCart(copy);
}

function removeFromCart() {
}

function clearCart() {
}

    return (
        <DataContext.Provider value={{
            cart: cart, 
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;