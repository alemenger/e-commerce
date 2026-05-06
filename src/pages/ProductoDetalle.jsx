import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductoDetalle() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const productoEncontrado = data.find(
          (item) => item.id === Number(id)
        );

        setProducto(productoEncontrado);
      })
      .catch((err) => console.log("Error:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;

  if (!producto) return <p>Producto no encontrado.</p>;

  const agregarAlCarrito = () => {
    addToCart({
      id: producto.id,
      nombre: producto.title,
      precio: producto.price,
      stock: producto.stock || 10,
    });

    alert(`Agregaste ${producto.title} al carrito`);
  };

  return (
    <div>
      <h2>{producto.title}</h2>

      <img
        src={producto.image}
        alt={producto.title}
        style={{ width: "250px", borderRadius: "8px" }}
      />

      <p>{producto.description}</p>

      <p>Precio: ${producto.price}</p>

      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
}

export default ProductoDetalle;