import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
function Links() {

  const { user, logout } = useAuth();


  return (
    <nav aria-label="Global">
      <ul className="flex flex-col items-start gap-5 text-sm md:flex-row md:items-center md:gap-6">
        <li>
          <Link to="/" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/productos" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
            Productos
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
            Contacto
          </Link>
        </li>
        <li>
          <Link to="/carrito" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
            Carrito
          </Link>
        </li>
        <li>
          {user ? (
            <>


              <button
                onClick={logout}
                className="flex flex-col mr-0 text-red-300 transition hover:text-red-700"
              >
                <span className="text-sm text-gray-300 transition hover:text-red-700">
                  {user.nombre}
                </span>
                Cerrar sesión
                
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
            >
              Login
            </Link>
          )}
        </li>
        <li>
          {user?.rol === "admin" && (
            <Link to="/gestion" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
              Gestion
            </Link>
          )}
        </li> 
      </ul>
    </nav>
  )
}
export default Links;