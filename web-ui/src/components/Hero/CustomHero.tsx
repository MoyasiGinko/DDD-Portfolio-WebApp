"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image from "@/public/images/hero-bg.png";
import Image from "next/image";

const platforms = [
  "youtube",
  "Instagram",
  "tiktok",
  "Instagram",
  "youtube",
  "tiktok",
];
const colors = [
  "linear-gradient(90deg, rgba(255, 0, 110, 0.6) 0%, rgba(238, 130, 238, 0.6) 100%)", // Gradient red with 60% opacity
  "linear-gradient(90deg, rgba(193, 53, 132, 0.6) 0%, rgba(238, 130, 238, 0.6) 100%)", // Gradient pink with 60% opacity
  "linear-gradient(90deg, rgba(105, 201, 208, 0.6) 0%, rgba(173, 216, 230, 0.6) 100%)", // Gradient cyan with 60% opacity
  "linear-gradient(90deg, rgba(193, 53, 132, 0.6) 0%, rgba(238, 130, 238, 0.6) 100%)", // Gradient pink with 60% opacity
  "linear-gradient(90deg, rgba(255, 10, 110, 0.6) 0%, rgba(238, 130, 238, 0.6) 100%)", // Gradient red with 60% opacity
  "linear-gradient(90deg, rgba(105, 201, 208, 0.6) 0%, rgba(173, 216, 230, 0.6) 100%)", // Gradient cyan with 60% opacity
];

const CustomHero = () => {
  const [currentPlatform, setCurrentPlatform] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length);
    }, 2000); // Change platform every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="py-10 rounded-3xl mx-auto h-screen max-sm:py-8 relative"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay to darken the background */}
      <div className="mx-40 max-sm:mx-6 mt-20 relative z-10">
        <motion.h1
          className="uppercase text-center text-xl mb-5 text-[#DBFA9B] max-sm:text-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          With your dedicated content teams
          <br className="hidden max-sm:block" /> viral touch
        </motion.h1>
        <motion.h1
          className="text-[100px] text-center font-extrabold text-white capitalize leading-[100px] max-sm:leading-[50px] max-sm:text-[50px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Grow super fast
          <br />
        </motion.h1>
        <div className="flex justify-center mt-2 items-center">
          <motion.h1
            className="text-[100px] text-center font-extrabold text-white capitalize leading-[100px] max-sm:leading-[50px] max-sm:text-[50px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            on
          </motion.h1>
          <div className="relative h-[8rem] max-sm:h-[3rem] overflow-hidden ml-4 max-sm:ml-2">
            <motion.p
              key={currentPlatform}
              className="text-[100px] w-[520px] ml-8 max-sm:ml-2 text-left font-extrabold zip capitalize leading-[120px] max-sm:leading-[50px] max-sm:text-[40px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              style={{
                background: colors[currentPlatform],
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {platforms[currentPlatform]}
            </motion.p>
          </div>
        </div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="307"
          height="34"
          viewBox="0 0 307 34"
          fill="none"
          className="m-auto block max-sm:mr-[20%] max-md:mr-[30%] max-lg:mr-[40%] max-sm:w-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <path
            d="M303.498 26.5334C183.108 -17.8935 53.0014 10.644 2.99697 30.4662"
            stroke="#DBFA9B"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </motion.svg>
        <motion.p
          className="text-[21px] font-normal text-center text-gray-500 mt-10 mx-10 max-sm:mx-4 max-sm:text-[15px] max-sm:mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Generate views and sales with our expert team, who have worked with
          the <br /> biggest creators. Relax, we handle it all for you.
        </motion.p>
        <div className="flex justify-center gap-5 mt-10 max-sm:flex-wrap">
          <motion.a
            className="bg-[#FFFFFF] cursor-pointer capitalize text-[#0d0d0dd9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:bg-[#4c4d4a43] hover:text-[#fffffffd] duration-300 max-sm:px-4 max-sm:py-2 max-sm:w-full text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            href="#"
          >
            view pricing
          </motion.a>
          <motion.a
            className="bg-[#4c4d4a43] cursor-pointer capitalize text-[#FFF0E9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:text-[#0d0d0dd9] hover:bg-[#FFF0E9] duration-300 max-sm:px-4 max-sm:py-2 max-sm:w-full max-sm:justify-center flex gap-2 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            get started
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default CustomHero;
