import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  const [socialIcons, setSocialIcons] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
  // La ruta es relativa a public
  fetch('/public/data/socialIcons.json')
    .then((respuesta) => {
        if (!respuesta.ok) 
          throw new Error("No se pudo cargar la información de los productos");
        return respuesta.json();
      })
      .then(datos => setSocialIcons(datos))
      .catch(error => setError(error.message))
      .finally(() => setCargando(false))
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-screen h-14 border-t border-gray-200  z-30">
      <div className={styles.footer}>
        <div className=" h-14 flex flex-row justify-between items-center gap-4">
          

          <div className="flex space-x-6">
              <a href="#" className="text-base font-medium text-gray-300 hover:text-gray-300 text-sm transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-base font-medium text-gray-300 hover:text-gray-300 text-sm transition-colors">
                Términos
              </a>
              <a href="#" className="text-base font-medium text-gray-300 hover:text-gray-300 text-sm transition-colors">
                Contacto
              </a>
          </div>
          <div>
            <div className='flex flex-row'>
               <h3 className="text-xl font-bold mb-4">Seguinos</h3>
            <ul className="relative space-y-2 -right-100">
                 {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
                  aria-label={social.name}
                >
                  <img 
                src={social.icon} 
                alt="icono"
                className="w-6 h-6"
              />
                </a>
              ))}
            </ul>
            </div>

            <div>
              <p className="text-base font-medium text-gray-300 text-sm">
                © {currentYear} MiApp. Todos los derechos reservados.
              </p>            
            </div>


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
