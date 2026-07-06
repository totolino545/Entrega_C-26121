import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Favorito from '../buttons/Favorito';
import './CardProduct.css'
// import toCart from '../buttons/toCart'

function CardProduct({ title, description, price, image, category, id }) {
  const stock = 0
  const producto = { id, title, description, price, image, stock };
  const [cantidad, setCantidad] = useState(0);
  const [favorito, setFavorito] = useState(false);

  // Lógica del Carrito
  const { addToCart } = useCart(); // Traemos la función del contexto
  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
  };
  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

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
        <div className="card__price">us$ {price.toFixed(2)}</div>
        <Favorito
          isFavorite={favorito}
          onToggle={toggleFavorito} />
      </div>
    </div>


  );
}

export default CardProduct;
