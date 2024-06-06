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

export const HomePage = (): React.ReactNode => {
  return (
    <main className=" mt-0">
      <AuroraHero />
      <div className="">
        <TextParallaxContentExample />
      </div>
      <BouncyCardsFeatures />
      <TestimonialCarousel />
      <WhyChooseUs />
      <OurServices />
      <OtherServices />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
};
