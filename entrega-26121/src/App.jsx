import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Inicio from './pages/Inicio';
import DetalleProducto from './components/items/DetalleProducto';
import ItemListContainer from './components/items/ItemListContainer';
import './App.css';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos' element={<ItemListContainer/>} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
        </Route>
      </Routes>
    </div>   
  );
}

export default App;
