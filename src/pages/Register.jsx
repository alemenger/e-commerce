import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { Helmet } from "react-helmet-async";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Usuario registrado:", response.user);
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
    }
  }

  return (
    <div>
        <Helmet>
        <title>PaceLab | Registro</title>
        <meta
            name="description"
            content="Creá tu cuenta en PaceLab."
        />
        </Helmet>
      <h2>Registro</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
}

export default Register;