import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router";

const ProductTableView = ({ product }) => {
  const { image, name, brand, category, main_quantity, _id } = product;

  return (
    <tr className="border-b border-secondary hover:bg-secondary transition-colors duration-700 ease-in-out">
      <td className="py-3 px-4">
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-lg shadow-md object-cover"
          />
        </div>
      </td>
      <td className="py-3 px-4 font-semibold text-gray-800">{name}</td>
      <td className="py-3 px-4 text-gray-600">{brand}</td>
      <td className="py-3 px-4 text-gray-600">{category}</td>
      <td className="py-3 px-4 text-gray-600">{main_quantity}</td>
      <td className="py-3 px-4">
        <Link to={`/update/${_id}`}>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition">
            <FaEdit />
            Update
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ProductTableView;
