import React, { useEffect } from "react";
import { Link } from "react-router";
import GradientText from "../../animations/GradientText/GradientText";
import { motion } from "framer-motion";

const Categories = () => {
  useEffect(() => {
    document.title = "TradePort | Categories";
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-center py-10 text-2xl md:text-4xl">
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
            All Categories
          </GradientText>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {" "}
          <Link
            to={`/categoryWiseProducts/Electronics and Gadgets`}
            className="card shadow-xl shadow-secondary hover:shadow-2xl rounded-2xl mb-10 transition-transform duration-300 ease-in-out hover:scale-105"
          >
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
                <strong>Category:</strong> <span>Electronics and Gadgets</span>
              </p>
            </div>
          </Link>
          <Link
            to={`/categoryWiseProducts/Home and Kitchen Appliances`}
            className="card shadow-xl shadow-secondary hover:shadow-2xl rounded-2xl mb-10 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <figure>
              <img
                src={"https://i.ibb.co/0y8Z7WSm/home-app.jpg"}
                className=" w-full object-cover"
              />
            </figure>
            <div className="card-body px-6 py-4">
              <p className="text-lg  text-center">
                <strong>Category:</strong>{" "}
                <span>Home and Kitchen Appliances</span>
              </p>
            </div>
          </Link>
          <Link
            to={`/categoryWiseProducts/Fashion and Apparel`}
            className="card shadow-xl hover:shadow-2xl rounded-2xl mb-10 transition-transform duration-300 ease-in-out hover:scale-105 shadow-secondary"
          >
            <figure>
              <img
                src={"https://i.ibb.co/DfbBr1kK/fashion.jpg"}
                className=" w-full object-cover"
              />
            </figure>
            <div className="card-body px-6 py-4">
              <p className="text-lg  text-center">
                <strong>Category:</strong> <span>Fashion and Apparel</span>
              </p>
            </div>
          </Link>
          <Link
            to={`/categoryWiseProducts/Industrial Machinery and Tools`}
            className="card shadow-xl hover:shadow-2xl rounded-2xl mb-10 transition-transform duration-300 ease-in-out hover:scale-105 shadow-secondary"
          >
            <figure>
              <img
                src={"https://i.ibb.co/q3hXSK1R/machinary.jpg"}
                className=" w-full object-cover"
              />
            </figure>
            <div className="card-body px-6 py-4">
              <p className="text-lg  text-center">
                <strong>Category:</strong>{" "}
                <span>Industrial Machinery and Tools</span>
              </p>
            </div>
          </Link>
          <Link
            to={`/categoryWiseProducts/Health and Beauty`}
            className="card shadow-xl hover:shadow-2xl rounded-2xl mb-10 transition-transform duration-300 ease-in-out hover:scale-105 shadow-secondary"
          >
            <figure>
              <img
                src={"https://i.ibb.co/hx2YjfJG/health-and-beuty.jpg"}
                className=" w-full object-cover"
              />
            </figure>
            <div className="card-body px-6 py-4">
              <p className="text-lg  text-center">
                <strong>Category:</strong> <span>Health and Beauty</span>
              </p>
            </div>
          </Link>
          <Link
            to={`/categoryWiseProducts/Automotive Parts and Accessories`}
            className="card shadow-xl hover:shadow-2xl rounded-2xl mb-10 transition-transform duration-300 ease-in-out hover:scale-105 shadow-secondary"
          >
            <figure>
              <img
                src={"https://i.ibb.co/bjtw7dN1/automotive.jpg"}
                className=" w-full object-cover"
              />
            </figure>
            <div className="card-body px-6 py-4">
              <p className="text-lg  text-center">
                <strong>Category:</strong>{" "}
                <span>Automotive Parts and Accessories</span>
              </p>
            </div>
          </Link>
          <Link
            to={`/categoryWiseProducts/Office Supplies and Stationery`}
            className="card shadow-xl hover:shadow-2xl rounded-2xl mb-10 transition-transform duration-300 ease-in-out hover:scale-105 shadow-secondary"
          >
            <figure>
              <img
                src={"https://i.ibb.co/Jj278yv0/office.jpg"}
                className=" w-full object-cover"
              />
            </figure>
            <div className="card-body px-6 py-4">
              <p className="text-lg  text-center">
                <strong>Category:</strong>{" "}
                <span>Office Supplies and Stationery</span>
              </p>
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Categories;
