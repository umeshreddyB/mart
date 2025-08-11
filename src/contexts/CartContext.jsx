import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState({});

    const addItem = (item) => {
        setCartItems(prev => {
            const prevEntry = prev[item.id];
            return {
                ...prev,
                [item.id]: prevEntry
                    ? { ...prevEntry, count: prevEntry.count + 1 }
                    : { ...item, count: 1 }
            };
        });
    };

    const removeItem = (item) => {
        setCartItems(prev => {
            const prevEntry = prev[item.id];
            if (!prevEntry) return prev;
            if (prevEntry.count <= 1) {
                const { [item.id]: _, ...rest } = prev;
                return rest;
            }
            return {
                ...prev,
                [item.id]: { ...prevEntry, count: prevEntry.count - 1 }
            };
        });
    };
    const makeEmpty = () => {
        setCartItems({});
    }

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem , makeEmpty }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
