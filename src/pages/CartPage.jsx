import React from 'react';

const CartPage = ({ cart, checkout }) => {
  // Función para obtener el total del carrito
  const getTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;  // Calculamos el total sumando cada producto
    }, 0);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#355c7d' }}>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center' }}>El carrito está vacío.</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            width: '100%',
          }}
        >
          {cart.map((item, index) => {
            const totalItem = item.price * item.quantity; // Total de cada item

            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1rem',
                  width: '80%',
                  backgroundColor: '#fff',
                  marginBottom: '1rem', // Espaciado entre los productos
                }}
              >
                {/* Verificamos que la imagen exista */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '8px',
                    marginRight: '1rem',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  {/* Asegurándonos de mostrar el precio con el formato correcto */}
                  <p>Precio: R${item.price.toFixed(2)}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p><strong>Total: R${totalItem.toFixed(2)}</strong></p>
                </div>
              </div>
            );
          })}
          <h3 style={{ textAlign: 'center' }}>Total del Carrito: R${getTotal().toFixed(2)}</h3>
          
          {/* Agregar el botón de "Realizar Pago" */}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button onClick={() => checkout(cart)} style={buttonStyles}>
              Realizar Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Estilos del botón de pago
const buttonStyles = {
  padding: '0.8rem 2rem',
  fontSize: '1.2rem',
  backgroundColor: '#f6c8ef',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

export default CartPage;
