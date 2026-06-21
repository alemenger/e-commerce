import { Container, Row, Col } from "react-bootstrap";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>PaceLab | Inicio</title>
        <meta
          name="description"
          content="PaceLab - Tienda online de relojes deportivos, zapatillas e indumentaria."
        />
      </Helmet>

      <Container>
        <Row>
          <Col>
            <section className="hero">
              <h2>Equipamiento para runners</h2>
              <p>
                Corré mejor, recuperá mejor y preparate para tu próximo desafío.
              </p>
            </section>
          </Col>
        </Row>

        <Row>
          <Col>
            <section className="catalogo">
              <ItemListContainer />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;