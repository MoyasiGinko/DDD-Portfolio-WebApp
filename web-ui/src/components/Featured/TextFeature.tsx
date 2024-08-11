"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import VideoEmbed from "./VideoEmbed";
import ProjectShowcase from "./ShowWorks";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-transparent mt-6">
      <TextParallaxContent>
        <ProjectShowcase />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyVideo />
      </div>
      {children}
    </div>
  );
};

const StickyVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"], // Adjusted offsets for the sticky effect
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        opacity,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <VideoEmbed />
    </motion.div>
  );
};

const Content = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-12 md:col-span-6"></div>
  </div>
);

export default TextParallaxContentExample;
