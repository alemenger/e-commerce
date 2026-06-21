import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartItem({ producto }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h3>{producto.title}</h3>

      <p>Precio: ${producto.price}</p>

      <p>Cantidad: {producto.quantity || 1}</p>

      <button onClick={() => removeFromCart(producto.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;