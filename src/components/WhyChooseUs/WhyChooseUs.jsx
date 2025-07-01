import React from "react";
import { FaShieldAlt, FaTruck, FaUserCheck, FaHeadset } from "react-icons/fa";
import GradientText from "../../animations/GradientText/GradientText";

const WhyChooseUs = () => {
  return (
    <div className="">
      <h2 className="md:text-4xl text-2xl font-bold text-center pb-10">
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
          Why Choose TradePort?
        </GradientText>
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl shadow-2xl border border-secondary p-6 text-center transition-transform duration-300 ease-in-out hover:scale-115 shadow-secondary">
          <FaShieldAlt className="text-4xl text-primary dark:text-secondary mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2 dark:text-accent">Secure Transactions</h4>
          <p className="text-accent text-sm dark:text-gray-400">
            Your payments are protected with encrypted technology.
          </p>
        </div>
        <div className="rounded-2xl shadow-2xl border border-secondary p-6 text-center transition-transform duration-300 ease-in-out hover:scale-115 shadow-secondary">
          <FaUserCheck className="text-4xl text-primary dark:text-secondary mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2 dark:text-accent">
            Verified Sellers
          </h4>
          <p className="text-accent text-sm dark:text-gray-400">
            Only authentic and trusted sellers are listed.
          </p>
        </div>
        <div className="rounded-2xl shadow-2xl border border-secondary p-6 text-center transition-transform duration-300 ease-in-out hover:scale-115 shadow-secondary">
          <FaTruck className="text-4xl text-primary dark:text-secondary mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2 dark:text-accent">
            Fast Delivery
          </h4>
          <p className="text-accent text-sm dark:text-gray-400">
            Receive your products quickly with our reliable logistics.
          </p>
        </div>
        <div className="rounded-2xl shadow-2xl border border-secondary p-6 text-center transition-transform duration-300 ease-in-out hover:scale-115 shadow-secondary">
          <FaHeadset className="text-4xl text-primary dark:text-secondary mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2 dark:text-accent">
            24/7 Support
          </h4>
          <p className="text-accent text-sm dark:text-gray-400">
            We're here to help you anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
