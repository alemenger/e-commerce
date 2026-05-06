import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

function Productos() {
  return (
    <div>
      <h2>Todos los productos</h2>

      <ItemListContainer Mensaje="Catálogo completo" />
    </div>
  );
}

export default Productos;