// src/context/CartContext.jsx
import React, { useState, useContext, createContext } from 'react';
export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const itemInCart = cart.find(item => item.id === product.id);
        if (itemInCart) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
        }
    };

    const updateQuantity = (id, newQuantity) => {
        setCart(prevCart => {  // <--- BIEN: usando prevCart
            return prevCart.map(item =>
                item.id === id
                    ? { ...item, quantity: newQuantity }
                    : item
            );
        });
    };
    const removeItem = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };
    const getCantidadActual = (productId) => {
        const item = cart.find(item => item.id === productId);
        return item ? item.cantidad : 0;
    };
    const getCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };
    const getCartTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity,
            0);
    };

    return (
        <CartContext.Provider value={{
            cart, addToCart, clearCart,
            getCartQuantity, getCartTotal,
            getCantidadActual, updateQuantity,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartContext;