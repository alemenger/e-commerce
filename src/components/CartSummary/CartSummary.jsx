import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartSummary() {
  const { clearCart, getTotal } = useContext(CartContext);

  return (
    <div>
      <h3>Total: ${getTotal()}</h3>

      <button onClick={clearCart}>
        Vaciar carrito
      </button>

      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
}

export default CartSummary;