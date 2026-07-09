import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useCart } from '../../context/CartContext';
import { useProductos } from "../../context/ProductContext";
import CardProduct from "./CardProduct";
import CartButtons from "../cart/CartButtons";

const DetalleProducto = () => {

  const { id } = useParams();
  const { productos } = useProductos();
  const product = productos.find(p => p.id === id);
  const [cantidad, setCantidad] = useState(0);
  const [showToast, setShowToast] = useState(false);


  // Lógica del Carrito
  const { addToCart, getCantidadActual } = useCart(); // Traemos la función del contexto
  const cantidadActual = getCantidadActual(id);

  const handleAddToCart = () => {
    addToCart(product, cantidad);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1500);

  };

  const incrementar = (currentQuantity, stock) => {
    if (currentQuantity < stock) {
      setCantidad(currentQuantity + 1)
    }

  };

  const decrementar = (currentQuantity) => {
    if (currentQuantity > 0) {
      setCantidad(currentQuantity - 1)
    }
  };


  if (!product) return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Procesando</h1>
      <p className="mt-2 text-gray-600">Cargando los productos.   Espera unos segundos...</p>
      <Link to="/productos" className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
        Ver Productos
      </Link>
    </div>);

  if (!product.id) return <h2>Producto no encontrado.</h2>;

  return (

    <section>

      {showToast && (
        <div role="alert" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 rounded-md border border-green-500 bg-green-50 p-4 shadow-2xl z-50 animate-fadeI">
          <div className="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="-mt-0.5 size-6 text-green-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div className="flex-1">
              <strong className="block leading-tight font-medium text-green-800"> Success </strong>

              <p className="mt-0.5 text-sm text-green-700">
                Agregaste {cantidad} unidades de {product.title} al carrito.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8 justify-items-center">
          <div className="md:col-span-2">
            <img
              src={product.image}
              className="rounded p-4"
              alt=""
            />
          </div>

          <div className="md:col-span-2">
            <div className="max-w-prose md:max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 sm:text-xl">
                {product.title}
              </h3>

              <p className="mt-4 text-pretty text-gray-700 ">
                {product.description}
              </p>

              <div className="mt-4 flex flex-col justify-between ">
                <div className="flex justify-center gap-4">
                  <p>Stock</p>
                  <h3 className="text-pretty text-gray-700 ">
                    {product.stock}
                  </h3>
                  <p>Precio</p>
                  <h3 className="text-2xl font-semibold text-gray-900 sm:text-xl">U$s  {product.price.toFixed(2)}</h3>
                </div>

                <div className="flex justify-center items-center text-pretty text-gray-700">
                  Haz tu pedido
                  <CartButtons
                    itemId={product.id}
                    stock={product.stock || 10}
                    incrementar={() => incrementar(cantidad, product.stock || 10)}
                    decrementar={() => decrementar(cantidad)}
                    cantidad={cantidad || 0}
                  />
                </div>
              </div>
              <form className="mt-4 flex gap-4" onSubmit={(e) => e.preventDefault()}>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="block w-full rounded-sm bg-gray-300 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                >
                  A mi carrito
                </button>

                <button
                  type="button"
                  className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                >
                  Comprar
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default DetalleProducto;
