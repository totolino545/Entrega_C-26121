function Pagination({ paginaActual, totalPaginas, cargarPagina, cargando }) {
    // Cantidad de números que queremos mostrar en la botonera
    const maxBotones = 5;


    // Calculamos el rango inicial y final de la ventana dinámica
    let paginaInicial = Math.max(1, paginaActual - Math.floor(maxBotones / 2));
    let paginaFinal = paginaInicial + maxBotones - 1;

    // Ajustamos por si nos pasamos del total de páginas disponibles al final
    if (paginaFinal > totalPaginas) {
        paginaFinal = totalPaginas;
        paginaInicial = Math.max(1, paginaFinal - maxBotones + 1);
    }

    // Creamos el array con los numeros especificos a renderizar
    const paginasAMostrar = [];
    for (let i = paginaInicial; i <= paginaFinal; i++) {
        paginasAMostrar.push(i);
    }

    return (
        <div className="flex justify-center items-center gap-2 text-gray-900">
            <button
                className="grid size-8 place-content-center rounded-lg border border-gray-200 transition-all duration-200
                hover:scale-105 active:scale-95  dark:border-gray-700 dark:hover:bg-blue-600 hover:text-white"
                disabled={paginaActual === 1 || cargando}
                onClick={() => cargarPagina(paginaActual - 1)}
            >
                <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <div className="text-sm/8 font-medium tracking-widest">
                {paginasAMostrar.map((numero) => (
                    <button
                        key={numero}
                        className={`px-3 py-1 rounded-lg border transition-all duration-200
                                ${numero === paginaActual
                                ? "bg-blue-600 text-white border-blue-600 shadow"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                        onClick={() => cargarPagina(numero)}
                        disabled={cargando}
                    >
                        {numero}
                    </button>
                ))}
            </div>

            <button
                className="grid size-8 place-content-center rounded-lg border border-gray-200 transition-all duration-200
                hover:scale-105 active:scale-95  dark:border-gray-700 dark:hover:bg-gray-400"
                disabled={paginaActual === totalPaginas || cargando}
                onClick={() => cargarPagina(paginaActual + 1)}
            >
                <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Pagination