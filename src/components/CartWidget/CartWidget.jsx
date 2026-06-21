import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { getTotalItems } = useContext(CartContext);

  return (
    <div>
      🛒 {getTotalItems()}
    </div>
  );
}

export default CartWidget;