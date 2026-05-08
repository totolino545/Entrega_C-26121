import { useState } from "react";
import FormProducto from "./FormProducto";

const FormContainer = () => {
  const [imagenFile, setImagenFile] = useState(null);
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    stock: "",
  });

  const manejarCambio = (evento) => {
    setDatosForm({
      ...datosForm,
      [evento.target.name]: evento.target.value,
    });
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    const apiKey = "4bc89d90e5ba2ca799b0f1339650ce18";
    const formData = new FormData();
    formData.append("image", imagenFile);

    const respuesta = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      },
    );
    const imgbbData = await respuesta.json();
    const urlImagen = imgbbData.data.url;

    const productoCompleto = { ...datosForm, urlImagen: urlImagen };
    console.log("Producto listo para enviar:", productoCompleto);
  };

  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  return (
    <FormProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen}
    />
  );
};

export default FormContainer;
