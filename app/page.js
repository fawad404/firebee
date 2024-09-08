import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import WhatSection from "./components/whatSection/WhatSection";
import Card from "./components/card/Card";
import Faqs from "./components/faqs/Faqs";
import FaqsSection from "./components/FaqsSection/FaqsSection";
import Box from "./components/box/Box";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <WhatSection />
    <Card />
    <Box />
    <Footer />
    </>
  );
}
