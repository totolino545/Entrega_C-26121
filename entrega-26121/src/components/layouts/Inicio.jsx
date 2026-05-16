import React from 'react';

const Inicio = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bienvenido a{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
            TechStore
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Somos más que una tienda online. Somos tu aliado cibernético
            para conseguir los mejores productos al mejor precio.
            "Nuestra prioridad es tu satisfacción. Cada producto que vendemos 
             ha sido cuidadosamente seleccionado para garantizar la mejor experiencia 
             de compra posible."
        </p>

      </div>
    </div>
  );
};

export default Inicio;