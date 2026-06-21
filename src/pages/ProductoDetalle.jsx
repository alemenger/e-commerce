import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { Helmet } from "react-helmet-async";

function ProductoDetalle() {
  return (
    <>
      <Helmet>
        <title>PaceLab | Detalle del producto</title>
        <meta
          name="description"
          content="Detalle del producto seleccionado en PaceLab."
        />
      </Helmet>

      <ItemDetailContainer />
    </>
  );
}

export default ProductoDetalle;