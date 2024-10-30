// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ backgroundColor: '#ffcbcb', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button style={{ backgroundColor: '#f8b195', border: 'none', padding: '0.5rem 1rem', color: '#fff', borderRadius: '5px' }}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
