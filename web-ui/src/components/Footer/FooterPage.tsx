"use client";

import React from "react";

const Footer = () => {
  return (
    <div className=" p-4 bg-slate-950 flex justify-around items-center max-sm:flex-wrap">
      <img
        alt="Logo"
        loading="lazy"
        width="200"
        height="57"
        decoding="async"
        style={{ color: "transparent" }}
        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogopng.fad4244e.png&w=256&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogopng.fad4244e.png&w=640&q=75 2x"
        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogopng.fad4244e.png&w=640&q=75"
      />
      <div className="flex items-center gap-2 capitalize">
        © 2024 MOYASI | all rights reserved by MOYASI
      </div>
      <div className="flex items-center justify-end gap-20 max-sm:gap-5 max-sm:mt-5">
        <a className="cursor-pointer text-xl font-bold px-2 py-2 rounded-full text-[#525153] bg-[#e7b8fa] duration-200 max-sm:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 18.75l7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
