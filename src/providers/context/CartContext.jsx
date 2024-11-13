import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCartState = () => useContext(CartContext);
export default function CartProvider({ children }) {
    const cartLs = JSON.parse(localStorage.getItem('bookstore_cart'));
    const [cart, setCart] = useState(cartLs ?? []);

    const addToCart = (item, quantity = 1) => {
        if (!item) return;

        const existItem = cart.findIndex(ci => ci.id === item.id);
        if (!cart.length || (existItem < 0)) {
            setCart(oldState => [...oldState, { ...item, quantity }])
        }
        else {
            setCart(oldState => {
                oldState[existItem].quantity += quantity;
                return [...oldState];
            });
        }
    };

    const removeFromCart = (id) => {
        setCart((oldState) => oldState.filter((item) => item.id !== id));
    }

    useEffect(() => {
        localStorage.setItem('bookstore_cart', JSON.stringify(cart));
        console.log('ok');
    }, [cart]);


    return (
        <CartContext.Provider value={{
            cart,
            add: addToCart,
            clear: () => setCart([]),
            remove: removeFromCart,
            count: cart.length
        }}>
            {children}
        </CartContext.Provider>
    )
}