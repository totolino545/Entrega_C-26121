import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [errorLocal, setErrorLocal] = useState(null);

    const { login } = useAuth();
    const navigate = useNavigate();

    const manejarLogin = async (evento) => {
        evento.preventDefault();
        setErrorLocal(null);

        try {
            //  Usamos la funcion centralizada de tu contexto
            const userCredential = await login(email, password);
            console.log("Usuario logueado con éxito:", userCredential.user);
            navigate("/");
        } catch (error) {
            console.error("CÓDIGO DE ERROR REAL DE FIREBASE:", error.code);

            if (
                error.code === "auth/invalid-credential" ||
                error.code === "auth/user-not-found" ||
                error.code === "auth/wrong-password"
            ) {
                setErrorLocal("Las credenciales ingresadas son incorrectas.");
            } else if (error.code === "auth/invalid-email") {
                setErrorLocal("El Email no es válido.");
            } else {
                // Si te sigue saliendo este, mirá el console.log de arriba para ver el código real
                setErrorLocal(`Error inesperado: ${error.code || "Comprobar consola"}`);
            }
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Iniciar Sesión
                </h2>

                <form onSubmit={manejarLogin} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Correo Electrónico
                        </label>

                        <input
                            type="email"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>

                        <div className="relative">

                            <input
                                type={mostrarPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-12 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setMostrarPassword(!mostrarPassword)}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                            >
                                {mostrarPassword ? (
                                    /* Ojo cerrado */
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3l18 18M10.58 10.59A2 2 0 0012 14a2 2 0 001.41-.59M9.88 5.09A9.77 9.77 0 0112 5c5 0 9 7 9 7a16.18 16.18 0 01-3.04 3.91M6.1 6.1A16.9 16.9 0 003 12s4 7 9 7a8.9 8.9 0 004.1-.9"
                                        />
                                    </svg>
                                ) : (
                                    /* Ojo abierto */
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"
                                        />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                )}
                            </button>

                        </div>
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Ingresar
                    </button>

                    {/* Registro */}
                    <p className="text-center text-sm text-gray-600">
                        ¿No estás registrado?{" "}
                        <Link
                            to="/registro"
                            className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            Registrate
                        </Link>
                    </p>

                </form>

            </div>
        </div>
    );

};

export default Login;