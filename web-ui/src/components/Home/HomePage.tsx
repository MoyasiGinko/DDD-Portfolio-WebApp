import React from "react";
import { AuroraHero } from "../Hero/AuroraHero";
import { TextParallaxContentExample } from "../Featured/TextFeature";
import { BouncyCardsFeatures } from "../Featured/CardFeature";

export const HomePage = (): React.ReactNode => {
  return (
    <main className=" mt-0">
      <AuroraHero />
      <div className="">
        <TextParallaxContentExample />
      </div>
      <BouncyCardsFeatures />
    </main>
  );
};
