import "./App.css";
import Layout from "./components/Layout/Layout";
import TarjetaProducto from "./components/TarjetaProducto/TarjetaProducto";

function App() {
  return (
    <Layout>
      <section className="hero">
        <h2>Descubrí nuestros productos</h2>
        <p>Calidad y tecnología al mejor precio</p>
      </section>

      <section className="catalogo">
        <TarjetaProducto
          imagen="https://placehold.co/200x180"
          nombre="Auriculares Pro"
          precio="59999"
        />

        <TarjetaProducto
          imagen="https://placehold.co/200x180"
          nombre="Smartwatch X"
          precio="89999"
        />

        <TarjetaProducto
          imagen="https://placehold.co/200x180"
          nombre="Teclado Mecánico"
          precio="45500"
        />
      </section>
    </Layout>
  );
}

export default App;