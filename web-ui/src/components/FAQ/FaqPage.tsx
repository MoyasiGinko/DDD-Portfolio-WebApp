"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    "videoEditing" | "graphicsDesign"
  >("videoEditing");

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = {
    videoEditing: [
      {
        question: "What software do I need for video editing?",
        answer:
          "For video editing, you'll need software such as Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve. These tools offer a wide range of features to edit, cut, and enhance your videos.",
      },
      {
        question: "How can I improve the quality of my videos?",
        answer:
          "Improving video quality can be achieved by using high-resolution footage, proper lighting, and professional editing software. Additionally, make sure to use high-quality audio equipment to enhance the overall production.",
      },
      {
        question: "What is color grading in video editing?",
        answer:
          "Color grading is the process of adjusting the colors and tones in your video to create a specific mood or look. It involves manipulating contrast, saturation, and color balance to achieve a desired visual effect.",
      },
    ],
    graphicsDesign: [
      {
        question: "What should I consider when designing graphics for the web?",
        answer:
          "When designing graphics for the web, consider factors such as resolution, file size, and format. Use vector graphics for scalability, optimize images for faster loading times, and ensure your designs are visually appealing and user-friendly.",
      },
      {
        question:
          "How do I choose the right font for a graphic design project?",
        answer:
          "Choosing the right font involves considering the project's theme, audience, and readability. Select fonts that complement your design and ensure they are legible across different devices and screen sizes.",
      },
      {
        question: "What is the importance of whitespace in graphic design?",
        answer:
          "Whitespace, or negative space, is crucial in graphic design as it helps to create a clean and organized layout. It improves readability, emphasizes key elements, and enhances the overall visual appeal of your design.",
      },
    ],
  };

  return (
    <section className="overflow-hidden bg-transparent mb-20 px-4 py-12 text-slate-50">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="mb-2 text-5xl font-bold">FAQs</span>
        <span className="mb-4 text-[20px] max-sm:text-[16px] max-sm:mt-5 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent text-center w-[50%] max-sm:w-full font-semibold m-auto">
          Let's answer some questions
        </span>
      </div>
      <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl"></span>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => setSelectedCategory("videoEditing")}
          className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
            selectedCategory === "videoEditing"
              ? "border-violet-500 text-slate-50 bg-gradient-to-r from-violet-600 to-indigo-600"
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
      <div className="mx-auto mt-12 max-w-3xl">
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
    </section>
  );
};

export default FAQ;
