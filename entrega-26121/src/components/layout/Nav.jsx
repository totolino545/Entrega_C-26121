import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li>
          <a to="/tecnologia" className={styles.navLink}>
           PlayStation
          </a>
        </li>
        <li>
          <a to="/moda" className={styles.navLink}>
            PC
          </a>
        </li>
        <li>
          <a to="/moda" className={styles.navLink}>
            Xbox
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;