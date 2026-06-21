import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";



export const getProducts = async () => {
  const productsCollection = collection(db, "products");
  const snapshot = await getDocs(productsCollection);

return snapshot.docs.map((documento) => ({
  ...documento.data(),
  id: documento.id,
}));
};

export const getProductsByCategory = async (category) => {
  const productsCollection = collection(db, "products");
  const q = query(productsCollection, where("category", "==", category));
  const snapshot = await getDocs(q);

return snapshot.docs.map((documento) => ({
  ...documento.data(),
  id: documento.id,
}));
};

export const getProductById = async (id) => {

  const productRef = doc(db, "products", id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    throw new Error("Producto no encontrado");
  }

  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
};

export const addProduct = async (producto) => {
  const productsCollection = collection(db, "products");

  const response = await addDoc(productsCollection, producto);

  return response.id;
};

export const deleteProduct = async (id) => {
  const productRef = doc(db, "products", id);

  await deleteDoc(productRef);
};

export const updateProduct = async (id, producto) => {
  const productRef = doc(db, "products", id);

  await updateDoc(productRef, producto);
};