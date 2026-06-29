import React, { useState, useEffect } from 'react';
import styles from './Inicio.module.css'

const Inicio = () => {

    const [category, setCategory] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
  
    useEffect(() => {
    // La ruta es relativa a public
    fetch('data/category.json')
      .then((respuesta) => {
          if (!respuesta.ok) 
            throw new Error("No se pudo cargar la información de las categorias");
          return respuesta.json();
        })
        .then(datos => setCategory(datos))
        .catch(error => setError(error.message))
        .finally(() => setCargando(false))
    }, []);
  return (
    <div className={styles.inicio} >
      <div className='font-mono p-4'>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bienvenido a{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
            TechStore
          </span>
        </h1>
        <p className="text-xl leading-8 md:text-2xl mb-8 max-w-3xl mx-auto">
            Somos más que una tienda online. Somos tu aliado cibernético
            para conseguir los mejores productos al mejor precio. </p>
        <p className="text-2xl leading-8 md:text-xl mb-8 max-w-3xl mx-auto">    
            "Nuestra prioridad es tu satisfacción. Cada producto que vendemos 
            ha sido cuidadosamente seleccionado para garantizar la mejor experiencia 
            de compra posible."
        </p>

      </div>
      <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold">
                Categorias
              </h3> 
              <div className="flex flex-row " >
                <div className="flex gap-6">
                  {category.map((cat) => (
                    <a
                      key={cat.category}
                      href=""         
                      aria-label={cat.category}
                    >
                      <img 
                        src={cat.image} 
                        alt="icono"
                        className="h-32 m-4 rounded-t-lg "
                      />
                      <p className=' font-mono text-center'>{cat.category}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

    </div>
  );
};

export default Inicio;