import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";

function ItemDetailContainer() {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Producto no encontrado");
        setLoading(false);
      });
  }, [id]);

if (loading) return <p>Cargando detalle...</p>;
if (error) return <p>{error}</p>;

return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;