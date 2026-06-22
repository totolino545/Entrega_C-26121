import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import CartWidget from '../cart/CartWidget';

const Nav = () => {
  return (

    <nav className="navlist ">
      <div  className={styles.nav}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between ">
              <div className="flex items-center h-32">
                <div>
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/006/547/259/small/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg" 
                  alt="logo" className="size-24 rounded" />
                </div>
                <div>
                  <div className="ml-10 flex items-baseline space-x-4">
                    <ul className="ml-10 flex items-baseline space-x-4">
                      <li>
                        <Link to="/" className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white">
                          Inicio
                        </Link>
                      </li>
                      <li>
                        <Link to="/productos" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                          Productos
                        </Link>
                      </li>
                      <li>
                        <Link to="/contacto" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                          Contacto
                        </Link>
                      </li>
                      <li>
                        <Link to="/staff" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                          Nuestro Staff
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link to="/pendiente" >                       
                <button type="button" className="size-24 rounded bg-white p-2 hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2">          
                  <CartWidget/>
                </button>
              </Link>
            </div>
          </div>

    </div>
  </nav>
  );
}

export default Nav;