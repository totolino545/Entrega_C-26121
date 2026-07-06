import { useState } from "react";
import FormContainer from "./FormContainer";
import { useProductos } from "../../context/ProductContext";

// import TrashIcon from "../../assets/icons/TrashIcon";
// import EditIcon from "../../assets/icons/EditIcon";
// import Paginacion from "../Paginacion";

const GestionForm = () => {
  // EL CAMBIO ESTÁ ACÁ: Extraemos todas las variables de la paginación que provee el contexto
  const { 
    products, 
    eliminarProducto, 
    paginaActual, 
    totalPaginas, 
    cargarPagina, 
    cargando 
  } = useProducts();

  // null   → modal cerrado
  // false  → modal abierto en modo "agregar"
  // obj    → modal abierto en modo "editar" con ese producto
  const [productoEditando, setProductoEditando] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  // const [cargando, setCargando] = useState(false);
  
  const abrirAgregar = () => {
    setProductoEditando(null);
    setModalAbierto(true);
  };

  const abrirEditar = (producto) => {
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
      <header className="">
        <h1>Inventario</h1>
        <button className="" onClick={abrirAgregar}>
          + Agregar Producto
        </button>
      </header>

      {modalAbierto && (
        <div className="">
          <div className="">
            <button className="" onClick={cerrarModal}>
              &times;
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
          <div className="">
            <ul className="">
              {products.map(prod => (
                <li key={prod.id} className="">
                  {prod.imagen && (
                    <img
                      src={prod.imagen}
                      alt={prod.nombre}
                      className={styles.itemImg}
                    />
                  )}

                  <div className="">
                    <h4>{prod.nombre}</h4>
                    <div className="">
                      <span className="">${prod.precio}</span>
                      {prod.categoria && (
                        <span className="">{prod.categoria}</span>
                      )}
                      <span className="">Stock: {prod.stock}</span>
                    </div>
                  </div>

                  <div className="">
                    <button
                      className=""
                      onClick={() => abrirEditar(prod)}
                      aria-label="Editar producto"
                    >
                      <EditIcon />
                    </button>
                    <button
                      className=""
                      onClick={() => manejarEliminar(prod.id)}
                      aria-label="Eliminar producto"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* El componente ahora recibe las variables correctamente sin romper la app */}
          {/* <Paginacion 
            paginaActual={paginaActual} 
            totalPaginas={totalPaginas} 
            cargarPagina={cargarPagina} 
            cargando={cargando} 
          /> */}
        </>
      )}
    </div>
  );
};

export default GestionForm;