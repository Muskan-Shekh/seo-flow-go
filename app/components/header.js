"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import arrowIcon from "../images/down-chevron.png";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

function useOutsideAlerter(ref, onOutsideClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick(); // Call the passed callback function - Only call if outside click
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
}

const Header = ({ onButtonClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhatsIncludedOpen, setIsWhatsIncludedOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSEOOpen, setIsSEOOpen] = useState(false);
  const [isPPCOpen, setIsPPCOpen] = useState(false);
  const [isMarketingOpen, setIsMarketingOpen] = useState(false);
  const wrapperRef = useRef(null);
  const aboutRef = useRef(null);

  useOutsideAlerter(wrapperRef, () => setIsWhatsIncludedOpen(false));
  useOutsideAlerter(aboutRef, () => setIsAboutOpen(false));
  
  return (
    <nav className="bg-blue-900 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="SEO FLOW GO Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SEO FLOW GO
          </span>
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white hover:text-orange-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                // aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                // onClick={() => {
                //   setIsWhatsIncludedOpen(!isWhatsIncludedOpen);
                //   setIsAboutOpen(false);
                // }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click event from propagating to the document, avoiding interference with the outside click
                  setIsWhatsIncludedOpen(prevState => !prevState); // Toggle the state
                  setIsAboutOpen(false); // Close the "About" section
                }}
                className="cursor-pointer block flex flex-row py-2 px-3 text-white hover:text-orange-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <p className="mr-1">What's Included</p>
                <Image
                  src={arrowIcon}
                  style={{ width: "14px", height: "18px", marginTop: "5px" }}
                />
              </a>
              {isWhatsIncludedOpen && (
                <div
                  className="md:absolute bg-blue-800 mt-2 md:mt-6 p-4"
                  ref={wrapperRef}
                >
                  <div>
                    <button
                      onClick={() => setIsSEOOpen(!isSEOOpen)}
                      className="flex justify-between w-full text-left py-2 px-3 rounded-lg bg-blue-800 hover:bg-blue-700"
                    >
                      Search Engine Optimisation{" "}
                      {isSEOOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {isSEOOpen && (
                      <ul className="ml-4 mt-2 space-y-1">
                        <li className="hover:text-orange-400 cursor-pointer">
                          Local SEO
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer">
                          National SEO
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer">
                          International SEO
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer">
                          eCommerce SEO
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* PPC Advertising */}
                  <div className="mt-3">
                    <button
                      onClick={() => setIsPPCOpen(!isPPCOpen)}
                      className="flex justify-between w-full text-left py-2 px-3 rounded-lg bg-blue-800 hover:bg-blue-700"
                    >
                      PPC Advertising{" "}
                      {isPPCOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {isPPCOpen && (
                      <ul className="ml-4 mt-2 space-y-1">
                        <li className="hover:text-orange-400 cursor-pointer">
                          Google Ads
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer">
                          Google Shopping
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer">
                          Bing Ads
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer">
                          Remarketing
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* Get Your Free Search */}
                  <div className="mt-3">
                    <button
                      onClick={() => setIsMarketingOpen(!isMarketingOpen)}
                      className="flex justify-between w-full text-left py-2 px-3 rounded-lg bg-blue-800 hover:bg-blue-700"
                    >
                      Get Your Free Search{" "}
                      {isMarketingOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {isMarketingOpen && (
                      <div className="ml-4 mt-2">
                        <p className="font-semibold">Marketing Plan + Quote</p>
                        <button className="mt-2 bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-orange-600">
                          Get Started
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
            <li>
              <a
                onClick={() => {
                  setIsAboutOpen(!isAboutOpen);
                  setIsWhatsIncludedOpen(false);
                }}
                className="cursor-pointer block flex flex-row py-2 px-3 text-white hover:text-orange-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <p className="mr-1">About</p>
                <Image
                  src={arrowIcon}
                  style={{ width: "14px", height: "18px", marginTop: "5px" }}
                />
              </a>
              {isAboutOpen && (
                <div
                  ref={aboutRef}
                  className={`${
                    isAboutOpen ? "block" : "hidden"
                  } bg-blue-800 flex flex-row text-white shadow-lg rounded-md mt-2 md:mt-6 md:absolute md:w-[12rem] w-full`}
                >
                  <ul className="text-sm px-4 py-2">
                    <li>
                      <Link
                        href="/careers"
                        className="hover:text-orange-500 cursor-pointer"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="hover:text-orange-500 mt-2 cursor-pointer"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                  <ul className="text-sm px-4 py-2">
                    <button className="bg-green-500 px-4 rounded-lg text-white hover:bg-orange-600">
                      NOW HIRING
                    </button>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="/careers"
                className="block py-2 px-3 text-white hover:text-orange-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block py-2 px-3 text-white hover:text-orange-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blog
              </a>
            </li>
            <li>
              <button
                onClick={onButtonClick}
                className="bg-orange-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-orange-600"
              >
                GET FREE QUOTE
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
