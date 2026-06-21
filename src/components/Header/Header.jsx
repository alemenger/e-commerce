import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <Link to="/" className="logo">
        PaceLab
      </Link>

      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/productos">Todos</NavLink>
        <NavLink to="/category/relojes">Relojes</NavLink>
        <NavLink to="/category/zapatillas">Zapatillas</NavLink>
        <NavLink to="/category/indumentaria">Indumentaria</NavLink>

        {user ? (
          <>
            <span>Hola, {user.email}</span>
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Registro</NavLink>
          </>
        )}

        <NavLink to="/carrito">
          <CartWidget />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;