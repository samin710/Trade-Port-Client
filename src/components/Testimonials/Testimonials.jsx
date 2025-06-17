import React from "react";
import { FaStar } from "react-icons/fa";
import * as motion from "motion/react-client";
import GradientText from "../../animations/GradientText/GradientText";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Selina Hossain",
      image: "https://i.pravatar.cc/150?img=47",
      review:
        "Absolutely loved the product quality and fast delivery. Highly recommend TradePort!",
      product: "Wireless Mouse",
      rating: 5,
    },
    {
      name: "Masud Rana",
      image: "https://i.pravatar.cc/150?img=12",
      review:
        "Very smooth experience from order to checkout. Great support team!",
      product: "Mechanical Keyboard",
      rating: 4,
    },
    {
      name: "Kolpona Chowdhury",
      image: "https://i.pravatar.cc/150?img=23",
      review:
        "Impressed with how fast the order arrived. Products are just like the photos!",
      product: "Smart LED Monitor",
      rating: 5,
    },
    {
      name: "Shakil Mahmud",
      image: "https://i.pravatar.cc/150?img=33",
      review:
        "TradePort offers a fantastic selection of accessories. I found everything I needed for my setup!",
      product: "Gaming Headset",
      rating: 5,
    },
    {
      name: "Shneha Rahman",
      image: "https://i.pravatar.cc/150?img=15",
      review:
        "Great UI, seamless shopping experience, and the product arrived in perfect condition.",
      product: "Ergonomic Chair",
      rating: 4,
    },
    {
      name: "Mohammad Ayaan",
      image: "https://i.pravatar.cc/150?img=39",
      review:
        "I had some doubts before ordering, but the support and delivery exceeded my expectations!",
      product: "Graphic Tablet",
      rating: 5,
    },
  ];
  return (
    <div className="py-10">
      <h2 className="text-center pb-10 text-2xl md:text-4xl font-bold">
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
          What Our Customers Say
        </GradientText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
            className=" shadow-xl shadow-secondary rounded-2xl p-6 border border-secondary"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-400">{t.product}</p>
              </div>
            </div>
            <p className="text-accent italic mb-4">“{t.review}”</p>
            <div className="flex text-yellow-400">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
