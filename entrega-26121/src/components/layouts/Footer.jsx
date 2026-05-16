import styles from './Footer.module.css';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-screen h-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} MiApp. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors">
              Términos
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


//   const anioActual = new Date().getFullYear();

//   return (
//     <footer className={styles.footer}>
//       <nav>
//         <ul className={styles.footerNav}>
//           <li>
//             <a href="#acerca" className={styles.footerLink}>
//               Acerca de Nosotros
//             </a>
//           </li>
//           <li>
//             <a href="#privacidad" className={styles.footerLink}>
//               Política de Privacidad
//             </a>
//           </li>
//         </ul>
//       </nav>

//       <hr className={styles.divider} />
//       {/* Sección de Copyright */}
//       <div className={styles.copyrightContainer}>
//         <p className={styles.copyright}>
//           © {anioActual} <span className={styles.brand}>Tienda de JUANCHO</span>. 
//           Todos los derechos reservados.
//         </p>
//       </div>
//     </footer>
//   );
// };

export default Footer;
