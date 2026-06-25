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
    <div classNameName="group block flex flex-col items-center m-4 p-4 gap-8 rounded-se-3xl border border-gray-100">
      <div classNameName="flex flex-row" >
        {/* <img src={product.image} classNameName=" w-75 object-cover sm:h-112.5" /> */}


        <div className="border border-gray-300 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8" aria-modal="true" role="dialog" tabindex="-1">
<h3 className="text-sxltext-gray-900">{product.title}</h3>

          <div className="mt-4 space-y-6 gap-4">
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <img src={product.image}/>

                <div>
                  {/* <h3 className="text-sm text-gray-900">{product.title}</h3> */}

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">XXS</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label for="Line1Qty" className="sr-only"> Quantity </label>

                    <input type="number" min="1" value="1" id="Line1Qty" className="h-8 w-12 rounded-sm border-gray-300 bg-white p-0 text-center text-xs text-gray-700 [-moz-appearance:textfield] focus:outline-hidden [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none" />
                  </form>

                  <button className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                    </svg>
                  </button>
                </div>
              </li>

            </ul>

            <div className="space-y-4 text-center">
              <a href="#" className="block rounded-sm border border-gray-300 bg-gray-50 px-5 py-3 text-sm text-gray-700 transition-colors hover:text-gray-900">
                View my cart (2)
              </a>

              <a href="#" className="block rounded-sm border border-blue-600 bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-blue-700 hover:bg-blue-700">
                Checkout
              </a>

              <a href="#" className="inline-block text-sm text-gray-600 underline underline-offset-4 transition-colors hover:text-gray-700">
                Continue shopping
              </a>
            </div>
          </div>
        </div>
      </div>
      <div classNameName="mt-3 flex justify-between text-m gap-6">
        <div>
          <h3 classNameName="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {product.title}
          </h3>

          <p classNameName="mt-1.5 text-sm text-center text-pretty text-gray-700">
            {product.description}
          </p>
        </div>
        <p classNameName="text-gray-900">u$S {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default DetalleProducto;
