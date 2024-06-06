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
    <div className="bg-slate-900 px-8 py-24 text-slate-50">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Why You Should Choose Us?
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="feature-card flex flex-col items-center space-y-4 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 0.5, delay: feature.id * 0.2 }} // Animation timing
            whileHover={{ scale: 1.05 }} // Hover animation
            whileTap={{ scale: 0.95 }} // Tap animation
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
