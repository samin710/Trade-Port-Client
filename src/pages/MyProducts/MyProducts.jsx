import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyProductCard from "../../components/MyProductCard/MyProductCard";
import GradientText from "../../animations/GradientText/GradientText";
import { motion } from "framer-motion";

const MyProducts = () => {
  const { user } = use(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    document.title = "TradePort | MyProducts";
    axiosSecure.get("/products").then((res) => {
      setAllProducts(res.data);
      setLoading(false);
    });
  }, [axiosSecure]);

  if (loading) return <Loading></Loading>;

  const filteredRecipes = allProducts.filter((p) => p.userEmail === user.email);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {filteredRecipes.length === 0 ? (
          <p className="text-center mt-10 text-gray-600">
            You haven't added any products yet.
          </p>
        ) : (
          <>
            <h1 className="md:my-12 my-5  text-2xl md:text-4xl">
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
                My Products
              </GradientText>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((product) => (
                <MyProductCard
                  key={product._id}
                  product={product}
                ></MyProductCard>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export default MyProducts;
