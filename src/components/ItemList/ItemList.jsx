import { Item } from "../Item/Item";

export function ItemList({ products = [] }) {
  return (
    <div>
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          nombre={product.title}
          precio={product.price}
          stock={product.stock || 10}
        />
      ))}
    </div>
  );
}