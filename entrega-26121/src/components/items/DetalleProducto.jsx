import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "./CardProduct";

const DetalleProducto = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    fetch("/data/products.json")
      .then(response => response.json())
      .then(data => {
        const productoEncontrado = data.find(p => p.id === parseInt(id));
        setProduct(productoEncontrado);
      })
      .catch(error => console.error("Error al cargar el producto:", error));
  }, [id]);
  
  if (!product) return <h2>Cargando detalle del producto...</h2>;

  if (!product.id) return <h2>Producto no encontrado.</h2>;
  
  return (
    <div className="flex flex-col  items-center m-4 p-4 gap-8">
      <h2>Descripcion del producto</h2>
      <p>{product.description}</p>
      <CardProduct {...product} /> 
    </div>
  );
};
export default DetalleProducto;
