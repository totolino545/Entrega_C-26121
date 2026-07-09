import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Usamos tu contexto central
import { doc, setDoc } from "firebase/firestore"; // Importamos para grabar en Firestore
import { db } from "../firebase/config"; // Tu configuración de Firebase

const Registro = () => {
  const [nombre, setNombre] = useState(""); // Agregamos campo de nombre
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const { signup } = useAuth(); // Traemos la función de registro del contexto
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Creamos el usuario en Firebase Auth usando tu contexto
      const userCredential = await signup(email, password);
      const usuarioCreado = userCredential.user;

      // CREAMOS EL DOCUMENTO EN FIRESTORE EN LA COLECCIÓN 'CLIENTE'
      // Forzamos que el ID del documento sea el UID de autenticación
      await setDoc(doc(db, "cliente", usuarioCreado.uid), {
        nombre: nombre,
        email: email,
        rol: "usuario", // Todo usuario que se registra por la web es cliente común por defecto
      });

      console.log("Usuario registrado y creado en la colección 'cliente' con éxito.");
      navigate("/");

    } catch (error) {
      console.error("Error en el registro:", error.code);
      if (error.code === "auth/email-already-in-use") {
        const quiereLoguearse = window.confirm(
          "Este correo ya está registrado. ¿Desea ir al inicio de sesión?"
        );
        if (quiereLoguearse) navigate("/login");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres.");
      } else {
        setError("Ocurrió un error al registrarse. Intente nuevamente.");
      }
    }
  };

  return (
  <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Crear Cuenta
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Nombre */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Nombre Completo
          </label>

          <input
            type="text"
            placeholder="Juan Pérez"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>

          <input
            type="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        {/* Contraseña */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Contraseña
          </label>

          <input
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Botón */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Registrarse
        </button>

      </form>

    </div>
  </div>
);
};

export default Registro;