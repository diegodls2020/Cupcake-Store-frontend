// src/pages/Products.jsx
import React from 'react';
import ProductList from '../components/ProductList';

const Products = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#355c7d' }}>Nuestros Productos</h2>
      <ProductList />
    </div>
  );
};

export default Products;
