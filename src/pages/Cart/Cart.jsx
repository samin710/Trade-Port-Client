import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import GradientText from "../../animations/GradientText/GradientText";
import { motion } from "framer-motion";

const Cart = () => {
  const { user } = use(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    document.title = "TradePort | MyCart";
    if (user?.email) {
      axiosSecure
        .get(`/orders/buyer?email=${user.email}`)
        .then((res) => {
          setOrders(res.data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [user, axiosSecure]);

  const handleRemove = (id, productId, quantity) => {
    axiosSecure
      .delete(`/orders/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          const conQuantity = parseInt(quantity);
          toast.success("Removed from cart!");
          setOrders((prev) => prev.filter((order) => order._id !== id));

          return axios.patch(
            `https://b2b-wholesale-platform-server.vercel.app/products/${productId}`,
            {
              quantity: conQuantity,
              restore: true,
            }
          );
        }
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Stock restored");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!");
      });
  };

  if (loading) return <Loading></Loading>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="my-10">
        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No products in your cart.</p>
        ) : (
          <>
            <h1 className="text-2xl md:text-4xl py-10">
              <GradientText
                colors={[
                  "#40ffaa",
                  "#4079ff",
                  "#40ffaa",
                  "#4079ff",
                  "#40ffaa",
                  "#0077B6",
                ]}
                animationSpeed={5}
                showBorder={false}
                className="custom-class"
              >
                🛒 My Cart
              </GradientText>
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orders.map((item) => (
                <div
                  key={item._id}
                  className="card mb-10 shadow-2xl shadow-secondary border border-secondary"
                >
                  <figure>
                    <img
                      src={item.productDetails.image}
                      alt={item.productDetails.name}
                      className="object-cover w-full"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.productDetails.name}</h2>
                    <p className="text-sm text-accent mb-1">
                      {item.productDetails.brand}
                    </p>
                    <p className="badge badge-secondary text-gray-700 capitalize ">
                      {item.productDetails.category}
                    </p>
                    <p>
                      <span className="font-semibold">
                        Minimum Buying Quantity:
                      </span>{" "}
                      {item.productDetails.min_selling_quantity} units
                    </p>
                    <p>
                      <span className="font-semibold">Purchase Quantity:</span>{" "}
                      {item.quantity} units
                    </p>
                    <p>
                      <span className="font-semibold">Total Price:</span>{" "}
                      {item.productDetails.price * item.quantity} BDT
                    </p>
                    <p>
                      <span className="font-semibold">Purchased On:</span>{" "}
                      {item.purchaseDate?.split("T")[0]}
                    </p>
                    <p className="text-sm mt-2">
                      {item.productDetails.description}
                    </p>
                    <div
                      onClick={() =>
                        handleRemove(item._id, item.productId, item.quantity)
                      }
                      className="card-actions justify-end mt-4"
                    >
                      <button className="btn btn-primary btn-sm ">
                        <FaTrashAlt className="mr-2" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
