"use client";
import React from "react";
import { Navbar } from "./Navbar";
import FadingShadow from "./FadingShadow";

export const HeaderTabs = (): React.ReactNode => {
  return (
    <div className="absolute mt-2">
      <Navbar />
    </div>
  );
};
