import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import CartWidget from '../cart/CartWidget';
import Links from './Links';
import SearchBar from "../search/SearchBar"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para capitalizar la primera letra del nombre
  const capitalizarNombre = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const obtenerNombreMostrado = () => {
    if (user?.nombre) {
      // 1. Cortamos el string en el primer espacio en blanco para quedarnos solo con el primer nombre
      const primerNombre = user.nombre.split(" ")[0];
      return capitalizarNombre(primerNombre);
    }

    if (user?.email) {
      // Si no hay nombre y usamos el email, también cortamos por si el email tiene puntos o guiones (ej: jose.navarro)
      const usuarioEmail = user.email.split("@")[0].split(".")[0].split("-")[0];
      return capitalizarNombre(usuarioEmail);
    }

    return "Usuario";
  };
  
  return (
  <header className="relative rounded-2xl bg-teal-900 shadow-md">
    {/* ================= HEADER ================= */}
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

      {/* ================= MOBILE ================= */}
      <div className="flex w-full items-center justify-between gap-3 md:hidden">

        {/* Botón menú */}
        <button
          onClick={toggleMenu}
          className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20 transition"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Buscador */}
        <div className="flex-1">
          <SearchBar />
        </div>

        {/* Carrito */}
        <Link to="/carrito">
          <button className="rounded-lg p-2 hover:bg-white/10 transition">
            <CartWidget />
          </button>
        </Link>

      </div>

      {/* ================= ESCRITORIO ================= */}
      <div className="hidden md:flex w-full items-center">

        {/* Logo */}
        <div className="shrink-0">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/006/547/259/small/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg"
            alt="logo"
            className="h-10 rounded-lg"
          />
        </div>

        {/* Links */}
        <div className="ml-6 flex-1">
          <Links />
        </div>

        {/* Search */}
        <div className="mr-3 w-80">
          <SearchBar />
        </div>

        {/* Carrito */}
        <Link to="/carrito">
          <button className="rounded-lg p-2 hover:bg-white/10 transition">
            <CartWidget />
          </button>
        </Link>

      </div>

    </div>

    {/* ================= MENÚ MOBILE ================= */}
    {isOpen && (
      <div
        className="absolute left-0 top-full z-50 w-1/2 bg-black/90 shadow-xl md:hidden"
        onClick={() => setIsOpen(false)}
      >
        <div className="p-5">

          <div className="mb-6 flex items-center gap-3">

            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/006/547/259/small/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg"
              alt="logo"
              className="h-10 rounded-lg"
            />

            <span className="font-medium text-white">
              {obtenerNombreMostrado()}
            </span>

          </div>

          <Links />

        </div>
      </div>
    )}
  </header>
);
}

export default Nav;