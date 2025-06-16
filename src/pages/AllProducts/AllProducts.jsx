import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductTableView from "../../components/ProductTableView/ProductTableView";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { motion, AnimatePresence } from "framer-motion";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "TradePort | AllProducts";
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

  return (
    <>
      {products.length === 0 ? (
        <h1 className="text-center text-2xl md:text-4xl">
          Currently no products are available😔😔😔
        </h1>
      ) : (
        <div className=" md:pt-5 pt-3 md:space-y-4 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <button
              className="btn btn-outline btn-primary"
              onClick={() => setShowAvailableOnly((prev) => !prev)}
            >
              {showAvailableOnly
                ? "Show All Products"
                : "Show Available Products"}
            </button>

            <select
              className="select select-bordered max-w-xs focus:outline-none focus:border-primary"
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

          <AnimatePresence mode="wait">
            {viewMode === "card" ? (
              <motion.div
                key="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="table"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="overflow-x-auto rounded-xl shadow-lg shadow-secondary border border-secondary mt-4 md:mt-9">
                  <table className="min-w-full ">
                    <thead className="bg-gradient-to-b from-primary to-secondary text-white">
                      <tr>
                        <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                          Image
                        </th>
                        <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                          Name
                        </th>
                        <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                          Brand
                        </th>
                        <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                          Category
                        </th>
                        <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                          Available Quantity
                        </th>
                        <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredProducts.map((product) => (
                        <ProductTableView key={product._id} product={product} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default AllProducts;
