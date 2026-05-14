import styles from './Footer.module.css';

const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.footerNav}>
          <li>
            <a href="#acerca" className={styles.footerLink}>
              Acerca de Nosotros
            </a>
          </li>
          <li>
            <a href="#privacidad" className={styles.footerLink}>
              Política de Privacidad
            </a>
          </li>
        </ul>
      </nav>

      <hr className={styles.divider} />
      {/* Sección de Copyright */}
      <div className={styles.copyrightContainer}>
        <p className={styles.copyright}>
          © {anioActual} <span className={styles.brand}>Tienda de JUANCHO</span>. 
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
