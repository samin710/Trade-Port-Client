import React, { useState } from "react";
import { FaStar, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const MyProductCard = ({ product }) => {
  const [visibleProduct, setVisibleProduct] = useState(product);

  const axiosSecure = useAxiosSecure();

  const handleRemove = (id) => {
    axiosSecure
      .delete(`/products/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          setVisibleProduct(null);
          toast.success("Delete Successfully!");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!");
      });
  };

  if (!visibleProduct) return null;

  const { image, name, category, price, rating, brand, _id } = visibleProduct;

  return (
    <>
      <div className="pb-10 ">
        <div className="card shadow-xl shadow-secondary">
          <figure>
            <img src={image} alt={name} className=" w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{brand}</p>
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
            <div className="flex items-center justify-between mt-3 md:mt-5">
              <Link to={`/update/${_id}`} className="card-actions">
                <button className="btn btn-outline btn-primary flex items-center gap-2">
                  <FaEdit />
                  Update
                </button>
              </Link>
              <div>
                <button
                  onClick={() => handleRemove(_id)}
                  className="btn btn-outline btn-primary flex items-center gap-2"
                >
                  <FaTrashAlt className="mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProductCard;
