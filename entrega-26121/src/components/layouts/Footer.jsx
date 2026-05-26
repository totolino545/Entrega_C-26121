import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  const [sIcons, setSIcons] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

  fetch("/data/socialIcons.json")
    .then((respuesta) => {
        if (!respuesta.ok) 
          throw new Error("No se pudo cargar la información");
        return respuesta.json();
      })
      .then(datos => setSIcons(datos))
      .catch(error => setError(error.message))
      .finally(() => setCargando(false))
      
  }, []);

  return (

<footer className={styles.footer}>
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 border-gray-200 ">
    <div className="flex justify-center items-center text-teal-600 dark:text-teal-300 gap-4">
      <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/006/547/259/small/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg" 
        alt="logo" className="size-8 rounded" />
      </div>
      <p className="text-base font-medium text-gray-300 text-sm">
            © {currentYear} MiApp. Todos los derechos reservados.
      </p>   
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
      Desde 2020, ofrecemos productos de calidad con pasión por el servicio. Tu satisfacción, nuestra prioridad.
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <Link to="/pendiente" className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
          Privacidad
        </Link>
      </li>

      <li>
        <Link to="/pendiente" className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
          Términos
        </Link>
      </li>

      <li>
        <Link to="/pendiente" className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
          Historia
        </Link>
      </li>

      <li>
        <Link to="/staff" className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
          Nuestro Staff
        </Link>
      </li>

    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">                     
          {sIcons.map(social => 
            <li key={social.id}>
              <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" key={social.id} href={social.url} aria-label={social.name}>
                <img src={social.icon} alt="icono" className="size-14" />
              </a>
            </li>
          )}      
    </ul>
  </div>
</footer>

  );
};

export default Footer;
