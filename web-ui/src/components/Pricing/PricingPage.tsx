"use client";
import React from "react";
import { motion } from "framer-motion";
import logo from "@/public/images/v-logo.png";

const Pricing = () => {
  return (
    <div id="pricing" className="px-[3%] bg-transparent">
      <div>
        <h1 className="mainfont text-[#ffffff] text-center font-bold text-[64px] max-sm:text-2xl">
          Choose what works for you
        </h1>
        <p className="mb-4 text-[20px] max-sm:text-[16px] max-sm:mt-5 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent text-center w-[50%] max-sm:w-full font-semibold m-auto">
          Whether you design alone or with a team, we have a plan that fits your
          needs, including custom design systems.
        </p>
      </div>
      <div className="grid grid-cols-3 items-center gap-10 justify-center mt-14 max-sm:mt-10 max-sm:grid-cols-1">
        <PricingCard
          title="Beginner"
          price="$950"
          features={[
            "4 YouTube videos",
            "4 Shorts",
            "YouTube Thumbnails",
            "Video running time: 8 mins",
            "24/7 assistance via WhatsApp",
          ]}
          link="https://buy.stripe.com/dR63dM9Si8lzd3i7ss"
          isRecommended={false}
        />
        <PricingCard
          title="Studio"
          price="$3,500"
          features={[
            "16 YouTube videos",
            "16 Shorts",
            "YouTube Thumbnails",
            "Shorts Thumbnails",
            "A/B Thumbnail Split Test",
            "SEO",
            "Max video length: 15 minutes",
            "24/7 assistance via WhatsApp",
            "Content strategy calls",
            "Generate Hooks",
            "Live Updates via dedicated CRM",
          ]}
          link="https://buy.stripe.com/aEU6pY5C20T7bZe4gi"
          isRecommended={true}
        />
        <PricingCard
          title="Creator"
          price="$1,900"
          features={[
            "8 YouTube videos",
            "8 Shorts",
            "YouTube Thumbnails",
            "Shorts Thumbnails",
            "SEO",
            "Max video length: 15 minutes",
            "24/7 assistance via WhatsApp",
            "Live Updates via dedicated CRM",
          ]}
          link="https://buy.stripe.com/dR6"
          isRecommended={false}
        />
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, features, link, isRecommended }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="text-white bg-slate-600/20 p-6 rounded-2xl"
    >
      {isRecommended && (
        <p className="uppercase font-bold text-[#2a2a28] mainfont bg-[#e0f63c] px-6 py-2 rounded-3xl shadow-sm w-fit relative bottom-10">
          Most Recommended
        </p>
      )}
      <div className="flex items-center justify-between">
        <img
          alt="Logo"
          loading="lazy"
          width="100"
          height="100"
          decoding="async"
          src={logo.src}
          className="h-auto"
        />
        <p className="uppercase font-bold mainfont bg-[#2a2a28] px-6 py-2 rounded-3xl shadow-sm">
          {title}
        </p>
      </div>
      <p className="text-[#ffffff] opacity-60 mt-2">
        Explore and compare our packages
      </p>
      <div>
        <h2 className="text-[50px] mainfont font-extrabold text-[#ffffff]">
          {price}
        </h2>
        {features.map((feature, index) => (
          <div className="flex items-center gap-4 mt-5" key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-[#ffffff] rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="font-semibold text-xl">{feature}</p>
          </div>
        ))}
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center m-auto block bg-white text-black hover:bg-[#e0f63c] mainfont py-3 text-xl hover:shadow-sm rounded-xl mt-10 uppercase font-extrabold"
          >
            Buy now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
