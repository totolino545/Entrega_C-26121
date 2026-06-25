import React from 'react';
import { useCart } from '../../context/CartContext';
import cartIcon from '../../assets/shopping-cart-online-store-svgrepo-com.svg'

const CartWidget = () => {
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();

  return (
    <div className="relative inline-block">
      <img src={cartIcon} alt="carrito" className="size-16" />
      <span className="absolute -top-2 right-4 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center" >
        {totalItems}
      </span>
    </div>
  );
};

export default CartWidget;
