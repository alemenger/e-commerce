import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemDetail({ producto }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(producto);
    alert(`¡Agregaste ${producto.title} al carrito!`);
  };

  return (
    <div>
      <h2>{producto.title}</h2>

      <img
        src={producto.image}
        alt={producto.title}
        className="product-image"
      />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>Stock disponible: {producto.stock}</p>

      <button onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetail;