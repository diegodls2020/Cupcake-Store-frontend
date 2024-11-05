import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import cremaImg from '../assets/crema.jpg';
import chocolateImg from '../assets/chocolate.jpg';
import amendoImg from '../assets/amendo.jpg';
import docedeleiteImg from '../assets/doce de leite.jpg';

const Products = ({ addToCart }) => {
  const [quantities, setQuantities] = useState({});
  
  // Lista de productos
  const products = [
    { id: 1, name: 'Cupcake de Vainilla', price: 5.00, image: cremaImg },
    { id: 2, name: 'Cupcake de Chocolate', price: 5.00, image: chocolateImg },
    { id: 3, name: 'Cupcake de Almendra', price: 5.00, image: amendoImg },
    { id: 4, name: 'Cupcake de Dulce de Leche', price: 5.00, image: docedeleiteImg },
    { id: 5, name: 'Cupcake de Fresa', price: 5.50, image: cremaImg },
    { id: 6, name: 'Cupcake de Limón', price: 4.80, image: chocolateImg },
    { id: 7, name: 'Cupcake de Nuez', price: 6.00, image: amendoImg },
    { id: 8, name: 'Cupcake de Menta', price: 5.20, image: docedeleiteImg },
  ];

  const handleQuantityChange = (productId, delta) => {
    setQuantities(prev => {
      const newQuantity = (prev[productId] || 0) + delta;
      return newQuantity >= 0 ? { ...prev, [productId]: newQuantity } : prev;
    });
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={quantities[product.id] || 0}
          onQuantityChange={(delta) => handleQuantityChange(product.id, delta)}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Products;
