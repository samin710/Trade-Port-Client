import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyProductCard from "../../components/MyProductCard/MyProductCard";

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

  if (!filteredRecipes.length) {
    return (
      <p className="text-center mt-10 text-gray-600">
        You haven't added any products yet.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRecipes.map((product) => (
        <MyProductCard key={product._id} product={product}></MyProductCard>
      ))}
    </div>
  );
};

export default MyProducts;
