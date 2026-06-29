import React from 'react';
import { useCart } from '../../context/CartContext';
import cartIcon from '../../assets/shopping-cart-online-store-svgrepo-com.svg'

const CartWidget = () => {
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();

  return (
    <div className="relative inline-block">
      <img src={cartIcon} alt="carrito" className="size-12 pt-3" />
      <span className="absolute top-0 right-3 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center" >
        {totalItems}
      </span>
    </div>
  );
};

export default CartWidget;
