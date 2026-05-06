import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

function Home() {
  return (
    <>
      <section className="hero">
        <h2>Equipamiento para runners</h2>
        <p>Corré mejor, recuperá mejor y preparate para tu próximo desafío.</p>
      </section>

      <section className="catalogo">
        <ItemListContainer Mensaje="Productos destacados" />
      </section>
    </>
  );
}

export default Home;