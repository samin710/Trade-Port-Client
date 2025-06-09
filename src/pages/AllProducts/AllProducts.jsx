import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard";

const AllProducts = () => {
  const products = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default AllProducts;
