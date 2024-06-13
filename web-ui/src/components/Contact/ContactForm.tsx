"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import socialData from "./socialData.json";

interface Socials {
  id: number;
  url: string;
  title: string;
}

const Contact = () => {
  return (
    <div className="bg-transparent mt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="mb-2 text-6xl font-bold text-gray-100">Contact Us</h2>
          <p className="mb-4 text-[20px] max-sm:text-[16px] max-sm:mt-5 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent text-center w-[50%] max-sm:w-full font-semibold m-auto">
            We'd love to hear from you. Please contact us from one of the
            options below.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {socialData.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-transparent rounded-lg shadow-lg p-8 w-full sm:w-1/2 lg:w-1/3"
            >
              <TiltCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TiltCard = ({ card }: { card: Socials }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-indigo-300/40 to-violet-300/10"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-transparent"
      >
        <div className="relative h-full w-full flex flex-col items-center justify-between  rounded-xl">
          <img
            src={card.url}
            alt={card.title}
            className="h-full w-full object-cover rounded-t-xl"
            style={{
              transform: "translateZ(75px)",
            }}
          />
          <div
            style={{
              transform: "translateZ(75px)",
            }}
            className="w-full flex justify-center py-2"
          >
            <button className="bg-gradient-to-br from-indigo-300/40 to-violet-300/10 text-white py-2 px-4 rounded-lg">
              {card.title}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export default Contact;
