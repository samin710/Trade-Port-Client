import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

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
    axiosSecure.get(`http://localhost:3000/products/${id}`).then((res) => {
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

    axios
      .put(`http://localhost:3000/products/${_id}`, updatedData)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Update Successful");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 rounded-2xl shadow-xl bg-base-100 mt-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          Update the product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control">
            <label className="label font-semibold">Product Image</label>
            <input
              type="url"
              {...register("image")}
              className="input w-full focus:outline-none focus:border-primary"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label font-semibold">Product Name</label>
            <input
              type="text"
              {...register("name")}
              className="input w-full focus:outline-none focus:border-primary"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label font-semibold">Main Quantity</label>
              <input
                type="number"
                {...register("main_quantity")}
                className="input focus:outline-none focus:border-primary"
              />
              {errors.main_quantity && (
                <p className="text-red-500 text-sm">
                  {errors.main_quantity.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label font-semibold">
                Minimum Selling Quantity
              </label>
              <input
                type="number"
                {...register("min_selling_quantity")}
                className="input focus:outline-none focus:border-primary"
              />
              {errors.min_selling_quantity && (
                <p className="text-red-500 text-sm">
                  {errors.min_selling_quantity.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label font-semibold">Brand Name</label>
              <input
                type="text"
                {...register("brand")}
                className="input focus:outline-none focus:border-primary"
              />
              {errors.brand && (
                <p className="text-red-500 text-sm">{errors.brand.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label font-semibold">Rating (1–5)</label>
              <br />
              <input
                type="number"
                min="1"
                max="5"
                {...register("rating")}
                className="input focus:outline-none focus:border-primary"
              />
              {errors.rating && (
                <p className="text-red-500 text-sm">{errors.rating.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label font-semibold">Category</label>
              <br />
              <select
                {...register("category")}
                className="select select-bordered focus:outline-none focus:border-primary"
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
            <label className="label font-semibold">Short Description</label>
            <textarea
              {...register("description")}
              className="textarea focus:outline-none focus:border-primary w-full"
              rows="5"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Update Product
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
