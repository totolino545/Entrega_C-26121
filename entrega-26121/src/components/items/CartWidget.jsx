import React from 'react';
import cartIcon from '../../assets/shopping-cart-online-store-svgrepo-com.svg'

const CartWidget = () => {
  
  return (
    <div>
        <img src={cartIcon} alt="carrito" className="size-24 " />
    </div>
  );
};

export default CartWidget;
