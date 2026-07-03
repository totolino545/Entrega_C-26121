import { useState, useEffect } from "react";
// Importaciones clave de Firebase
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const productosDB = collection(db, "productos")
        getDocs(productosDB).then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            );
            setCargando(false);
        })
        console.log(productos);
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez

    if (cargando) return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">PROCESANDO</h1>
            <p className="mt-2 text-gray-600">Cargando los productos...</p>
        </div>
    )
    if (error) return <p>Error: {error}</p>;


    return <ItemList productos={productos} />;
};

export default ItemListContainer;
