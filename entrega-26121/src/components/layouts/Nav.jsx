import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import CartWidget from '../cart/CartWidget';
import Links from './Links';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (

    <div className={styles.nav}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-24 items-center justify-between z-30">
          {/* Menú Mobile */}
          <div className="block md:hidden ">
            <button
              className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              onClick={toggleMenu}

            >
              {isOpen ? '✕' : '☰'}


            </button>
          </div>
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>

            <div className="absolute inset-s-0 top-26 left-2 h-64 w-64 px-2 pt-2 pb-3 gap-6 space-y-1 sm:px-3 bg-black shadow-lg opacity-80 z-20">
              <div className="">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/006/547/259/small/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg"

                  alt="logo" className="h-8 rounded" />

              </div>
              <Links />
            </div>
          </div>
          <div className="hidden md:block md:flex md:items-center md:gap-12">

            <span className="sr-only">Home</span>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/006/547/259/small/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg"
              alt="logo" className="h-16 rounded" />
          </div>

          <div className="hidden md:block">
            <Links />
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link to="/carrito" >
                <button type="button" className="mt-0 size-16 rounded  hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2">
                  <CartWidget />
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Nav;