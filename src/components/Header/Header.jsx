import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function Header() {
  return (
      <header className="header">
      <Link to="/" className="logo">
        PaceLab
      </Link>

      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/productos">Productos</NavLink>

        <NavLink to="/carrito">
          <CartWidget />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;