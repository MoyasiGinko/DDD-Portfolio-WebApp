"use clietn";
import React from "react";
import { AuroraHero } from "../Hero/AuroraHero";
import { TextParallaxContentExample } from "../Featured/TextFeature";
import { BouncyCardsFeatures } from "../Featured/CardFeature";
import TestimonialCarousel from "../Cards/TestimonialCard";
import WhyChooseUs from "../WhyChooseUs/WhyChoose";
import OurServices from "../Services/OurServices";
import OtherServices from "../Services/OtherServices";
import Pricing from "../Pricing/PricingPage";
import Contact from "../Contact/ContactForm";
import FAQ from "../FAQ/FaqPage";
import Footer from "../Footer/FooterPage";
import CustomHero from "../Hero/CustomHero";

export const HomePage = (): React.ReactNode => {
  return (
    <main className="mt-0">
      <div id="Home">
        <CustomHero />
        {/* <AuroraHero /> */}
      </div>
      <div id="About">
        <TextParallaxContentExample />
      </div>
      <div id="Works">
        <BouncyCardsFeatures />
      </div>
      <div id="Reviews">
        <TestimonialCarousel />
      </div>
      <div id="Why Us?">
        <WhyChooseUs />
      </div>
      <div id="Services">
        <OurServices />
      </div>
      <div>
        <OtherServices />
      </div>
      <div id="Pricing">
        <Pricing />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div id="FAQ">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
};
