import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Precio: ${product.price} - Stock: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;