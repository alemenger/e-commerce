import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
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

            <Route path="/productos" element={<Products />} />
            
            <Route path="/category/:category" element={<Products />} />

            <Route path="/producto/:id" element={<ProductDetail />} />

            <Route path="/carrito" element={<Cart />} />

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