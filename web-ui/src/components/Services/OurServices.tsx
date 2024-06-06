"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

import cardsData from "./servicesData.json";

interface Cards {
  id: number;
  url: string;
  title: string;
}

const OurServices = () => {
  return (
    <div className="bg-slate-900 text-slate-50">
      <h1 className="font-bold uppercase text-4xl text-center text-neutral-100">
        Our Services
      </h1>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const [cards, setCards] = useState<Cards[]>([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <TiltCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TiltCard = ({ card }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

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
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translateZ(75px)",
          }}
          className="absolute inset-0 z-0 rounded-xl"
        ></div>
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="absolute inset-0 z-10 grid place-content-center"
        >
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-bold text-black backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OurServices;

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
