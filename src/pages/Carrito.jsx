import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Carrito() {
  const { cart, removeFromCart, totalPrice } =
    useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((producto) => (
            <div
              key={producto.id}
              style={{
                border: "1px solid gray",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>{producto.nombre}</h3>

              <p>Precio: ${producto.precio}</p>

              <button
                onClick={() => removeFromCart(producto.id)}
              >
                Eliminar
              </button>
            </div>
          ))}

          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Carrito;