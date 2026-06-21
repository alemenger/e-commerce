import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

function Productos() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Helmet>
        <title>PaceLab | Productos</title>
        <meta
          name="description"
          content="Explorá nuestro catálogo de relojes deportivos, zapatillas e indumentaria."
        />
      </Helmet>

      <div>
        <h2>Todos los productos</h2>

        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ItemListContainer searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default Productos;