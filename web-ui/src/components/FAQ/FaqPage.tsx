"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is web development?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "How do I know if I need it?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "What does it cost?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "What about SEO?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
  ];

  return (
    <section className="overflow-hidden bg-transparent px-4 py-12 text-slate-50">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="mb-8 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text font-medium text-transparent">
          Let's answer some questions
        </span>
        <span className="mb-8 text-5xl font-bold">FAQs</span>
      </div>
      <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl"></span>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <button className="relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 border-violet-500 text-slate-50">
          <span className="relative z-10">Web dev</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600"></span>
        </button>
        <button className="relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 border-slate-600 bg-transparent text-slate-400">
          <span className="relative z-10">Mobile dev</span>
        </button>
        <button className="relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 border-slate-600 bg-transparent text-slate-400">
          <span className="relative z-10">UI/UX</span>
        </button>
        <button className="relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 border-slate-600 bg-transparent text-slate-400">
          <span className="relative z-10">Copywriting</span>
        </button>
      </div>
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
