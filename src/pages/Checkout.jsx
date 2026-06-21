import { useContext, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  writeBatch,
} from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { Helmet } from "react-helmet-async";
function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const total = cart.reduce((acc, producto) => {
      return acc + producto.price * (producto.quantity || 1);
    }, 0);

    const order = {
      buyer,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, order);

    const batch = writeBatch(db);

    cart.forEach((producto) => {
      const productRef = doc(db, "products", producto.id);

      batch.update(productRef, {
        stock: producto.stock - (producto.quantity || 1),
      });
    });

    await batch.commit();

    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return (
      <section>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: {orderId}</p>
      </section>
    );
  }

  return (
    <section>
        <Helmet>
        <title>PaceLab | Checkout</title>
        <meta
        name="description"
        content="Finalizá tu compra de forma rápida y segura."
        />
        </Helmet>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
        />

        <button type="submit">Crear orden</button>
      </form>
    </section>
  );
}

export default Checkout;