import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import {
  getProducts,
  getProductsByCategory,
} from "../../services/productsService";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const promise = category
      ? getProductsByCategory(category)
      : getProducts();

    promise
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [category]);


  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};