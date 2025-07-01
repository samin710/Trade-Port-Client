import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const {
    image,
    name,
    price,
    rating,
    brand,
    _id,
    main_quantity,
    min_selling_quantity,
  } = product;

  return (
    <>
      <div className="md:pt-5 pt-2">
        <div className="card shadow-xl h-full shadow-secondary rounded-2xl">
          <figure>
            <img src={image} alt={name} className=" w-full object-cover" />
          </figure>
          <div className="card-body">
            <div className="flex">
              {" "}
              <h2 className="card-title flex-3/2">{name}</h2>
              <p className="badge badge-secondary capitalize text-accent dark:text-gray-300 flex-1/2">
                {brand}
              </p>
            </div>
            <p>
              <strong>Available Quantity:</strong> {main_quantity} units
            </p>
            <p>
              <strong>Minimum Selling Quantity:</strong> {min_selling_quantity}{" "}
              units
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
              to={`/productDetails/${_id}`}
              className="card-actions mt-4 justify-end"
            >
              <button className="btn btn-outline btn-primary dark:btn-secondary dark:hover:text-base-100 flex items-center gap-2">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
