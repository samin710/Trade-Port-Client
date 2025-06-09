import React from "react";
import { Link } from "react-router";

const Categories = () => {
  return (
    <>
      <h1 className="text-center py-10 text-2xl md:text-4xl">All Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {" "}
        <Link className="card bg-secondary shadow-xl hover:shadow-2xl rounded-2xl mb-10">
          <figure>
            <img
              src={
                "https://i.ibb.co/8L8Znc2s/modern-stationary-collection-arrangement.jpg"
              }
              className=" w-full object-cover"
            />
          </figure>
          <div className="card-body px-6 py-4">
            <p className="text-lg  text-center">
              <strong>Category:</strong> <span>Electronics & Gadgets</span>{" "}
            </p>
          </div>
        </Link>
        <Link className="card bg-secondary shadow-xl hover:shadow-2xl rounded-2xl mb-10">
          <figure>
            <img
              src={"https://i.ibb.co/0y8Z7WSm/home-app.jpg"}
              className=" w-full object-cover"
            />
          </figure>
          <div className="card-body px-6 py-4">
            <p className="text-lg  text-center">
              <strong>Category:</strong> <p>Home & Kitchen Appliances</p>{" "}
            </p>
          </div>
        </Link>
        <Link className="card bg-secondary shadow-xl hover:shadow-2xl rounded-2xl mb-10">
          <figure>
            <img
              src={"https://i.ibb.co/DfbBr1kK/fashion.jpg"}
              className=" w-full object-cover"
            />
          </figure>
          <div className="card-body px-6 py-4">
            <p className="text-lg  text-center">
              <strong>Category:</strong> <p>Fashion & Apparel</p>{" "}
            </p>
          </div>
        </Link>
        <Link className="card bg-secondary shadow-xl hover:shadow-2xl rounded-2xl mb-10">
          <figure>
            <img
              src={"https://i.ibb.co/q3hXSK1R/machinary.jpg"}
              className=" w-full object-cover"
            />
          </figure>
          <div className="card-body px-6 py-4">
            <p className="text-lg  text-center">
              <strong>Category:</strong>{" "}
              <p>Industrial Machinery & Tools</p>{" "}
            </p>
          </div>
        </Link>
        <Link className="card bg-secondary shadow-xl hover:shadow-2xl rounded-2xl mb-10">
          <figure>
            <img
              src={"https://i.ibb.co/hx2YjfJG/health-and-beuty.jpg"}
              className=" w-full object-cover"
            />
          </figure>
          <div className="card-body px-6 py-4">
            <p className="text-lg  text-center">
              <strong>Category:</strong> <p>Health & Beauty</p>{" "}
            </p>
          </div>
        </Link>
        <Link className="card bg-secondary shadow-xl hover:shadow-2xl rounded-2xl mb-10">
          <figure>
            <img
              src={"https://i.ibb.co/bjtw7dN1/automotive.jpg"}
              className=" w-full object-cover"
            />
          </figure>
          <div className="card-body px-6 py-4">
            <p className="text-lg  text-center">
              <strong>Category:</strong>{" "}
              <p>Automotive Parts & Accessories</p>{" "}
            </p>
          </div>
        </Link>
        <Link className="card bg-secondary shadow-xl hover:shadow-2xl rounded-2xl mb-10">
          <figure>
            <img
              src={"https://i.ibb.co/Jj278yv0/office.jpg"}
              className=" w-full object-cover"
            />
          </figure>
          <div className="card-body px-6 py-4">
            <p className="text-lg  text-center">
              <strong>Category:</strong>{" "}
              <p>Office Supplies & Stationery</p>{" "}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Categories;
