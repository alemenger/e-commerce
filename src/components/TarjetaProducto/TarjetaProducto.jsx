import styles from "./TarjetaProducto.module.css";

function TarjetaProducto({ imagen, nombre, precio }) {
    return (
        <article className={styles.tarjeta}>
            <img src={imagen} alt={nombre} className={styles.imagen}/>
            <h3 className={styles.nombre}>{nombre}</h3>
            <p className={styles.precio}>${precio}</p>
        </article>
    );
}

export default TarjetaProducto;