import { useState } from 'react';

const CartButtons= () => {
  const stock = 0
  const [cantidad, setCantidad] = useState(0);
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => setFavorito(!favorito);

  const incrementar = () => {
    if (cantidad < stock)
      setCantidad(cantidad + 1)
  };

  const decrementar = () => {
    if (cantidad > 0)
      setCantidad(cantidad - 1)
  }

  return
  <div>
    <div className="mt-4 flex justify-between absolute inset-x-0 bottom-">
      <div>
        <h3 className="mt-1 text-sm text-gray-500">{price} ARS</h3>
      </div>
      <button onClick={decrementar}> - </button>
      <p>{cantidad}</p>
      <button onClick={incrementar}> + </button>
      <button
        onClick={toggleFavorito}
        className={`${estilos.favorito} ${favorito ? estilos.favoritoActivo : ''}`}
        aria-label={favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {favorito ? '♥' : '♡'}
      </button>
    </div>
  </div>
}

export default CartButtons

