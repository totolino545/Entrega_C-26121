import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { ProductosProvider } from './context/ProductContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SearchProvider>
    <AuthProvider>
      <ProductosProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductosProvider>
    </AuthProvider>
    </SearchProvider>
  </BrowserRouter>
)