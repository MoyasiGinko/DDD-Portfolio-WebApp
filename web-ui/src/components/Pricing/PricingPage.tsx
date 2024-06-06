"use client";
import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-100">Our Pricing</h2>
          <p className="mt-2 text-sm text-gray-300">
            Choose a plan that works for you
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="$9.99/month"
            features={["Feature 1", "Feature 2", "Feature 3"]}
          />
          <PricingCard
            title="Standard"
            price="$19.99/month"
            features={["Feature 1", "Feature 2", "Feature 3"]}
          />
          <PricingCard
            title="Premium"
            price="$29.99/month"
            features={["Feature 1", "Feature 2", "Feature 3"]}
          />
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, features }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
    >
      <div className="px-6 py-8">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="mt-4">
          <p className="text-4xl font-bold text-indigo-600">{price}</p>
        </div>
        <div className="mt-6">
          <ul className="text-sm text-gray-600 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="h-5 w-5 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-2">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-6 pb-6 pt-4 bg-gray-50">
        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default Pricing;
