import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para realizar el pago (simulación de backend)
  const checkout = async (cartItems) => {
    setLoading(true);
    setPaymentStatus(null);

    try {
      // Simulación de la llamada al backend (puedes cambiarla por una API real)
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();

      if (response.ok) {
        setPaymentStatus('success');
        alert('Pago realizado con éxito!');
      } else {
        setPaymentStatus('error');
        alert('Hubo un error al realizar el pago');
      }
    } catch (error) {
      setPaymentStatus('error');
      console.error('Error al realizar el pago:', error);
      alert('Error de conexión al servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage cart={cart} checkout={checkout} />} />
      </Routes>
      <Footer />
      
      {/* Mostrar el estado de carga y pago */}
      {loading && <p>Procesando pago...</p>}
      {paymentStatus === 'error' && <p style={{ color: 'red' }}>Hubo un error con el pago</p>}
      {paymentStatus === 'success' && <p style={{ color: 'green' }}>Pago realizado con éxito</p>}
    </Router>
  );
};

export default App;
