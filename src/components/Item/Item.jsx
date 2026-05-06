import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export function Item({ id, nombre, precio, stock }) {
  const { addToCart } = useContext(CartContext);

  const CompraClick = () => {
    const producto = {
      id,
      nombre,
      precio,
      stock,
    };

    addToCart(producto);

    alert(`¡Agregaste ${nombre} al carrito!`);
  };

  return (
    <div className="product-card">
      <h3>{nombre}</h3>

      <p className="price">Precio: ${precio}</p>

      <p>Stock disponible: {stock}</p>

      <div className="product-buttons">
        <button onClick={CompraClick}>Comprar</button>

        <Link to={`/producto/${id}`}>
          <button>Ver detalle</button>
        </Link>
      </div>
    </div>
  );
}