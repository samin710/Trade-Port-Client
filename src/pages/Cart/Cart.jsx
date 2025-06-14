import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const { user } = use(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`http://localhost:3000/orders/buyer?email=${user.email}`)
        .then((res) => {
          setOrders(res.data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [user, axiosSecure]);

  const handleRemove = (id, productId, quantity) => {
    axiosSecure
      .delete(`http://localhost:3000/orders/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          const conQuantity = parseInt(quantity);
          toast.success("Removed from cart!");
          setOrders((prev) => prev.filter((order) => order._id !== id));

          return axios.patch(`http://localhost:3000/products/${productId}`, {
            quantity: conQuantity,
            restore: true,
          });
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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 My Cart</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No products in your cart.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((item) => (
            <div key={item._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={item.productDetails.image}
                  alt={item.productDetails.name}
                  className="object-cover w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.productDetails.name}</h2>
                <p className="text-sm text-gray-500">
                  {item.productDetails.brand}
                </p>
                <p className="badge badge-secondary capitalize text-black">
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
                  <button className="btn btn-error btn-sm text-white">
                    <FaTrashAlt className="mr-2" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
