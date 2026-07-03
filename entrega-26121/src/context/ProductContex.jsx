import { createContext, useContext } from "react";
import { collection, doc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Consumimos el hook generico pasandole la coleccion especifica de este contexto


  // Operaciones CRUD
  const agregarProducto = async (nuevoProd) => {
    await addDoc(collection(db, "productos"), nuevoProd);
    refrescarPagina(); 
  };

  const eliminarProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id));
    refrescarPagina();
  };

  const editarProducto = async (id, datosActualizados) => {
    const ref = doc(db, "productos", id);
    await updateDoc(ref, datosActualizados);
    refrescarPagina();
  };

  return (
    <ProductContext.Provider value={{ 
       eliminarProducto, agregarProducto, editarProducto 
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);