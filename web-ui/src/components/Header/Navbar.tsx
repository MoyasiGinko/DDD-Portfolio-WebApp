"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import FadingShadow from "./FadingShadow";

const lefttabs = ["Home", "About", "FAQ"];
const righttabs = ["Works", "Pricing", "Contact"];

export const Navbar = () => {
  const [selected, setSelected] = useState(lefttabs[0]);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="px-3 py-3 bg-slate-900 rounded-full flex items-center flex-wrap gap-2">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit justify-between gap-10 rounded-full shadow-cyan-hover bg-slate-800 p-1 "
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

        <FadingShadow>
          <a className="text-slate-300 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base">
            <span className="relative z-10">LOGO</span>
          </a>
        </FadingShadow>

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
      } relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
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
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
