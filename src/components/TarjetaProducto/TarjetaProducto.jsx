import styles from "./TarjetaProducto.module.css";

function TarjetaProducto({ image, title, price }) {
  return (
    <article className={styles.tarjeta}>
      <img src={image} alt={title} className={styles.imagen} />

      <h3 className={styles.nombre}>{title}</h3>

      <p className={styles.precio}>${price}</p>
    </article>
  );
}

export default TarjetaProducto;