import "./App.css";
import Layout from "./components/Layout/Layout";
import TarjetaProducto from "./components/TarjetaProducto/TarjetaProducto";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Layout>
      <section className="hero">
        <h2>Descubrí nuestros productos</h2>
        <p>Calidad y tecnología al mejor precio</p>
      </section>

      <section className="catalogo">
        <ItemListContainer Mensaje="Nuestros productos destacados" />
      </section>
    </Layout>
  );
}

export default App;