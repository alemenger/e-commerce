import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function Header() {
  return (
    <header className="header">
      <h1>PaceLab</h1>

      <nav>
        <Link to="/">Inicio</Link>

        <Link to="/productos">Productos</Link>

        <Link to="/carrito">
          <CartWidget />
        </Link>
      </nav>
    </header>
  );
}

export default Header;