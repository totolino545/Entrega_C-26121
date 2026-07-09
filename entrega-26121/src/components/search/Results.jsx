import { useEffect } from "react";
import { useBusqueda } from "../../context/SearchContext";
import { useProductos } from "../../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

const Results = () => {
  const { busqueda } = useBusqueda();
  const { productos } = useProductos();
  const navigate = useNavigate(); 
console.log("Productos en Results:", productos); // Depuración: Verificar los productos
  // Efecto para redirigir al inicio si la búsqueda se vacía
  useEffect(() => {
    if (!busqueda || busqueda.trim() === "") 
      navigate("/");

  }, [busqueda, navigate]);

  // Aseguramos que 'productos' exista antes de filtrar
  const productosFiltrados = productos ? productos.filter(producto =>
    producto.title.toLowerCase().includes(busqueda.toLowerCase())
  ) : [];

  return (
  <div className="mx-auto max-w-7xl px-4 py-8">

    <h2 className="mb-8 text-3xl font-bold text-gray-800">
      Productos Encontrados
    </h2>

    {productosFiltrados.length > 0 ? (

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {productosFiltrados.map((producto) => (

          <article
            key={producto.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <Link
              to={`/producto/${producto.id}`}
              className="flex h-60 items-center justify-center bg-gray-50 p-6"
            >
              <img
                src={producto.image}
                alt={producto.title}
                className="max-h-full object-contain transition duration-300 hover:scale-105"
              />
            </Link>

            <div className="space-y-4 p-5">

              <Link to={`/producto/${producto.id}`}>
                <h3 className="line-clamp-2 text-lg font-semibold text-gray-800 hover:text-blue-600">
                  {producto.title}
                </h3>
              </Link>

              <div className="flex items-center justify-between">

                <span className="text-2xl font-bold text-green-600">
                  ${Number(producto.price).toFixed(2)}
                </span>

                <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700">
                  {producto.category}
                </span>

              </div>

              <Link
                to={`/producto/${producto.id}`}
                className="block rounded-lg bg-blue-600 py-2 text-center font-medium text-white transition hover:bg-blue-700"
              >
                Ver detalle
              </Link>

            </div>

          </article>

        ))}

      </div>

    ) : (

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-10 text-center">

        <p className="text-lg text-gray-500">
          No hay productos que coincidan con la búsqueda.
        </p>

      </div>

    )}

  </div>
);
};

export default Results;