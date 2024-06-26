"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonialsData from "./testimonials.json";

interface Testimonial {
  name: string;
  role: string;
  video: string;
  image: string;
  feedback: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(
    testimonialsData || []
  );

  useEffect(() => {
    handleNext();
  }, []);

  const handleNext = () => {
    setTestimonials((prevTestimonials) => {
      if (prevTestimonials.length > 0) {
        const newArray = [...prevTestimonials];
        const currentObject = newArray.shift() as Testimonial;
        newArray.push(currentObject);
        return newArray;
      }
      return prevTestimonials;
    });
  };

  const handleDragEnd = () => {
    setActiveIndex((prevIndex) => (prevIndex + 0) % testimonials.length);
  };

  return (
    <section className="overflow-hidden bg-transparent w-full text-slate-50">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end p-8 mx-8 rounded-2xl space-y-8 md:space-y-0 md:space-x-8 max-sm:space-y-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 ">
          <AnimatePresence>
            {testimonials.map(
              (testimonial, index) =>
                index === activeIndex && (
                  <div className="duration-500 h-[450px] w-full md:rounded-tr-none md:rounded-br-none rounded-[40px] p-8 border-2 border-indigo-900  bg-gradient-to-r from-indigo-900/30 to-indigo-800/30">
                    <div className="flex gap-5 items-center">
                      <img
                        alt={testimonial.name}
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        className="rounded-full w-16 h-16 md:w-24 md:h-24"
                        src={testimonial.image}
                      />
                      <div>
                        <p className="text-xl md:text-2xl font-medium text-white px-3">
                          {testimonial.name}
                        </p>
                        <p className="text-sm md:text-lg font-medium uppercase text-white bg-gradient-to-r from-violet-500 to-indigo-500 w-fit px-3 rounded-2xl">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <h1 className="mt-5 md:mt-10 text-2xl md:text-3xl font-bold text-[#e9e9e8] leading-snug">
                      {testimonial.feedback}
                    </h1>
                  </div>
                )
            )}
          </AnimatePresence>
        </div>

        <div className="floating-cards relative md:left-[-48px] rounded-2xl  h-[500px]  md:h-[500px] w-full md:w-[300px] mx-auto z-50">
          {testimonials
            .slice(activeIndex, activeIndex + 5)
            .map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-card select-none place-content-center space-y-6 rounded-2xl cursor-grab active:cursor-grabbing"
                drag={index === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: index * 10 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  left: `${index * 20}%`,
                  zIndex: testimonials.length - index,
                }}
              >
                <iframe
                  src={testimonial.video}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  className="rounded-2xl block cursor-grab active:cursor-grabbing"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={`Video ${index + 1}`}
                />
              </motion.div>
            ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-[#4c4d4a43] capitalize text-[#ffffff] text-lg md:text-xl font-medium hover:text-[#0d0d0dd9] hover:bg-indigo-600 duration-300 rounded-full px-6 py-4 md:px-7 md:py-6 m-auto mt-10 md:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
