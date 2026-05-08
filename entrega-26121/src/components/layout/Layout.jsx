import Contador from "../Contador"
import FormContainer from "../items/FormContainer"
import ItemListContainer from "../items/ItemListContainer"
import estilo from "./Layout.module.css"

const Layout = () => {
  return(
    <>
      <h1 className={estilo.titulo}>Ferreteria de Juancho</h1>
      <h2 className={estilo.productos}>Probando Producto</h2>
      <ItemListContainer />
      <FormContainer />
    </>
  )
}

export default MainLayout
