"use client";

import Image from "next/image";
import image2 from "../images/woman.jpg";
import plus from "../images/plus-symbol-button.png";
import minus from "../images/minus-sign.png";
import { useState } from "react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function SearchMarketing({ onButtonClick }) {
  const questions = [
    {
      question: "Full Package Search Marketing",
      answer:
        "Our search marketing service includes everything required to get results on search.",
    },
    {
      question: "Unbeatable ROI",
      answer:
        "Search engine marketing shows your products or services to more ready to buy customers than any other form of advertising. Without search marketing, your website will be lost in page 2 of Google and beyond for critical search terms related to your business.",
    },
    {
      question: "Get Started",
      answer:
        "Our search marketing plan and quote is provided free of cost and obligation.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [answerHeights, setAnswerHeights] = useState(
    new Array(questions.length).fill(0)
  );

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
  return (
    <div className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center shadow-xl p-8">
        {/* Left Section - Content */}
        <div className="md:w-3/4 mb-8 md:mb-0">
          {questions.map(({ question, answer }, idx) => (
            <div key={idx} className="py-6">
              <div
                className="flex items-center justify-between hover:cursor-pointer"
                onClick={() => toggleQuestion(idx)}
              >
                {/* Title */}
                <h2 className="text-lg font-bold leading-6 text-faqDarkPurple hover:text-faqPurple text-blue-900">
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
          <div className="flex flex-col md:flex-row items-center justify-between">
            <button
              onClick={onButtonClick}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600"
            >
              GET FREE QUOTE
            </button>
          </div>
          <span></span>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/4 flex justify-center">
          <div className="relative">
            <Image
              src={image2}
              alt="Woman holding phone"
              className="max-w-md rounded-full shadow-lg object-cover h-[25rem] w-[15rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
