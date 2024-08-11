"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import faqsData from "./faqs.json"; // Adjust the path as needed

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    "videoEditing" | "graphicsDesign"
  >("videoEditing");
  const [faqs, setFaqs] = useState<{
    [key: string]: { question: string; answer: string }[];
  }>({});

  useEffect(() => {
    setFaqs(faqsData);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!faqs[selectedCategory]) return null; // Ensure data is loaded before rendering

  return (
    <section className="overflow-hidden bg-transparent mb-20 px-4 py-12 text-slate-50">
      <div className="flex flex-row justify-around gap-2">
        {/* Left part */}
        <div className="relative z-10 flex flex-col">
          <span className="mb-2 text-6xl font-bold">
            Have
            <br />
            Questions?
          </span>
          <div className="mt-10 max-sm:mt-0">
            <p className="my-5 text-2xl font-bold text-[#f0eaea]">
              If you have any more questions
            </p>
            <a
              href="https://forms.gle/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4c4d4a43] w-fit text-[#FFF0E9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:text-indigo-500 max-sm:px-4 max-sm:py-2 max-sm:text-[1.125rem] flex items-center gap-2"
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
                className="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Book a call
            </a>
          </div>
        </div>

        {/* Right part */}
        <div className="">
          <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl"></span>
          <span className="mb-4 text-[20px] max-sm:text-[16px] max-sm:mt-5 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent text-center w-[50%] max-sm:w-full font-semibold ">
            Let's answer some questions
          </span>
          <div className="relative z-10 flex flex-wrap py-4 gap-4">
            <button
              onClick={() => setSelectedCategory("videoEditing")}
              className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-transform duration-500 ${
                selectedCategory === "videoEditing"
                  ? "border-violet-500 text-slate-50 bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg"
                  : "border-slate-600 bg-transparent text-slate-400"
              }`}
            >
              <span className="relative z-10">Video Editing</span>
            </button>

            <button
              onClick={() => setSelectedCategory("graphicsDesign")}
              className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
                selectedCategory === "graphicsDesign"
                  ? "border-violet-500 text-slate-50 bg-gradient-to-r from-violet-600 to-indigo-600"
                  : "border-slate-600 bg-transparent text-slate-400"
              }`}
            >
              <span className="relative z-10">Graphics Design</span>
            </button>
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="space-y-4">
              {faqs[selectedCategory].map(
                (faq: { question: string; answer: string }, index: number) => (
                  <div
                    key={index}
                    className="rounded-xl border-[1px] border-slate-700 px-4 transition-colors bg-slate-900"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between gap-4 py-4"
                    >
                      <span className="text-left text-lg font-medium transition-colors text-slate-400">
                        {faq.question}
                      </span>
                      <span
                        className={`transform transition-transform text-2xl text-slate-400 ${
                          activeIndex === index ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        {activeIndex === index ? <FiMinus /> : <FiPlus />}
                      </span>
                    </button>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: activeIndex === index ? "auto" : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-slate-400"
                    >
                      <p className="py-2">{faq.answer}</p>
                    </motion.div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
