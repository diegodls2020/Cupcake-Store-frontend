// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

const products = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  name: `Cupcake ${index + 1}`,
  price: (Math.random() * 5 + 3).toFixed(2),
  image: `https://via.placeholder.com/150?text=Cupcake+${index + 1}`,
}));

const ProductList = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', padding: '2rem' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
