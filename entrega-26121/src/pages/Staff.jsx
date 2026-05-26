import React, { useState, useEffect } from 'react';
import styles from './Staff.module.css'

const Staff = () => {

    const [staff, setStaff] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
  
    useEffect(() => {
    // La ruta es relativa a public
    fetch('data/staff.json')
      .then((respuesta) => {
          if (!respuesta.ok) 
            throw new Error("No se pudo cargar la información de las categorias");
          return respuesta.json();
        })
        .then(datos => setStaff(datos))
        .catch(error => setError(error.message))
        .finally(() => setCargando(false))
    }, []);
  return (
    <div className={styles.inicio} >
        <div className='font-mono p-10'>
            <h2 className="font-bold mx-20">
            Detrás de cada pedido hay personas reales. 
            Nos encargamos de que todo funcione: 
            responder tus mensajes, empaquetar con mimo y mejorar la tienda cada día. 
            Detrás de esta pantalla no hay bots, solo ganas de hacerlo bien.
            Si tienes una duda, al otro lado hay alguien que quiere ayudarte.</h2>
        </div>
        <div className="flex flex-col items-center font-mono mb-5">
            <h1 className="text-xl leading-8 md:text-2xl mb-8 max-w-3xl mx-auto">
                Nuestro Staff
            </h1> 
            <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 " >

                    {staff.map((member) => (
                    <div key={member.id} className={styles.card}>
                        <div className={styles.border}>
                        </div>
                        <div className="img">
                            <img 
                            src={member.imagen} 
                            alt={member.alt}
                        />

                        </div>
                        <span> {member.nombre}</span>
                        <p className="m-2">{member.puesto}</p>
                        <p className="m-2">{member.descripcion}</p>
                    </div>
                    ))}

            </div>
        </div>
    </div>
  );
};


export default Staff;