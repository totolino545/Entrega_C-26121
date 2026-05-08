import { useState, useEffect } from "react";
import ItemList from "./ItemList"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    fetch('/data/products.json')
      .then(respuesta => respuesta.json())
      .then(data => setProductos(data))
      .catch(error => console.error(error))
  }, []);

  return <ItemList productos={productos} />
}

export default ItemListContainer