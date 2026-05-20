import React from 'react';
import styles from './Inicio.module.css'

const Inicio = () => {
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
    </div>
  );
};

export default Inicio;