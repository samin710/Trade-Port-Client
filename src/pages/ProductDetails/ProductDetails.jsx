import React, { use, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router";
import { AuthContext } from "../../providers/AuthContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [id]);

  const { user } = use(AuthContext);

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
    _id,
  } = products;

  const [showModal, setShowModal] = useState(false);
  const [availableQuantity, setAvailableQuantity] = useState(0);

  useEffect(() => {
    if (main_quantity) {
      setAvailableQuantity(main_quantity);
    }
  }, [main_quantity]);
  const [quantity, setQuantity] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  if (loading) return <Loading></Loading>;

  const onSubmit = (data) => {
    const quantity = parseInt(data.quantity);

    if (quantity < min_selling_quantity) {
      toast.error("You don't match the minimum selling quantity");
    } else if (quantity > availableQuantity) {
      toast.error(
        `No sufficient stock. Available stock is ${availableQuantity}`
      );
    } else {
      const updatedQuantity = { quantity, restore: false };

      axios
        .patch(`http://localhost:3000/products/${_id}`, updatedQuantity)
        .then((res) => {
          if (res.data.modifiedCount) {
            toast.success("Order Confirmed");

            const orderInfo = {
              productId: _id,
              buyerName: user.displayName,
              buyerEmail: user.email,
              quantity,
              purchaseDate: new Date().toISOString().split("T")[0],
              productDetails: {
                name,
                image,
                brand,
                price,
                category,
                description,
                rating,
                min_selling_quantity,
              },
            };
            return axios.post("http://localhost:3000/orders", orderInfo);
          }
        })
        .then(() => {
          setAvailableQuantity((prev) => prev - quantity);
          setShowModal(false);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Something went wrong!");
        });
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setValue("quantity", newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setValue("quantity", newQuantity);
    }
  };

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
            {availableQuantity}
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

          <div
            onClick={() => {
              setShowModal(true);
              setQuantity(0);
              setValue("quantity", "0");
            }}
            className="pt-6"
          >
            <button className="btn btn-primary btn-wide text-lg font-semibold rounded-xl shadow-md transition-all hover:scale-105">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-secondary/30 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-xl space-y-6 border border-primary">
            <h2 className="text-2xl font-bold text-center text-primary">
              Checkout Product
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="label font-semibold">Product Name</label>
                <input
                  type="text"
                  value={name}
                  {...register("name", {
                    required: "Product name is required",
                  })}
                  className="input input-bordered w-full"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="label font-semibold">Your Name</label>
                <input
                  type="text"
                  value={user.displayName}
                  {...register("buyerName", {
                    required: "Buyer name is required",
                  })}
                  className="input input-bordered w-full"
                />
                {errors.buyerName && (
                  <p className="text-red-500 text-sm">
                    {errors.buyerName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="label font-semibold">Email</label>
                <input
                  type="email"
                  value={user.email}
                  {...register("buyerEmail", {
                    required: "Buyer Email is required",
                  })}
                  className="input input-bordered w-full"
                />
                {errors.buyerEmail && (
                  <p className="text-red-500 text-sm">
                    {errors.buyerEmail.message}
                  </p>
                )}
              </div>

              <div>
                <label className="label font-semibold">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleDecrease}
                    type="button"
                    className="btn btn-sm btn-outline"
                  >
                    −
                  </button>
                  <input
                    type="text"
                    {...register("quantity", {
                      required: "Quantity is required",
                    })}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      setQuantity(value);
                      setValue("quantity", value);
                    }}
                    className="input input-bordered w-24 text-center"
                  />
                  {errors.quantity && (
                    <p className="text-red-500 text-sm">
                      {errors.quantity.message}
                    </p>
                  )}
                  <button
                    onClick={handleIncrease}
                    type="button"
                    className="btn btn-sm btn-outline"
                  >
                    +
                  </button>
                </div>
                <p className="text-xs text-gray-500 pt-1">
                  Min: {min_selling_quantity}, Max: {availableQuantity}
                </p>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
