// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#f8b195', padding: '1rem', display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
      <h1>Cupcake Store</h1>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} /> Carrito
        </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
