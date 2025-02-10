"use client";

import React, { useState, useRef } from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Banner from "./components/bannerSection.js";
import MarketingSection from "./components/marketingSection.js";
import MarketingStrategies from "./components/marketingStrategies.js";
import Testimonial from "./components/testimonial.js";
import SearchMarketing from "./components/searchMarketing.js";
import CustomerService from "./components/customerService.js";
import FAQ from "./components/faq.js";
import LastContent from "./components/lastContent.js";

export default function Home() {
  const [highlightForm, setHighlightForm] = useState(false);
  const formRef = useRef(null); // Create a reference to the form in Banner

  const handleButtonClick = () => {
    // Scroll to the form in the Banner component
    formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

    // Highlight the form
    setHighlightForm(true);

    // Reset the highlight after 3 seconds
    setTimeout(() => setHighlightForm(false), 2000);
  };

  return (
    <div className="min-h-screen bg-blue-500 text-white">
      {/* Header */}
      <Header onButtonClick={handleButtonClick}></Header>
      {/* Main Content */}
      <Banner highlightForm={highlightForm} formRef={formRef}></Banner>
      {/* Marketing section */}
      <MarketingSection></MarketingSection>
      {/* Marketing strategies */}
      <MarketingStrategies
        onButtonClick={handleButtonClick}
      ></MarketingStrategies>
      {/* Testimonial section */}
      <Testimonial></Testimonial>
      {/* Search marketing */}
      <SearchMarketing onButtonClick={handleButtonClick}></SearchMarketing>
      {/* Customer service */}
      <CustomerService></CustomerService>
      {/* FAQ section */}
      <FAQ></FAQ>
      {/* last Content */}
      <LastContent></LastContent>
      {/* footer content */}
      <Footer onButtonClick={handleButtonClick}></Footer>
    </div>
  );
}
