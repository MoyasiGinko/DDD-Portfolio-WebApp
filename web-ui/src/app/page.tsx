import Image from "next/image";
import { Planet } from "../models/Planet";
import ChipTabs, { SlideTabsExample } from "../components/Header/Navbar";
import CombinedTabs from "../components/Header/Navbar";
import HeaderTabs from "../components/Header/HeaderTabs";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <SlideTabsExample /> */}
      {/* <ChipTabs /> */}
      <HeaderTabs />
      <Planet />
    </main>
  );
}
