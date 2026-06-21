import CartItem from "../CartItem/CartItem";

function CartList({ cart }) {
  return (
    <div>
      {cart.map((producto) => (
        <CartItem key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default CartList;