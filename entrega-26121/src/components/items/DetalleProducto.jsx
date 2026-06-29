import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CardProduct from "./CardProduct";
import CartButtons from "../cart/CartButtons";

const DetalleProducto = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const stock = 10
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

  const incrementar = () => {
    if (cantidad < stock)
      setCantidad(cantidad + 1)
    console.log(cantidad);
  };

  const decrementar = () => {
    if (cantidad > 0)
      setCantidad(cantidad - 1)
  }

  useEffect(() => {
    fetch("/data/products.json")
      .then(response => response.json())
      .then(data => {
        const productoEncontrado = data.find(p => p.id === parseInt(id));
        setProduct(productoEncontrado);

      })
      .catch(error => console.error("Error al cargar el producto:", error));
  }, [id]);

  if (!product) return <h2>Cargando detalle del producto...</h2>;

  if (!product.id) return <h2>Producto no encontrado.</h2>;

  return (


    <section>

      { showToast && (
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
                  <h2>Precio</h2>
                  <h3 className="text-2xl font-semibold text-gray-900 sm:text-xl">U$s  {product.price.toFixed(2)}</h3>
                </div>

                <div className="flex justify-center items-center text-pretty text-gray-700">
                  Haz tu pedido
                  <button className="size-10 leading-10 text-gray-400 transition hover:text-black" onClick={decrementar}> - </button>
                  <p className="h-8 w-8 text-center py-2 rounded-sm border-gray-300 bg-white text-xs text-gray-700">{cantidad}</p>
                  <button className="size-10 leading-10 text-gray-400 transition hover:text-black" onClick={incrementar}> + </button>
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
