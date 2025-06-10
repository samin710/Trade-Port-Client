import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const Update = () => {
  const {
    _id,
    name,
    image,
    main_quantity,
    min_selling_quantity,
    brand,
    rating,
    category,
    description,
  } = useLoaderData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedData = {
      ...data,
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
              defaultValue={image}
              {...register("image", { required: "Image URL is required" })}
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
              defaultValue={name}
              {...register("name", { required: "Product name is required" })}
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
                defaultValue={main_quantity}
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
              <label className="label font-semibold">
                Minimum Selling Quantity
              </label>
              <input
                type="number"
                defaultValue={min_selling_quantity}
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
              <label className="label font-semibold">Brand Name</label>
              <input
                type="text"
                defaultValue={brand}
                {...register("brand", { required: "Brand name is required" })}
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
                defaultValue={rating}
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
              <label className="label font-semibold">Category</label>
              <br />
              <select
                {...register("category", { required: "Category is required" })}
                className="select select-bordered focus:outline-none focus:border-primary"
                defaultValue={category}
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
              defaultValue={description}
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

          <button type="submit" className="btn btn-primary w-full mt-4">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
