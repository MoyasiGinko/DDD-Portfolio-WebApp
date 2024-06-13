"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import featuresData from "./featuresData.json";

interface Features {
  id: number;
  title: string;
  description: string;
  icon: string;
}
const WhyChooseUs = () => {
  const [features, setFeatures] = useState<Features[]>([]);

  useEffect(() => {
    setFeatures(featuresData);
  }, []);

  return (
    <div className="bg-tranparent px-8 py-24 text-slate-50">
      <div>
        <h1 className="mainfont text-[#ffffff] text-center font-bold text-[64px] max-sm:text-2xl">
          Why You Should Choose Us?
        </h1>
        <p className="mb-12 text-[20px] max-sm:text-[16px] max-sm:mt-5 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent text-center w-[50%] max-sm:w-full font-semibold m-auto">
          Whether you design alone or with a team, we have a plan that fits your
          needs, including custom design systems.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="flex flex-col items-center space-y-4 rounded-2xl  shadow-xl backdrop-blur-md group border border-indigo-700 bg-slate-700/20 cursor-pointer p-4  hover:bg-purple-900/50 hover:text-white duration-300"
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-5xl">{feature.icon}</div>
            <div className="text-3xl">{feature.title}</div>
            <div className="text-2xl">{feature.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
