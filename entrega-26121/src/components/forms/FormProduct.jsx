
import React, { useState, useEffect } from 'react';

const FormProducto = ({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen, modo = "agregar" }) => {
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  console.log(datosForm);


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
    <div className="mx-auto w-full max-w-lg max-h-[75vh] overflow-y-auto rounded-xl bg-white p-6 shadow-lg space-y-5l">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
        {modo === "editar" ? "Editar Producto" : "Agregar Producto"}
      </h2>

      <form
        onSubmit={manejarEnvio}
        className="mx-auto w-full max-w-lg rounded-xl bg-white p-6 shadow-lg space-y-5"
      >

        {/* Nombre */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Nombre
          </label>

          <input
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="text"
            name="title"
            value={datosForm.title}
            onChange={manejarCambio}
            placeholder="Ej. Cámara Nikon Z6"
            required
          />
        </div>

        {/* Descripción */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Descripción
          </label>

          <textarea
            className="w-full rounded-lg text-xs border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="description"
            value={datosForm.description}
            onChange={manejarCambio}
            placeholder="Descripción del producto..."
            rows={4}
          />
        </div>

        {/* Precio y Stock */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Precio
            </label>

            <div className="flex items-center rounded-lg border border-gray-300 overflow-hidden">

              <span className="bg-gray-100 px-3 py-2 text-gray-600">
                U$s
              </span>

              <input
                className="w-full px-3 py-2 focus:outline-none"
                type="number"
                name="price"
                value={Number(datosForm.price).toFixed(2)}
                onChange={manejarCambio}
                placeholder="0"
                min="0"
                required
              />
            </div>

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Stock
            </label>

            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
        <div>

          <label className="mb-1 block text-sm font-medium text-gray-700">
            Categoría
          </label>

          <select
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="category"
            value={datosForm.category}
            onChange={manejarCambio}
            required
          >
            <option value="" disabled>
              Seleccionar categoría...
            </option>

            {category.map((cat) => (
              <option
                key={cat.category}
                value={cat.category}
              >
                {cat.category}
              </option>
            ))}

          </select>

        </div>

        {/* Imagen */}
        <div>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            {modo === "editar"
              ? "Nueva imagen (opcional)"
              : "Imagen"}
          </label>

          <input
            className="block w-full text-sm text-gray-700
        file:mr-4
        file:rounded-lg
        file:border-0
        file:bg-blue-600
        file:px-4
        file:py-2
        file:text-white
        hover:file:bg-blue-700"
            type="file"
            accept="image/*"
            onChange={manejarCambioImagen}
          />

        </div>

        {/* Botón */}

        <button
          type="submit"
          disabled={cargando}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {cargando
            ? "Guardando..."
            : modo === "editar"
              ? "Guardar cambios"
              : "Agregar producto"}
        </button>

      </form>

    </div>
  );
};

export default FormProducto;