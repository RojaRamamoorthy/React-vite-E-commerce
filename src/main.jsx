import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './App';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import OrderHistory from './components/OrderHistory';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='cart' element={<Cart />} />
            <Route path='product' element={<Products />} />
            <Route path='order-confirmation' element={<OrderConfirmation />} />
            <Route path='orders' element={<OrderHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
