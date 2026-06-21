import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home.jsx";
import Productos from "./pages/Productos.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import Carrito from "./pages/Carrito.jsx";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import AuthProvider from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Admin from "./pages/Admin";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/productos" element={<Productos />} />

            <Route path="/category/:category" element={<Productos />} />

            <Route path="/producto/:id" element={<ProductoDetalle />} />

            <Route path="/carrito" element={<Carrito />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/login" element={<Login />} />

            <Route path="*" element={<h2>Página no encontrada</h2>} />

            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          </Routes>
        </main>

        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;