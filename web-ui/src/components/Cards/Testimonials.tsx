"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Spencer",
    role: "E-commerce Specialist",
    video:
      "https://player.vimeo.com/video/900756046?badge=0&autopause=0&player_id=0&app_id=58479",
    image:
      "https://res.cloudinary.com/dr5fbjefd/image/upload/v1704725597/Spencer_Pawliw_gpkj4s.jpg",
    feedback:
      "I cannot begin to explain how much those guys are lifesavers making my content just look amazing.",
  },
  {
    name: "Lucy",
    role: "AWS expert",
    video:
      "https://player.vimeo.com/video/901915378?badge=0&autopause=0&player_id=0&app_id=58479",
    image:
      "https://res.cloudinary.com/dr5fbjefd/image/upload/v1704986897/1688975462936_e8smo4.jpg",
    feedback:
      "Very quick turnaround time and very high quality videos. Big shoutout to them.",
  },
  {
    name: "Derek Tun",
    role: "Fitness Coach",
    video:
      "https://player.vimeo.com/video/900810215?badge=0&autopause=0&player_id=0&app_id=58479",
    image:
      "https://res.cloudinary.com/dr5fbjefd/image/upload/v1704725688/Derek_Tun_ttnex6.jpg",
    feedback:
      "The turnover rate is very quick and the support has been amazing.",
  },
  {
    name: "Jonathan",
    role: "Dietitian",
    video:
      "https://player.vimeo.com/video/900811450?badge=0&autopause=0&player_id=0&app_id=58479",
    image:
      "https://res.cloudinary.com/dr5fbjefd/image/upload/v1704725581/Jonathan_Picture_sstl7m.png",
    feedback:
      "These guys are highly knowledgeable and supportive. I highly recommend MZ media if you wanna grow super fast on social media.",
  },
  {
    name: "Nick",
    role: "Entrepreneur",
    video:
      "https://player.vimeo.com/video/900808260?badge=0&autopause=0&player_id=0&app_id=58479",
    image:
      "https://res.cloudinary.com/dr5fbjefd/image/upload/v1704581939/IMG_3535_vtna4t.jpg",
    feedback:
      "Honestly, they are the BEST in the game and I highly recommend MZ Media if you are looking for Editor.",
  },
];

const videoUrls = testimonials.map((testimonial) => testimonial.video);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="grid grid-cols-2 items-start place-items-end max-sm:place-items-center max-sm:grid-cols-1">
      <div>
        {testimonials.map((testimonial, index) => (
          <AnimatePresence key={index}>
            {index === activeIndex && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`duration-500 w-[700px] max-sm:w-full ${
                  index !== activeIndex && "opacity-0"
                } md:absolute left-20`}
              >
                <div className="flex gap-5 items-center">
                  <img
                    alt={testimonial.name}
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    className="rounded-full max-sm:w-16 max-sm:h-16 h-24 w-24"
                    src={testimonial.image}
                  />
                  <div>
                    <p className="text-[24px] max-sm:text-xl mainfont font-[500] text-[#30312c] px-3">
                      {testimonial.name}
                    </p>
                    <p className="text-[20px] max-sm:text-sm mainfont font-[500] uppercase text-[#30312c] bg-[#DBFA9B] w-fit px-3 rounded-2xl">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <h1 className="mt-10 max-sm:my-5 text-[56px] max-sm:text-[26px] font-bold max-sm:font-semibold text-[#e9e9e8] leading-[68px] max-sm:leading-[40px]">
                  {testimonial.feedback}
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      <div className="max-sm:mt-5">
        <div className="overflow-hidden p-1 w-fit h-fit rounded-2xl mx-2">
          <iframe
            src={videoUrls[activeIndex]}
            width="300"
            height="500"
            frameBorder="0"
            className="rounded-2xl m-auto block"
            allow="autoplay; fullscreen; picture-in-picture"
            title={`Video ${activeIndex + 1}`}
          />
        </div>
        <button
          onClick={handleNext}
          className="bg-[#4c4d4a43] capitalize text-[#ffffff] text-[22px] font-[500] hover:text-[#0d0d0dd9] hover:bg-[#e0f63c] duration-300 rounded-full px-7 py-6 m-auto block mt-10"
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
