import CartView from "../components/CartView/CartView";
import { Helmet } from "react-helmet-async";
function Carrito() {
  return (
    <>
      <Helmet>
        <title>PaceLab | Carrito</title>
        <meta
          name="description"
          content="Revisá los productos agregados a tu carrito de compras."
        />
      </Helmet>
      <CartView />
    </>
  );
}

export default Carrito;