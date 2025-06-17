import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import GradientText from "../../animations/GradientText/GradientText";
import { motion } from "framer-motion";

const Update = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "TradePort | Update";
    axiosSecure.get(`/products/${id}`).then((res) => {
      setProducts(res.data);
      setLoading(false);
      reset(res.data);
    });
  }, [id, reset, axiosSecure]);

  if (loading) return <Loading></Loading>;

  const { _id } = products;

  const onSubmit = (data) => {
    const { _id, ...cleanedData } = data;
    const updatedData = {
      ...cleanedData,
      main_quantity: parseInt(data.main_quantity),
      min_selling_quantity: parseInt(data.min_selling_quantity),
      rating: parseInt(data.rating),
    };

    axiosSecure
      .put(`/products/${_id}`, updatedData)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Update Successful");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/allProducts");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto md:p-6 p-3 rounded-2xl shadow-2xl py-10 shadow-secondary ">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">
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
              Update the product
            </GradientText>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="form-control">
              <label className="label font-semibold text-accent">
                Product Image
              </label>
              <input
                type="url"
                {...register("image")}
                className="input w-full focus:outline-none focus:border-primary transition-all duration-500 ease-in-out"
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
                {...register("name")}
                className="input w-full focus:outline-none focus:border-primary transition-all duration-500 ease-in-out"
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
                  {...register("main_quantity")}
                  className="input focus:outline-none focus:border-primary transition-all duration-500 ease-in-out"
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
                  {...register("min_selling_quantity")}
                  className="input focus:outline-none focus:border-primary transition-all duration-500 ease-in-out"
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
                  {...register("brand")}
                  className="input focus:outline-none focus:border-primary transition-all duration-500 ease-in-out"
                />
                {errors.brand && (
                  <p className="text-red-500 text-sm">{errors.brand.message}</p>
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
                  {...register("rating")}
                  className="input focus:outline-none focus:border-primary transition-all duration-500 ease-in-out"
                />
                {errors.rating && (
                  <p className="text-red-500 text-sm">
                    {errors.rating.message}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label font-semibold text-accent">
                  Category
                </label>
                <br />
                <select
                  {...register("category")}
                  className="select select-bordered focus:outline-none focus:border-primary transition-all duration-500 ease-in-out"
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
                {...register("description")}
                className="textarea focus:outline-none focus:border-primary w-full transition-all duration-500 ease-in-out"
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
              className="btn btn-primary dark:btn-secondary dark:text-base-100 w-full md:mt-4 hover:scale-105  transition-all duration-500 ease-in-out"
            >
              Update Product
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Update;
