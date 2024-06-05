"use client";
import React from "react";
import { Navbar } from "./Navbar";
import FadingShadow from "./FadingShadow";

export const HeaderTabs = (): React.ReactNode => {
  return (
    <div className="flex justify-center items-center ">
      <FadingShadow>
        <Navbar />
      </FadingShadow>
    </div>
  );
};
