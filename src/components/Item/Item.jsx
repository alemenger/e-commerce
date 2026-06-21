import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export function Item({ id, title, description, image, price, stock }) {
  const { addToCart } = useContext(CartContext);

  const CompraClick = () => {
    const producto = {
      id,
      title,
      description,
      image,
      price,
      stock,
    };

    addToCart(producto);

    alert(`¡Agregaste ${title} al carrito!`);
  };
  
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />

      <h3>{title}</h3>

      <p>{description}</p>

      <p className="price">Precio: ${price}</p>

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