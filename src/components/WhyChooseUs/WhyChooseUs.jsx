import React from "react";
import { FaShieldAlt, FaTruck, FaUserCheck, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-base-200 py-16 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose <span className="text-primary">TradePort</span>?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <FaShieldAlt className="text-4xl text-primary mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2">Secure Transactions</h4>
          <p className="text-gray-600 text-sm">
            Your payments are protected with encrypted technology.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <FaUserCheck className="text-4xl text-primary mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2">Verified Sellers</h4>
          <p className="text-gray-600 text-sm">
            Only authentic and trusted sellers are listed.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <FaTruck className="text-4xl text-primary mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
          <p className="text-gray-600 text-sm">
            Receive your products quickly with our reliable logistics.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <FaHeadset className="text-4xl text-primary mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
          <p className="text-gray-600 text-sm">
            We're here to help you anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
