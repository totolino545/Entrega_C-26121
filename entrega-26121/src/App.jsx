import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Inicio from './pages/Inicio';
import Staff from './pages/Staff';
import Pendiente from './pages/Pendiente';
import DetalleProducto from './components/items/DetalleProducto';
import ContactForm from './components/forms/ContactForm';
import ItemListContainer from './components/items/ItemListContainer';
import './App.css';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/contacto' element={<ContactForm/>}/>
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path='/staff' element={<Staff/>} />
          <Route path='/pendiente' element={<Pendiente/>} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
        </Route>
      </Routes>
    </div>   
  );
}

export default App;
