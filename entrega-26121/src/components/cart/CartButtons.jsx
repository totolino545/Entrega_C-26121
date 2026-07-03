import { useState, useEffect } from 'react';

const CartButtons = ({ cantidad, incrementar, decrementar, stock }) => {

  return (

    <div className="flex justify-center items-center text-pretty text-gray-700">
      
      <button className="size-10 leading-10 text-gray-400 transition hover:text-black" onClick={decrementar}> - </button>
      <p className="h-8 w-8 text-center py-2 rounded-sm border-gray-300 bg-white text-xs text-gray-700">{cantidad}</p>
      <button className="size-10 leading-10 text-gray-400 transition hover:text-black" onClick={incrementar}> + </button>
    </div>
  )
}

export default CartButtons

