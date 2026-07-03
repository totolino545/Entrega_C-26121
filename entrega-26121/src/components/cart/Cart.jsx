import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartButtons from "./CartButtons";


function Cart() {
    // Traemos la función del contexto

    const { cart, clearCart, getCartTotal, addToCart, getCantidadActual, updateQuantity, removeItem } = useCart();

    if (cart.length === 0) {
        return (
             <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">El carrito está vacío</h1>
                <p className="mt-2 text-gray-600">Agregá productos para continuar la compra.</p>
                <Link to="/productos" className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                    Ver Productos
                </Link>
            </div>
        );
    };
    const incrementar = (itemId, currentQuantity, stock) => {
        if (currentQuantity < stock) {
            updateQuantity(itemId, currentQuantity + 1);
        }
    };
    const decrementar = (itemId, currentQuantity) => {
        if (currentQuantity > 1) {
            updateQuantity(itemId, currentQuantity - 1);

        }
    };

    const handleUpdateQuantity = (itemId, newQuantity) => {
        updateQuantity(itemId, newQuantity);
        console.log(newQuantity);
    };

       return (
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            {/* Lista de productos */}
            <div className="space-y-4">
                {cart.map(item => (
                    <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            {/* Imagen y título */}
                            <div className="flex items-center gap-3 sm:w-2/5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-12 w-12 flex-shrink-0 rounded-md object-cover p-1 sm:h-16 sm:w-16"
                                />
                                <p className="line-clamp-2 text-sm font-medium text-gray-900 sm:text-base">
                                    {item.title}
                                </p>
                            </div>

                            {/* Controles y precios */}
                            <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-1 sm:justify-end sm:gap-4">
                                {/* Botones de cantidad */}
                                <div className="flex items-center gap-2">
                                    <CartButtons
                                        itemId={item.id}
                                        stock={item.stock || 10}
                                        incrementar={() => incrementar(item.id, item.quantity, item.stock || 10)}
                                        decrementar={() => decrementar(item.id, item.quantity)}
                                        cantidad={item.quantity}
                                    />
                                </div>

                                {/* Precios */}
                                <dl className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600 sm:gap-x-4 sm:text-sm">
                                    <div className="flex items-center gap-1">
                                        <dt className="font-medium">Precio:</dt>
                                        <dd>U$S {item.price.toFixed(2)}</dd>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <dt className="font-medium">Parcial:</dt>
                                        <dd className="font-semibold text-gray-900">
                                            U$S {(item.price * item.quantity).toFixed(2)}
                                        </dd>
                                    </div>
                                </dl>

                                {/* Botón eliminar */}
                                <button
                                    className="text-gray-400 transition hover:text-red-600"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <span className="sr-only">Eliminar item</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Resumen y acciones */}
            <div className="mt-8 space-y-6 border-t border-gray-200 pt-8">
                <dl className="ml-auto max-w-xs space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>U$S {getCartTotal().toFixed(2)}</dd>
                    </div>
                    <div className="flex justify-between">
                        <dt>Descuento</dt>
                        <dd>U$S 0.00</dd>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-semibold text-gray-900">
                        <dt>Total</dt>
                        <dd>U$S {getCartTotal().toFixed(2)}</dd>
                    </div>
                </dl>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                    <Link
                        to="/productos"
                        className="inline-block rounded-md border border-gray-300 bg-white px-5 py-3 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                    >
                        Seguir comprando
                    </Link>
                    <a
                        href="#"
                        className="inline-block rounded-md border border-blue-600 bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-blue-700 hover:bg-blue-700"
                    >
                        Finalizar compra
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cart;