import React from "react";
import { FaStar } from "react-icons/fa";

import { Link, useLoaderData } from "react-router";

const CategoryWiseProducts = () => {
  const products = useLoaderData();

  return products.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} className="py-10 ">
          <div className="card shadow-xl shadow-secondary">
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className=" w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Product name: {product.name}</h2>
              <p>
                <strong>Brand name:</strong> {product.brand}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Minimum quantity for buy:</strong>{" "}
                {product.min_selling_quantity} units
              </p>
              <p>{product.description}</p>
              <p>
                <strong>Price:</strong> {product.price} BDT
              </p>
              <p>
                <span className="text-yellow-500 flex items-center">
                  {[...Array(Math.round(product.rating))].map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </span>
              </p>
              <Link
                to={`/productDetails/${product._id}`}
                className="card-actions mt-4 justify-end"
              >
                <button className="btn btn-outline btn-primary flex items-center gap-2">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <h1 className="text-center text-2xl md:text-4xl">
      Currently no products available for this category😔😔😔
    </h1>
  );
};

export default CategoryWiseProducts;
