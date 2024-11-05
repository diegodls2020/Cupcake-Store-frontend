import React from 'react';
import '../App.css'

const ProductCard = ({ product, quantity, onQuantityChange, onAddToCart }) => {
  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image,
      });
    }
  };

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">
        Precio: R${product.price.toFixed(2)}
      </p>

      <div className="quantity-controls">
        <button
          onClick={() => onQuantityChange(1)}
          className="quantity-btn"
        >
          +
        </button>
        <span className="quantity-display">{quantity}</span>
        <button
          onClick={() => onQuantityChange(-1)}
          className="quantity-btn"
          disabled={quantity <= 0}
        >
          -
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="add-to-cart-btn"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
