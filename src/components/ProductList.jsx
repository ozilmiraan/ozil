// src/components/ProductList.jsx
import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a short description of product 1.',
      price: 10.99,
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is a short description of product 2.',
      price: 20.99,
      image: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
