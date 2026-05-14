const FormProducto = ({datosForm, manejarCambio, manejarEnvio, manejarCambioImagen}) => {
  return (
    <form onSubmit={manejarEnvio}>
      <input
        name="nombre"
        value={datosForm.nombre}
        onChange={manejarCambio}
      />
      <input 
        type="file" 
        accept="image/*" 
        onChange={manejarCambioImagen} 
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default FormProducto;