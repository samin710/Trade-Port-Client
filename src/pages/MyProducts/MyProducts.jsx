import React, { use } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { AuthContext } from "../../providers/AuthContext";
import { useLoaderData } from "react-router";

const MyProducts = () => {
  const { user } = use(AuthContext);
  const allProducts = useLoaderData();
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
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default MyProducts;
