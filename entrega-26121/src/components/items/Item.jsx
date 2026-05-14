import { useState } from 'react';
import estilos from './Item.module.css'
import { Link } from 'react-router-dom';

function Item({ nombre, stock, precio, imagen, id }) {

  const [cantidad, setCantidad] = useState(0);
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => setFavorito(!favorito);
      
  // 2. Creamos la lógica de la acción
  const incrementar = () => {
    if (cantidad < stock) 
      setCantidad(cantidad + 1)
  };

  const decrementar = () => {
    if(cantidad > 0) 
      setCantidad(cantidad - 1)
  }

  return (
    <div>
      <Link to={`/producto/${id}`}>
        <h1>{nombre}</h1>
      <h2>{precio}ARS</h2>
      <img src={imagen}/>
      <span 
          onClick={toggleFavorito} 
          className={estilos.corazon}
          style={{ '--color-corazon': favorito ? '#ff003c' : '#ccc' }}
        >
          {favorito ? '♥' : '♡'}
        </span>
      {/* 3. Conectamos la acción (onClick) a la lógica */}
      <button onClick={decrementar}> - </button>
      <p>{cantidad}</p>
      <button onClick={incrementar}> + </button>

      </Link>
          </div>
  );
}

export default Item