
import React, { useState, useEffect } from 'react';

const FormProducto = ({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen, modo = "agregar", cargando }) => {
        const [category, setCategory] = useState([]);
        const [error, setError] = useState(null);
        const [cargando, setCargando] = useState(true);

    useEffect(() => {
  
    fetch('data/category.json')
      .then((respuesta) => {
          if (!respuesta.ok) 
            throw new Error("No se pudo cargar la información de las categorias");
          return respuesta.json();
        })
        .then(datos => setCategory(datos))
        .catch(error => setError(error.message))
        .finally(() => setCargando(false))
    }, []);

    return (
    <div className="">
      <h2 className="">
        {modo === "editar" ? "Editar Producto" : "Agregar Producto"}
      </h2>

      <form onSubmit={manejarEnvio} className="">
        {/* Nombre */}
        <div className="">
          <label className="">Nombre</label>
          <input
            className=""
            type="text"
            name="nombre"
            value={datosForm.title}
            onChange={manejarCambio}
            placeholder="Ej. Cámara Nikon Z6"
            required
          />
        </div>

        {/* Descripcion */}
        <div className="">
          <label className="">Descripción</label>
          <textarea
            className=""
            name="descripcion"
            value={datosForm.description}
            onChange={manejarCambio}
            placeholder="Descripción del producto..."
            rows={3}
          />
        </div>

        {/* Precio + Stock */}
        <div className="">
          <div className="">
            <label className="">Precio</label>
            <div className="">
              <span className="">$</span>
              <input
                className=""
                type="number"
                name="precio"
                value={datosForm.price}
                onChange={manejarCambio}
                placeholder="0"
                min="0"
                required
              />
            </div>
          </div>

          <div className="">
            <label className="">Stock</label>
            <input
              className=""
              type="number"
              name="stock"
              value={datosForm.stock}
              onChange={manejarCambio}
              placeholder="0"
              min="0"
              required
            />
          </div>
        </div>

        {/* Categoría */}
        <div className="">
          <label className="">Categoría</label>
          <select
            className=""
            name="categoria"
            value={datosForm.category}
            onChange={manejarCambio}
            required
          >
            <option value="" disabled>Seleccionar categoría...</option>
            {category.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Imagen */}
        <div className="">
          <label className="">
            {modo === "editar" ? "Nueva imagen (opcional)" : "Imagen"}
          </label>
          <label className="">
            <span className="">Elegir archivo</span>
            <input
              className=""
              type="file"
              accept="image/*"
              onChange={manejarCambioImagen}
            />
            <span className="" id="file-name">
              Sin archivo seleccionado
            </span>
          </label>
        </div>

        <button
          type="submit"
          className=""
          disabled={cargando}
        >
          {cargando ? "Guardando..." : modo === "editar" ? "Guardar cambios" : "Agregar producto"}
        </button>

      </form>
    </div>
  );
};

export default FormProducto;