import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]); // Carrito de compras

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para realizar el pago (simulación de backend)
  const checkout = async (cartItems) => {
    // Simulación de proceso de pago
    alert("Pago realizado con éxito!");
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} checkout={checkout} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
