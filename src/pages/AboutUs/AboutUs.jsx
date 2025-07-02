import React from "react";
import { motion } from "framer-motion";
import GradientText from "../../animations/GradientText/GradientText";

const team = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "John Smith",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Lead Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="text-base-content space-y-20">
      {/* Hero */}
      <section className="md:my-12 my-5 text-2xl md:text-4xl">
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
          About Us
        </GradientText>
        <p className="text-center text-accent text-sm md:w-1/2 mx-auto">
          Learn more about who we are, what we do, and why we do it.
        </p>
      </section>

      {/* Company Story */}
      <section className="md:grid md:grid-cols-2 gap-12 items-center space-y-6 md:space-y-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Our story"
          className="w-full h-full rounded-xl shadow-md object-cover"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground text-md leading-relaxed">
            Founded in 2025, TradePort began as a small team passionate about
            creating seamless digital experiences. Today, we empower hundreds of
            businesses through scalable, user-friendly, and beautifully crafted
            tech solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 text-center md:text-left">
        <div className="bg-base-200 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-muted-foreground">
            To deliver impactful digital products that drive business growth and
            user satisfaction.
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-muted-foreground">
            To be a global leader in crafting innovative solutions that connect
            people and technology.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="bg-base-200 rounded-xl shadow-lg text-center p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-lg font-bold">{member.name}</h4>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
