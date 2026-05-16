import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (

    <nav className="fixed top-0 right-0 left-0 bg-gray-900 h-20 z-40">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="shrink-0">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="size-8" />
          </div>
          <div>
            <div className="ml-10 flex items-baseline space-x-4">
              {/* <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
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
       </ul>
            </div>
          </div>
        </div>
       
      </div>
    </div>

    
  </nav>
  );
}

export default Nav;