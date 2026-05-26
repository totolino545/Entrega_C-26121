import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartButtons from './CartButtons';
import './CardProduct.css'
// import toCart from '../buttons/toCart'

function CardProduct({ title, description, price, image, category, id }) {

  const stock = 0
  const [cantidad, setCantidad] = useState(0);
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => setFavorito(!favorito);

  const incrementar = () => {
      setCantidad(cantidad + 1)
      console.log(cantidad);
      
  };

  const decrementar = () => {
    if(cantidad > 0) 
      setCantidad(cantidad - 1)
  }

  return (
     
        
        <div className="card">
              <div className="card__content">
                <Link to={`/producto/${id}`} className="group relative"> 
                  <div className="card__image">
                  <img src={image}
                    alt='Imagen del Producto'
                    
                  />
                  </div> 
                  <div className="card__text">
                    <p className="card__title">{title}</p>
                  </div>
                </Link>
                
                </div>
                <div className="card__footer">                 
                    <div className="card__price">us$ {price}</div>
                    <div className="card__button">
                      <button onClick={incrementar}>+</button>                   
                    </div>
                    <div className="card__cart">{cantidad}</div>
                    <div className="card__button">
                      <button onClick={decrementar}>-</button> 
                    </div>
                    <button
                      onClick={toggleFavorito}
                      className={favorito ? 'favoritoActivo' : 'favorito'}
                      aria-label={favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                    >
                      {favorito ? '♥' : '♡'}
                    </button>
                  </div>
        </div>


  );
}

export default CardProduct;
