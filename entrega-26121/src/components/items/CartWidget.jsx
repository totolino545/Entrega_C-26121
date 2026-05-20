import React from 'react';
import cartIcon from '../../assets/shopping-cart-online-store-svgrepo-com.svg'

const CartWidget = () => {
  
  return (
    <div className="size-10 p-2">
        <img src={cartIcon} alt="carrito" />
    </div>
  );
};

export default CartWidget;
