export function Item({ nombre, precio, stock }) {
    const CompraClick = () => {// Quiero que se ejecute cuando le doy clic 
        alert(`¡Agregaste ${nombre} al chango!`);
    };
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p> 
            {/* Cuando le boton detecta un clic (onClick), se ejecuta la función */}
            <button onClick={CompraClick}>Comprar</button>
        </div>
    );
}