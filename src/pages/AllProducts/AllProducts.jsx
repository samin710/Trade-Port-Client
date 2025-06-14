import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductTableView from "../../components/ProductTableView/ProductTableView";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get("/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [axiosSecure]);

  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState("card");

  const filteredProducts = showAvailableOnly
    ? products.filter((product) => product.min_selling_quantity > 100)
    : products;

  if (loading) return <Loading></Loading>;
  if (products.length < 1) {
    return (
      <h1 className="text-center text-2xl md:text-4xl">
        Currently no products are available😔😔😔
      </h1>
    );
  }
  return (
    <div className="px-4 py-6 space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          className="btn btn-outline btn-primary"
          onClick={() => setShowAvailableOnly((prev) => !prev)}
        >
          {showAvailableOnly ? "Show All Products" : "Show Available Products"}
        </button>

        <select
          className="select select-bordered max-w-xs"
          defaultValue={""}
          onChange={(e) => setViewMode(e.target.value)}
        >
          <option value="" disabled>
            Choose a view mode
          </option>
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border rounded-lg">
            <thead className="bg-base-200">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Min. Quantity</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <ProductTableView
                  key={product._id}
                  product={product}
                ></ProductTableView>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
