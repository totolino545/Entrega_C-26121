

function ContactForm() {
  return (
    <div className='font-mono p-15 w-96'>
        <form action="#" className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <div>
                <label className="block text-sm font-medium text-gray-900" for="name">Nombre</label>

                <input className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none" id="name" type="text" placeholder="Tu NOmbre"/>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-900" for="email">Email</label>

                <input className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none" id="email" type="email" placeholder="Tuemail"/>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-900" for="message">Mensaje</label>

                <textarea className="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none" id="message" rows="4" placeholder="Tu Mensaje"></textarea>
            </div>

            <button className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600" type="submit">
                Enviar
            </button>
        </form>
      
    </div>   
  
);
}


export default ContactForm
