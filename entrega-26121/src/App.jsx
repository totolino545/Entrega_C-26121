import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import DetalleProducto from './components/items/DetalleProducto';
import ItemListContainer from './components/items/ItemListContainer';
import FormContainer from './components/items/FormContainer';
import './App.css';
import Mensajito from './components/Mensajito';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<h1>Inicio</h1>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/mensajito' element={<Mensajito/>} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          </Route>
        </Routes>
      <ItemListContainer />
      <FormContainer /> 
    </>   
  );
}

export default App;
