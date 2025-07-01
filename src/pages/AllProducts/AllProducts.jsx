import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductTableView from "../../components/ProductTableView/ProductTableView";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "../../animations/GradientText/GradientText";
import { FaThLarge, FaTable } from "react-icons/fa";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();

  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [viewMode, setViewMode] = useState("card");

  useEffect(() => {
    document.title = "TradePort | AllProducts";
    axiosSecure.get("/products").then((res) => {
      setProducts(res.data);
      setOriginalProducts(res.data);
      setLoading(false);
    });
  }, [axiosSecure]);

  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const handleSearch = (value) => {
    const search = value.toLowerCase();
    const filtered = originalProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search)
    );
    setProducts(filtered);
  };

  if (loading) return <Loading />;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="md:my-12 my-5 text-2xl md:text-4xl">
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
          Product Catalog
        </GradientText>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:space-y-0 space-y-4">
        {/* Sidebar */}
        <aside className="md:col-span-1 p-4 md:mt-22 rounded-xl border border-primary dark:border-secondary shadow-md h-fit md:sticky md:top-20 lg:top-24">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-full mb-4 focus:outline-none border border-primary dark:border-secondary transition-all duration-700 ease-in-out"
            onChange={(e) => handleSearch(e.target.value)}
          />

          {/* Price Range Filter */}
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Price Range: {priceRange[0]} - {priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="200000"
              step="1"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="range range-primary dark:range-secondary w-full"
            />
          </div>
        </aside>

        {/* Product Display */}
        <div className="md:col-span-3 space-y-6">
          {/* View Toggle */}
          <div className="flex items-center justify-end">
            <button
              className="btn btn-outline btn-primary dark:btn-secondary flex items-center gap-2"
              onClick={() =>
                setViewMode((prev) => (prev === "card" ? "table" : "card"))
              }
            >
              {viewMode === "card" ? (
                <>
                  <FaTable className="text-lg" />
                  Table View
                </>
              ) : (
                <>
                  <FaThLarge className="text-lg" />
                  Card View
                </>
              )}
            </button>
          </div>

          {filteredProducts.length === 0 ? (
            <h1 className="text-center text-2xl md:text-4xl">
              Currently no products are available 😔
            </h1>
          ) : (
            <AnimatePresence mode="wait">
              {viewMode === "card" ? (
                <motion.div
                  key="card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  <div className="overflow-x-auto rounded-xl shadow-lg shadow-secondary border border-secondary mt-5 md:mt-12">
                    <table className="min-w-full table-fixed">
                      <thead className="bg-primary dark:bg-secondary dark:to-base-100 transition-all duration-500 ease-in-out">
                        <tr>
                          <th className="py-4 px-4 text-left text-sm font-semibold uppercase w-[16.66%]">
                            Image
                          </th>
                          <th className="py-4 px-4 text-left text-sm font-semibold uppercase w-[16.66%]">
                            Name
                          </th>
                          <th className="py-4 px-4 text-left text-sm font-semibold uppercase w-[16.66%]">
                            Brand
                          </th>
                          <th className="py-4 px-4 text-left text-sm font-semibold uppercase w-[16.66%]">
                            Available Quantity
                          </th>
                          <th className="py-4 px-4 text-left text-sm font-semibold uppercase w-[16.66%]">
                            Minimum Selling Quantity
                          </th>
                          <th className="py-4 px-4 text-left text-sm font-semibold uppercase w-[16.66%]">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {filteredProducts.map((product) => (
                          <ProductTableView
                            key={product._id}
                            product={product}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AllProducts;
