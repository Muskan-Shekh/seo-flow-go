"use client";

import React from "react";

export default function Banner({ highlightForm, formRef }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Is your business on{" "}
            <span className="relative inline-block">
              <span className="z-10 relative">Page #1</span>
              <span className="absolute -left-2 -top-1 bg-yellow-500 h-3/4 w-full rounded-md -z-10"></span>
            </span>{" "}
            of Google?
          </h1>
          <p className="mt-4 text-lg">
            Turn search engines such as GOOGLE & BING into your cheapest, most
            effective 24/7 selling tool.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 mt-8 md:mt-0">
          <div
            ref={formRef} // Attach the formRef to the form div
            className={`bg-blue-900 rounded-lg p-6 shadow-lg transition-all duration-300 ${
              highlightForm ? "bg-stone-950 shadow-2xl" : ""
            }`}
          >
            <h2 className="text-xl font-semibold">
              Free Search Marketing Plan + Quote
            </h2>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white text-black"
              />
              <input
                type="text"
                placeholder="Your Website"
                className="w-full p-3 rounded-lg bg-white text-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white text-black"
              />
              <select className="w-full p-3 rounded-lg bg-white text-black">
                <option>Contact Me by Email</option>
                <option>Contact Me by Phone</option>
              </select>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600"
              >
                GET FREE QUOTE
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-300">
              First page visibility. No lock-in contracts.
            </p>
            <p className="mt-2 text-xs text-gray-400">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
