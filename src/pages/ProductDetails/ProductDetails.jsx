import React, { use, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router";
import { AuthContext } from "../../providers/AuthContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import GradientText from "../../animations/GradientText/GradientText";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/products/${id}`).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [axiosSecure, id]);

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
      toast.error(
        `You don't match the minimum selling quantity (${min_selling_quantity})`
      );
    } else if (quantity > availableQuantity) {
      toast.error(
        `No sufficient stock. Available stock is ${availableQuantity}`
      );
    } else {
      const updatedQuantity = { quantity, restore: false };

      axios
        .patch(
          `https://b2b-wholesale-platform-server.vercel.app/products/${_id}`,
          updatedQuantity
        )
        .then((res) => {
          if (res.data.modifiedCount) {
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
            return axios.post(
              "https://b2b-wholesale-platform-server.vercel.app/orders",
              orderInfo
            );
          }
        })
        .then(() => {
          setAvailableQuantity((prev) => prev - quantity);
          toast.success("Order Confirmed");
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-5xl mx-auto mt-10 p-6 rounded-2xl shadow-2xl shadow-primary dark:shadow-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex items-center">
            <img
              src={image}
              alt={name}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="space-y-4 text-left">
            <h1 className="md:text-4xl text-2xl">
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
                {name}
              </GradientText>
            </h1>

            <div className="badge badge-secondary capitalize text-accent dark:text-gray-300 py-3 px-4">
              {category}
            </div>

            <p className="text-accent text-lg">
              <strong className="text-primary dark:text-secondary">
                Brand:
              </strong>{" "}
              {brand}
            </p>

            <p className="text-accent text-lg">
              <strong className="text-primary dark:text-secondary">
                Price:
              </strong>{" "}
              {price} BDT
            </p>

            <p className="text-accent text-lg">
              <strong className="text-primary dark:text-secondary">
                Available Quantity:
              </strong>{" "}
              {availableQuantity}
            </p>

            <p className="text-accent text-lg">
              <strong className="text-primary dark:text-secondary">
                Minimum Order:
              </strong>{" "}
              {min_selling_quantity}
            </p>

            <div className="flex items-center text-yellow-500 gap-1">
              <strong className="text-primary dark:text-secondary">
                Rating:
              </strong>
              {[...Array(Math.round(rating))].map((_, idx) => (
                <FaStar key={idx} />
              ))}
              <span className="ml-1 text-sm text-accent">({rating})</span>
            </div>

            <p className="text-accent pt-3">
              <strong className="text-primary dark:text-secondary block mb-1">
                Description:
              </strong>
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
              <button className="btn btn-primary btn-wide text-lg font-semibold rounded-xl shadow-md transition-all hover:scale-105 dark:btn-secondary dark:text-base-100">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence mode="wait">
          {" "}
          {showModal && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-50 backdrop-blur-sm bg-secondary/30 dark:bg-base-100/30 flex items-center justify-center"
            >
              <>
                <div className="bg-white dark:bg-base-100 p-8 rounded-2xl md:w-full max-w-lg shadow-xl space-y-6 border border-primary dark:border-secondary">
                  <h2 className="text-2xl font-bold text-center">
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
                      Checkout Product
                    </GradientText>
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="label font-semibold text-accent">
                        Product Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        {...register("name", {
                          required: "Product name is required",
                        })}
                        className="input input-bordered w-full focus:outline-none border-primary dark:border-secondary"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="label font-semibold text-accent">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={user.displayName}
                        {...register("buyerName", {
                          required: "Buyer name is required",
                        })}
                        className="input input-bordered w-full focus:outline-none border-primary dark:border-secondary"
                      />
                      {errors.buyerName && (
                        <p className="text-red-500 text-sm">
                          {errors.buyerName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="label font-semibold text-accent">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        {...register("buyerEmail", {
                          required: "Buyer Email is required",
                        })}
                        className="input input-bordered w-full focus:outline-none border-primary dark:border-secondary"
                      />
                      {errors.buyerEmail && (
                        <p className="text-red-500 text-sm">
                          {errors.buyerEmail.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="label font-semibold text-accent">
                        Quantity
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleDecrease}
                          type="button"
                          className="btn btn-sm btn-outline btn-primary dark:btn-secondary dark:border-secondary dark:text-accent"
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
                          className="input input-bordered w-24 text-center focus:outline-none border-primary dark:border-secondary"
                        />
                        {errors.quantity && (
                          <p className="text-red-500 text-sm">
                            {errors.quantity.message}
                          </p>
                        )}
                        <button
                          onClick={handleIncrease}
                          type="button"
                          className="btn btn-sm btn-outline btn-primary dark:btn-secondary dark:border-secondary dark:text-accent"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-xs text-accent pt-1">
                        Min: {min_selling_quantity}, Max: {availableQuantity}
                      </p>
                    </div>

                    <div className="flex justify-between mt-6">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="btn btn-primary btn-outline dark:btn-secondary dark:hover:text-base-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary transition-all hover:scale-105 dark:btn-secondary dark:text-base-100"
                      >
                        Confirm Order
                      </button>
                    </div>
                  </form>
                </div>
              </>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
