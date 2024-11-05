const handleAddToCart = (product) => {
  setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
          // Si el producto ya está en el carrito, incrementa la cantidad
          return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
      } else {
          // Si el producto no está en el carrito, agrégalo con cantidad 1
          return [...prevCart, { ...product, quantity: 1 }];
      }
  });
};
