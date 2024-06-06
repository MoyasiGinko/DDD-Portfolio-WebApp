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
    <div className="grid place-content-center overflow-hidden bg-slate-900 px-8 py-24 text-slate-50">
      <div className="relative h-[450px] w-[350px]">
        {testimonials
          .slice(currentIndex, currentIndex + 5)
          .map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md cursor-grab active:cursor-grabbing"
              drag={index === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{
                position: "absolute",
                top: `${index * 5}%`,
                left: `${index * 5}%`,
                zIndex: testimonials.length - index,
                width: "calc(100% - 10%)",
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
              />
              <span className="text-center text-lg italic text-slate-400">
                {testimonial.quote}
              </span>
              <span className="text-center text-sm font-medium text-indigo-400">
                {testimonial.name}
              </span>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
