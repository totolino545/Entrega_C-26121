
// Importaciones clave de Firebase
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useProductos } from '../../context/ProductContext';
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const { productos, cargando, paginaActual, totalPaginas, cargarPagina } = useProductos();

    if (cargando && productos.length === 0) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">PROCESANDO</h1>
                <p className="mt-2 text-gray-600">Cargando los productos...</p>
            </div>
        );
    }



    return <ItemList productos={productos} cargando={cargando} paginaActual={paginaActual} totalPaginas={totalPaginas} cargarPagina={cargarPagina} />;
};

export default ItemListContainer;
