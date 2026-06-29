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

    // Lógica del Carrito
  const { addToCart } = useCart(); // Traemos la función del contexto
  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    alert(`Agregaste ${cantidad} unidades de ${product.title} al carrito.`);
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
                  <h3 className="text-2xl font-semibold text-gray-900 sm:text-xl">U$s  {product.price}</h3>
                </div>
                
                <div className="flex justify-center items-center rounded-sm border border-gray-200">
                  <button className="size-10 leading-10 text-gray-400 transition hover:text-black" onClick={decrementar}> - </button>
                  <p className="h-8 w-8 text-center py-2 rounded-sm border-gray-300 bg-white text-xs text-gray-700">{cantidad}</p>
                  <button className="size-10 leading-10 text-gray-400 transition hover:text-black"  onClick={incrementar}> + </button>
                </div>
              </div>
              <form className="mt-4 flex gap-4">
      <button
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
