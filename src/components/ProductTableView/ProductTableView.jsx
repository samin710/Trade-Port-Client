import React from "react";

const ProductTableView = ({ product }) => {
  const { image, name, brand, category, min_selling_quantity } = product;

  return (
    <tr>
      <td>
        <img src={image} alt={name} className="w-16 h-16 rounded" />
      </td>
      <td>{name}</td>
      <td>{brand}</td>
      <td>{category}</td>
      <td>{min_selling_quantity}</td>
    </tr>
  );
};

export default ProductTableView;
