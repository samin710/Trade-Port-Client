import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router";

const ProductTableView = ({ product }) => {
  const { image, name, brand, category, main_quantity, _id } = product;

  return (
    <tr className="border border-black">
      <td>
        <img src={image} alt={name} className="w-16 h-16 rounded" />
      </td>
      <td>{name}</td>
      <td>{brand}</td>
      <td>{category}</td>
      <td>{main_quantity}</td>
      <td>
        {" "}
        <Link to={`/update/${_id}`} className="card-actions justify-end">
          <button className="btn btn-outline btn-primary flex items-center gap-2">
            <FaEdit />
            
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ProductTableView;
