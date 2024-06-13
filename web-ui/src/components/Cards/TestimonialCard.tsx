"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import reviews from "./reviews.json";

interface Testimonial {
  id: number;
  image: string;
  quote: string;
  name: string;
}

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials(reviews);
  }, []);

  const handleDragEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="overflow-hidden bg-transparent px-8 py-24 text-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <h3 className="text-5xl font-black leading-[1.25] md:text-7xl">
            Reviews from Customers
          </h3>
          <p className="mb-8 mt-4 text-lg text-slate-400">
            ...but we're going to help. We send out weekly break downs of
            exactly what's working and what's not for the largest companies in
            the world. It's free.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border-transparent bg-slate-800 px-3 py-2 transition-colors focus:bg-slate-700 focus:outline-none"
            />
            <button className="whitespace-nowrap rounded bg-indigo-600 px-3 py-2 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Join newsletter
            </button>
          </form>
        </div>

        <div className="relative h-[450px] w-[350px]">
          {testimonials
            .slice(currentIndex, currentIndex + 5)
            .map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/80 p-6 shadow-xl backdrop-blur-md cursor-grab active:cursor-grabbing"
                drag={index === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                style={{
                  position: "absolute",
                  top: `${index * 4}%`, // Increased space between stack cards
                  left: `${index * 16}%`, // Increased space between stack cards
                  zIndex: testimonials.length - index,
                  width: "280px", // Fixed width for the card
                  height: "400px", // Fixed height for the card
                }}
                whileHover={{ scale: 1.05 }} // Hover animation
                whileTap={{ scale: 0.95 }} // Tap animation
              >
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
                  initial={{ scale: 0.9 }} // Initial scale animation
                  animate={{ scale: 1 }} // Animation when card appears
                  transition={{ duration: 0.5 }} // Animation duration
                />
                <motion.span
                  className="text-center text-lg italic text-slate-400"
                  initial={{ opacity: 0 }} // Initial opacity animation
                  animate={{ opacity: 1 }} // Animation when card appears
                  transition={{ delay: 0.3, duration: 0.5 }} // Animation delay and duration
                >
                  {testimonial.quote}
                </motion.span>
                <motion.span
                  className="text-center text-sm font-medium text-indigo-400"
                  initial={{ opacity: 0 }} // Initial opacity animation
                  animate={{ opacity: 1 }} // Animation when card appears
                  transition={{ delay: 0.6, duration: 0.5 }} // Animation delay and duration
                >
                  {testimonial.name}
                </motion.span>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
