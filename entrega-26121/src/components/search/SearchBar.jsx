import { useBusqueda } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const { busqueda, setBusqueda } = useBusqueda();
    const navigate = useNavigate();

    const manejarBusqueda = (evento) => {
        const valor = evento.target.value;
        setBusqueda(valor);

        if (valor.trim()) {
            navigate("/busqueda");
        }
    };

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto my-auto w-full max-w-xl"
        >
            <div className="relative">

                {/* Icono */}
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>

                {/* Input */}
                <input
                    type="search"
                    id="search"
                    placeholder="Buscar productos..."
                    value={busqueda}
                    onChange={manejarBusqueda}
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 text-gray-700 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />

            </div>
        </form>
    );
};

export default SearchBar;