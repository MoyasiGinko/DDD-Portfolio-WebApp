"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating responsive and modern websites.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Building high-quality mobile applications.",
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Improving your site's visibility on search engines.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Promoting your brand through digital channels.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OtherServices = () => {
  return (
    <div className="grid place-content-center overflow-hidden bg-transparent px-8 py-24 text-slate-50">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card p-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 shadow-xl backdrop-blur-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
              {service.title}
            </h3>
            <p className="text-lg text-slate-400">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OtherServices;
