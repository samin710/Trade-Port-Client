import React from "react";
import { FaStar, FaEdit } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { image, name, category, price, rating } = product;
  return (
    <>
      <div className="py-10 ">
        <div className="card shadow-xl shadow-secondary">
          <figure>
            <img src={image} alt={name} className=" w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              <strong>Category:</strong> {category}
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
            <div className="card-actions mt-4 justify-end">
              <button className="btn btn-outline btn-primary flex items-center gap-2">
                <FaEdit />
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
