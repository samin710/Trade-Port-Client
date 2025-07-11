import React from "react";
import { Link } from "react-router";

const ProductTableView = ({ product }) => {
  const { image, name, brand, main_quantity, _id, min_selling_quantity } =
    product;

  return (
    <tr className="border-b border-secondary transition-all duration-500 ease-in-out">
      <td className="py-3 px-4">
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-lg shadow-md object-cover"
          />
        </div>
      </td>
      <td className="py-3 px-4 font-semibold ">{name}</td>
      <td className="py-3 px-4 ">{brand}</td>
      <td className="py-3 px-4 ">{main_quantity}</td>
      <td className="py-3 px-4 ">{min_selling_quantity}</td>
      <td className="py-3 px-4">
        <Link to={`/productDetails/${_id}`}>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:scale-105 dark:bg-secondary dark:text-base-100 transition-all duration-500 ease-in-out">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ProductTableView;
