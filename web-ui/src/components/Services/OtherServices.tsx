"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Talking-Head Videos",
    description: "Grow a personal brand in any niche with our trendy edits.",
  },
  {
    id: 2,
    title: "Automated Videos",
    description: "Get edits like MagnatesMedia with zero efforts.",
  },
  {
    id: 3,
    title: "Podcast Editing",
    description:
      "Make those lengthy podcasts interesting by cutting out the fluff.",
  },
  {
    id: 4,
    title: "Podcast to Shorts",
    description: "Clip short form videos from your lengthy podcasts.",
  },
  {
    id: 5,
    title: "UGC ADS",
    description:
      "High converting ads for any site, Facebook, Instagram, TikTok.",
  },
  {
    id: 6,
    title: "YouTube Shorts",
    description: "Get viral with our highly engaging short-form videos.",
  },
  {
    id: 7,
    title: "Vlogs",
    description:
      "Dynamic edits to turn your vlogs into a real cinematic experience.",
  },
  {
    id: 8,
    title: "Webinars",
    description:
      "Turn those seminars, webinars into interesting pieces of content.",
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
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center place-items-center mx-[3%]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="group border border-indigo-700 bg-slate-500/20 cursor-pointer p-4 rounded-xl h-[12rem] hover:bg-purple-500/50 hover:text-black duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-[#f9f9f9] group-hover:text-purple-50 text-[25px] font-bold">
              {service.title}
            </h3>
            <p className="text-[20px] font-medium mt-4 text-white group-hover:text-white">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OtherServices;
