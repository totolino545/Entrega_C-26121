import { Link } from 'react-router-dom';
function Links() {
    return(
    <nav aria-label="Global">
                  <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
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
                      <Link to="/staff" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                        Nuestro Staff
                      </Link>
                    </li>
                    <li>
                      <Link to="/staff" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                        Favoritos
                      </Link>
                    </li>
                  </ul>
                </nav>
    )
}
export default Links;