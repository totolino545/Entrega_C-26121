import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "./CardProduct";

const DetalleProducto = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
    // <div className="flex flex-col  items-center m-4 p-4 gap-8">
    //   <h2>Descripcion del producto</h2>
    //   <p>{product.description}</p>
    //   <CardProduct {...product} /> 
    // </div>
    <div className="group block flex flex-col items-center m-4 p-4 gap-8">
        <button className="relative end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
    <span class="sr-only">Wishlist</span>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
    </svg>
  </button>
      <img src={product.image}className=" object-cover sm:h-112.5" />

      <div className="mt-3 flex justify-between text-sm">
        <div>
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {product.title}
          </h3>

          <p className="mt-1.5 text-xs text-pretty text-gray-500">
            {product.description}
          </p>
        </div>

        <p className="text-gray-900">$299</p>
      </div>
    </div>
  );
};
export default DetalleProducto;
