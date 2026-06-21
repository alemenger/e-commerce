import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import CartSummary from "../CartSummary/CartSummary";

function CartView() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <section>
      <h2>Carrito</h2>
      <CartList cart={cart} />
      <CartSummary cart={cart} />
    </section>
  );
}

export default CartView;