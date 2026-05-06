import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Productos from "./pages/Productos.jsx";
import Home from "./pages/Home.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import Carrito from "./pages/Carrito.jsx";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
  <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="producto/:id" element={<ProductoDetalle />} />
          <Route path="carrito" element={<Carrito />} />
        </Route>
      </Routes>
    </CartProvider>
  </BrowserRouter>
  );
}

export default App;