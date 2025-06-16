import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import { motion } from "framer-motion";

const CategoryWiseProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://b2b-wholesale-platform-server.vercel.app/products/category/${category}`
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <Loading></Loading>;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="py-10 ">
                <div className="card shadow-xl shadow-secondary h-full">
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
                        {[...Array(Math.round(product.rating))].map(
                          (_, idx) => (
                            <FaStar key={idx} />
                          )
                        )}
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
        )}
      </motion.div>
    </>
  );
};

export default CategoryWiseProducts;
