import React from "react";
import { FaStar, FaEdit } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { image, name, category, price, rating, brand, _id, main_quantity } =
    product;

  return (
    <>
      <div className="md:pt-5 pt-2">
        <div className="card shadow-xl shadow-secondary rounded-2xl">
          <figure>
            <img src={image} alt={name} className=" w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="badge badge-secondary capitalize text-accent dark:text-gray-300 ">
              {brand}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Available Quantity:</strong> {main_quantity} units
            </p>
            <p>
              <strong>Price:</strong> {price} BDT
            </p>
            <p>
              <span className="text-yellow-500 flex items-center">
                {[...Array(Math.round(rating))].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </span>
            </p>
            <Link
              to={`/update/${_id}`}
              className="card-actions mt-4 justify-end"
            >
              <button className="btn btn-outline btn-primary dark:btn-secondary dark:hover:text-base-100 flex items-center gap-2">
                <FaEdit />
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
