import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      🛒 {cart.length}
    </div>
  );
}

export default CartWidget;