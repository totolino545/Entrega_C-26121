import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;