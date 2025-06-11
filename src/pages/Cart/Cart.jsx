import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const Cart = () => {
  const { user } = use(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/orders/buyer?email=${user.email}`)
        .then((res) => setOrders(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);
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
                  <span className="font-semibold">Quantity:</span>{" "}
                  {item.quantity}
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
                <div className="card-actions justify-end mt-4">
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
