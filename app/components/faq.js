"use client";

import Image from "next/image";
import plus from "../images/plus-symbol-button.png";
import minus from "../images/minus-sign.png";
import { useState } from "react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function FAQ() {
  const questions = [
    {
      question: "What is search engine marketing?",
      answer:
        "Search engine marketing (SEM) combines search engine optimisation (SEO) and pay-per-click (PPC) advertising.SEO is the optimisation and organic promotion of your website to rank it higher on organic search results, where you do not pay when a user clicks your website. PPC is search engine advertising such as Google Ads, where your advertisement is shown on paid search results and you pay when a user clicks your advertisement.",
    },
    {
      question: "How will search engine marketing improve my website?",
      answer:
        "We improve websites by combining development, marketing and user experience (UX) into our search engine marketing (SEM) service. Our five-phase SEO process is below:Discovery: Discover opportunities to improve SEO, Google Ads and their conversions.Targeting: Target keywords are finalised, forming the basis of your SEO and Google Ads campaign.Optimisation: Optimisation of your website commences fixing and optimising key technical issues.Upgrades: Content upgrading begins for key pages of your website.Promotion: Your website backlink campaign commences to improve website authority.We optimise our search marketing strategy to suit your business. You are unique, and your search marketing strategy should be too!",
    },
    {
      question:
        "Are you experienced at improving local search engine marketing?",
      answer:
        "We have been operating as Online Marketing Services since 2018 and within the marketing industry since 2015. Over the years we have helped businesses of all sizes achieve higher traffic and sales through our local search engine marketing (SEM) campaigns.",
    },
    {
      question: "Will you share with me all changes you make to my site?",
      answer:
        "Before we begin your search engine marketing (SEM) service, we will provide you with a full on-page audit of your website. This on-page audit includes all the optimisations we will make on your website, which is then put forward to you for your approval.If we identify any additional improvements we can make to your website during your campaign, you will also be advised of these before any changes are made.",
    },
    {
      question: "How is search engine marketing performance measured?",
      answer:
        "Increases in search acquired traffic, conversions and sales during our SEM campaign which is reported to you on a monthly basis.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [answerHeights, setAnswerHeights] = useState(
    new Array(questions.length).fill(0)
  );
  const [showAll, setShowAll] = useState(false);

  const toggleQuestion = (idx) => {
    const newActiveIndex = activeIndex === idx ? null : idx;
    const newAnswerHeights = new Array(questions.length).fill(0);

    if (newActiveIndex !== null) {
      const element = document.getElementById(`answer-${idx}`);
      newAnswerHeights[idx] = element ? element.scrollHeight : 0;
    }

    setActiveIndex(newActiveIndex);
    setAnswerHeights(newAnswerHeights);
  };

  const handleToggleQuestions = () => {
    setShowAll((prev) => !prev); 
  };

  return (
    <div className={`bg-white py-16 px-4 sm:pl-16 sm:pr-4 ${workSans.className}`}>
      <div className="max-w-7xl max-auto flex flex-col divide-y shadow-xl p-8">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">
          Frequently Asked Questions
        </h1>
        {questions.slice(0, showAll ? questions.length : 4).map(({ question, answer }, idx) => (
          <div key={idx} className="py-6">
            <div
              className="flex items-center justify-between hover:cursor-pointer"
              onClick={() => toggleQuestion(idx)}
            >
              {/* Title */}
              <h2 className="text-lg font-bold leading-6 text-faqDarkPurple hover:text-faqPurple text-gray-600">
                {question}
              </h2>
              {/* Toggle Button */}
              <Image
                src={activeIndex === idx ? minus : plus}
                style={{ width: "20px" }}
                alt="toggle question"
              />
            </div>
            {/* Answer */}
            <div
              id={`answer-${idx}`}
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: `${answerHeights[idx]}px` }}
            >
              <p className="pt-6 text-gray-600">{answer}</p>
            </div>
          </div>
        ))}
         <div className="text-center mt-6">
          <button
            onClick={handleToggleQuestions}
            className="px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-full mt-4"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
}
