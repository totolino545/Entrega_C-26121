import { useState } from "react";
import FormContainer from "./FormContainer";
import { useProductos } from "../../context/ProductContext";
import Pagination from "../pagination/Pagination";
// import TrashIcon from "../../assets/icons/TrashIcon";
// import EditIcon from "../../assets/icons/EditIcon";
// import Paginacion from "../Paginacion";

const GestionForm = () => {
  // EL CAMBIO ESTÁ ACÁ: Extraemos todas las variables de la paginación que provee el contexto
  const {
    productos,
    eliminarProducto,
    paginaActual,
    totalPaginas,
    cargarPagina,
    cargando
  } = useProductos();

  // null   → modal cerrado
  // false  → modal abierto en modo "agregar"
  // obj    → modal abierto en modo "editar" con ese producto
  const [productoEditando, setProductoEditando] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  console.log(productos);

  const abrirAgregar = () => {
    setProductoEditando(null);
    setModalAbierto(true);
  };

  const abrirEditar = (producto) => {
    console.log(producto);
    setProductoEditando(producto);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setProductoEditando(null);
  };

  const manejarEliminar = async (id) => {
    const ok = window.confirm("¿Eliminar este producto permanentemente?");
    if (ok) await eliminarProducto(id);
  };

  return (
    <div className="">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Inventario
        </h1>

        <button
          onClick={abrirAgregar}
          className="rounded-lg mt-2 bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          + Agregar Producto
        </button>
      </header>

      {modalAbierto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 shadow-xl relative">
            <button className="" onClick={cerrarModal}>
              <svg className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 
                  6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C"></path>
                  <path d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 
              8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 
              10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 
              14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 
              15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 
              8.67678 9.26256 8.96967 8.96967Z" fill="#1C274C"></path> </g>
              </svg>
            </button>
            <FormContainer
              cerrarModal={cerrarModal}
              productoEditar={productoEditando}
            />
          </div>
        </div>
      )}

      {/* Render condicional por si está cargando los productos */}
      {cargando && productos.length === 0 ? (
        <div className="">
          <p className="">Cargando inventario...</p>
        </div>
      ) : (
        <>
          <div className="mx-auto md:m-2 max-w-6xl">
            <ul className="space-y-4">
              {productos.map(prod => (
                <li
                  key={prod.id}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  {prod.image && (
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="h-24 w-24 rounded-lg border bg-white object-contain p-2"
                    />
                  )}

                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {prod.title}
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm">
                      <span className="rounded bg-green-100 px-2 py-1 font-semibold text-green-700">
                        ${Number(prod.price).toFixed(2)}
                      </span>
                      {prod.category && (
                        <span className="rounded bg-blue-100 px-2 py-1 text-blue-700">
                          {prod.category}
                        </span>
                      )}
                      <span className="rounded bg-gray-100 px-2 py-1">
                        Stock: {prod.stock}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600"
                      onClick={() => abrirEditar(prod)}
                    >
                      Editar
                    </button>
                    <button
                      className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                      onClick={() => manejarEliminar(prod.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* El componente ahora recibe las variables correctamente sin romper la app */}
          <Pagination
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            cargarPagina={cargarPagina}
            cargando={cargando}
          />
        </>
      )}
    </div>
  );
};

export default GestionForm;