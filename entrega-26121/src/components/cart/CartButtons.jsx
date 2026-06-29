import { useState } from 'react';

const CartButtons= () => {
  const stock = 0
  const [cantidad, setCantidad] = useState(0);

  const incrementar = () => {
    if (cantidad < stock)
      setCantidad(cantidad + 1)
  };

  const decrementar = () => {
    if (cantidad > 0)
      setCantidad(cantidad - 1)
  }

  return
  (
  <div>
    <div className="mt-4 flex justify-between absolute inset-x-0 bottom-">
      <div>
        <h3 className="mt-1 text-sm text-gray-500">{price} ARS</h3>
      </div>
      <button onClick={decrementar}> - </button>
      <p>{cantidad}</p>
      <button onClick={incrementar}> + </button>
    </div>
  </div>
)}

export default CartButtons

