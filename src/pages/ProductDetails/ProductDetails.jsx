import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const {
    name,
    image,
    main_quantity,
    min_selling_quantity,
    brand,
    price,
    rating,
    category,
    description,
  } = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto mt-12 p-6 rounded-2xl shadow-2xl shadow-secondary">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={image}
            alt={name}
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        <div className="space-y-4 text-left">
          <h1 className="text-4xl font-bold text-primary">{name}</h1>

          <div className="badge badge-secondary text-accent py-3 px-4">
            {category}
          </div>

          <p className="text-accent text-lg">
            <strong className="text-primary">Brand:</strong> {brand}
          </p>

          <p className="text-accent text-lg">
            <strong className="text-primary">Price:</strong> {price} BDT
          </p>

          <p className="text-accent text-lg">
            <strong className="text-primary">Available Quantity:</strong>{" "}
            {main_quantity}
          </p>

          <p className="text-accent text-lg">
            <strong className="text-primary">Minimum Order:</strong>{" "}
            {min_selling_quantity}
          </p>

          <div className="flex items-center text-yellow-500 gap-1">
            <strong className="text-primary">Rating:</strong>
            {[...Array(Math.round(rating))].map((_, idx) => (
              <FaStar key={idx} />
            ))}
            <span className="ml-1 text-sm text-gray-500">({rating})</span>
          </div>

          <p className="text-accent pt-3">
            <strong className="text-primary block mb-1">Description:</strong>
            {description}
          </p>

          <div className="pt-6">
            <button className="btn btn-primary btn-wide text-lg font-semibold rounded-xl shadow-md transition-all hover:scale-105">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
