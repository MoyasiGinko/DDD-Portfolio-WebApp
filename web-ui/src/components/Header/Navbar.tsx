"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import FadingShadow from "./FadingShadow";

const lefttabs = ["Home", "About", "Works", "Services"];
const righttabs = ["Why Us?", "Pricing", "Contact", "FAQ"];

export const Navbar = () => {
  const [selected, setSelected] = useState(lefttabs[0]);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const bgColor = "rgba(39, 47, 73, 0.3)"; // Slate with 90% opacity
  const navColor = "rgba(39, 47, 73, 0.4)"; // Slightly less opaque on hover

  return (
    <div
      className="px-2 py-2 mt-20  rounded-full flex items-center flex-wrap gap-2"
      style={{ backgroundColor: bgColor }}
    >
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto  flex w-fit justify-between gap-10 rounded-full p-1 "
        style={{ backgroundColor: navColor }}
      >
        <div className="flex ">
          {lefttabs.map((tab) => (
            <Tab
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              setPosition={setPosition}
              key={tab}
            />
          ))}
        </div>

        <a className="text-slate-300 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base">
          <span className="relative">LOGO</span>
        </a>

        <div className="flex">
          {righttabs.map((tab) => (
            <Tab
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              setPosition={setPosition}
              key={tab}
            />
          ))}
        </div>
        <Cursor position={position} />
      </ul>
    </div>
  );
};

const Tab = ({ text, selected, setSelected, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onClick={() => setSelected(text)}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`${
        selected ? "text-white" : "text-slate-300 hover:text-slate-200"
      } relative z-[10] block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base transition-colors`}
    >
      <a href={`#${text}`} className="relative z-[10]">
        {text}
      </a>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-[0] bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
        ></motion.span>
      )}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-[0] h-7 rounded-full bg-black md:h-12"
    />
  );
};
