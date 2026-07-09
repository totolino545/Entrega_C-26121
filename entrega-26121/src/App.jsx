import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Inicio from './pages/Inicio';
import Staff from './pages/Staff';
import Login from './pages/Login';
import Registro from './pages/Registro';
import DetalleProducto from './components/items/DetalleProducto';
import RutasProtegidas from './components/RutasProtegidas';
import ContactForm from './components/forms/ContactForm';
import GestionForm from './components/forms/GestionForm';
import Results from './components/search/Results';
import ItemListContainer from './components/items/ItemListContainer';
import './App.css';
import Contacto from './pages/Contacto';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/contacto' element={<ContactForm/>}/>
          <Route path='/gestion' element={
              <RutasProtegidas rolesPermitidos={["admin"]}>
                <GestionForm />
              </RutasProtegidas>
            } />
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/staff' element={<Staff/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registro' element={<Registro/>} />
          <Route path='/busqueda' element={<Results/>} />
          <Route path='/carrito' element={<Cart/>} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
        </Route>
      </Routes>
    </div>   
  );
}

export default App;
