import { useState } from 'react';
import estilos from './Item.module.css'
import { Link } from 'react-router-dom';
// import toCart from '../buttons/toCart'

function Item({ title, description, price, image, category, id }) {
  const stock = 0
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
       
        <Link to={`/producto/${id}`} className="group relative">
                  
          <img src={image}
            alt='Imagen del Producto'
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
          />
          <h2 className="text-sm text-gray-700 ">
            {title}
          </h2>
          <div className="mt-4 flex justify-between absolute inset-x-0 bottom-">
            <div>            
              <h3 className="mt-1 text-sm text-gray-500">{price} ARS</h3>
            </div>
              <button onClick={decrementar}> - </button>
              <p>{cantidad}</p>
              <button onClick={incrementar}> + </button>   
          </div>
          {/* <toCart/>         */}
        </Link>
      
    </div>
  );
}

export default Item