import React, { use, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import addNew from "../../assets/lottie/addNew.json";
import Lottie from "lottie-react";
import BlurText from "../../animations/BlurText";
import { motion } from "framer-motion";

const AddProduct = () => {
  useEffect(() => {
    document.title = "TradePort | AddProduct";
  }, []);

  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      ...data,
      userEmail: user.email,
      main_quantity: parseInt(data.main_quantity),
      min_selling_quantity: parseInt(data.min_selling_quantity),
      price: parseInt(data.price),
      rating: parseInt(data.rating),
    };

    axiosSecure
      .post("/products", formData)
      .then(() => {
        toast.success("Successfully Added Product");
        navigate("/allProducts");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-4xl mx-auto p-6 rounded-2xl shadow-2xl shadow-secondary my-10 border border-secondary">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary dark:text-secondary">
            <BlurText
              text="Add a New Product"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8"
              loop
              repeatDelay={2.5}
            ></BlurText>
          </h2>
          <div className="w-12 md:w-16">
            <Lottie animationData={addNew} loop></Lottie>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control">
            <label className="label font-semibold text-accent">
              Product Image
            </label>
            <input
              type="url"
              placeholder="Product Image"
              {...register("image", { required: "Image URL is required" })}
              className="input w-full focus:outline-none focus:border-primary"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label font-semibold text-accent">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("name", { required: "Product name is required" })}
              className="input w-full focus:outline-none focus:border-primary"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label font-semibold text-accent">
                Main Quantity
              </label>
              <input
                type="number"
                placeholder="Main Quantity"
                {...register("main_quantity", {
                  required: "Main quantity is required",
                })}
                className="input focus:outline-none focus:border-primary"
              />
              {errors.main_quantity && (
                <p className="text-red-500 text-sm">
                  {errors.main_quantity.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label font-semibold text-accent">
                Minimum Selling Quantity
              </label>
              <input
                type="number"
                placeholder="Minimum Selling Quantity"
                {...register("min_selling_quantity", {
                  required: "Minimum quantity is required",
                })}
                className="input focus:outline-none focus:border-primary"
              />
              {errors.min_selling_quantity && (
                <p className="text-red-500 text-sm">
                  {errors.min_selling_quantity.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label font-semibold text-accent">
                Brand Name
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                {...register("brand", { required: "Brand name is required" })}
                className="input focus:outline-none focus:border-primary"
              />
              {errors.brand && (
                <p className="text-red-500 text-sm">{errors.brand.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label font-semibold text-accent">
                Price per Unit
              </label>
              <input
                type="number"
                placeholder="Price per Unit"
                {...register("price", { required: "Price is required" })}
                className="input focus:outline-none focus:border-primary"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label font-semibold text-accent">
                Rating (1–5)
              </label>
              <br />
              <input
                type="number"
                min="1"
                max="5"
                placeholder="Rating (1–5)"
                {...register("rating", {
                  required: "Rating is required",
                  min: { value: 1, message: "Minimum rating is 1" },
                  max: { value: 5, message: "Maximum rating is 5" },
                })}
                className="input focus:outline-none focus:border-primary"
              />
              {errors.rating && (
                <p className="text-red-500 text-sm">{errors.rating.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label font-semibold text-accent">
                Category
              </label>
              <br />
              <select
                {...register("category", { required: "Category is required" })}
                className="select select-bordered focus:outline-none focus:border-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Category
                </option>
                <option>Electronics and Gadgets</option>
                <option>Home and Kitchen Appliances</option>
                <option>Fashion and Apparel</option>
                <option>Industrial Machinery and Tools</option>
                <option>Health and Beauty</option>
                <option>Automotive Parts and Accessories</option>
                <option>Office Supplies and Stationery</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>

          <div className="form-control">
            <label className="label font-semibold text-accent">
              Short Description
            </label>
            <textarea
              placeholder="Short Description"
              {...register("description", {
                required: "Description is required",
              })}
              className="textarea focus:outline-none focus:border-primary w-full"
              rows="5"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary dark:btn-secondary dark:text-base-100 w-full mt-4 transition-all hover:scale-105"
          >
            Add Product
          </button>

          <div className="md:mt-10 mt-5 p-4 rounded-lg bg-secondary dark:bg-secondary/10 border  border-secondary">
            <h3 className="text-lg font-semibold mb-2 dark:text-accent">
              Product Content
            </h3>
            <p className="text-accent dark:text-gray-400">
              Make sure all product details are accurate and up-to-date. This
              helps buyers make confident purchasing decisions and enhances the
              visibility of your product on the platform.
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AddProduct;
