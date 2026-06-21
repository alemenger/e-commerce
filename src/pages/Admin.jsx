import { useEffect, useState } from "react";
import { Modal, Button, Spinner, Alert } from "react-bootstrap";
import {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from "../services/productsService";
import { FaEdit, FaTrash, FaPlus, FaSave } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import {
  AdminContainer,
  AdminTitle,
  ProductCard,
  PrimaryButton,
} from "../styles/StyledComponents";

function Admin() {
  const [producto, setProducto] = useState({
    title: "",
    price: "",
    category: "",
    stock: "",
    image: "",
    description: "",
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  async function cargarProductos() {
    setLoading(true);
    setError("");

    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setError("No se pudieron cargar los productos.");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setProducto({
      ...producto,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!producto.title || Number(producto.price) <= 0) {
      alert("El nombre es obligatorio y el precio debe ser mayor a 0");
      return;
    }

    const nuevoProducto = {
      ...producto,
      price: Number(producto.price),
      stock: Number(producto.stock),
    };

    try {
      if (editingId) {
        await updateProduct(editingId, nuevoProducto);
        alert("Producto actualizado correctamente");
        setEditingId(null);
      } else {
        await addProduct(nuevoProducto);
        alert("Producto agregado correctamente");
      }

      await cargarProductos();

      setProducto({
        title: "",
        price: "",
        category: "",
        stock: "",
        image: "",
        description: "",
      });
    } catch (error) {
      alert("Error al guardar el producto");
      console.error(error);
    }
  }

  function handleDeleteClick(product) {
    setProductToDelete(product);
    setShowModal(true);
  }

  async function confirmDelete() {
    if (!productToDelete) return;

    try {
      await deleteProduct(productToDelete.id);
      await cargarProductos();
      setShowModal(false);
      setProductToDelete(null);
      alert("Producto eliminado correctamente");
    } catch (error) {
      alert("Error al eliminar el producto");
      console.error(error);
    }
  }

  function handleEdit(product) {
    setEditingId(product.id);

    setProducto({
      title: product.title,
      price: product.price,
      category: product.category,
      stock: product.stock,
      image: product.image,
      description: product.description,
    });
  }

  return (
    <AdminContainer>
      <Helmet>
        <title>PaceLab | Panel de administración</title>
        <meta
          name="description"
          content="Administración de productos de PaceLab."
        />
      </Helmet>

      <AdminTitle>Panel de Administración</AdminTitle>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Nombre del producto"
          value={producto.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={producto.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={producto.category}
          onChange={handleChange}
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={producto.stock}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="URL de imagen"
          value={producto.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={producto.description}
          onChange={handleChange}
        />

        <PrimaryButton type="submit">
          {editingId ? (
            <>
              <FaSave /> Guardar cambios
            </>
          ) : (
            <>
              <FaPlus /> Agregar producto
            </>
          )}
        </PrimaryButton>
      </form>

      <hr />

      {loading && (
        <div className="text-center my-3">
          <Spinner animation="border" variant="primary" />
          <p>Cargando productos...</p>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <h3>Productos</h3>

      {products.map((product) => (
        <ProductCard key={product.id}>
          <h4>{product.title}</h4>

          <p>Precio: ${product.price}</p>
          <p>Categoría: {product.category}</p>
          <p>Stock: {product.stock}</p>

          <button onClick={() => handleEdit(product)}>
            <FaEdit size={20} /> Editar
          </button>

          <button onClick={() => handleDeleteClick(product)}>
            <FaTrash /> Eliminar
          </button>
        </ProductCard>
      ))}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar eliminación</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          ¿Seguro que querés eliminar <strong>{productToDelete?.title}</strong>?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>

          <Button variant="danger" onClick={confirmDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </AdminContainer>
  );
}

export default Admin;