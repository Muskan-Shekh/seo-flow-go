"use client";

import Image from "next/image";
import image1 from "../images/metro-tiles-results.png";
import Carousel from "react-elastic-carousel";

export default function Testimonial() {
  return (
    <div className="bg-white py-16 px-4 sm:pl-16 sm:pr-4">
      <div className="max-w-7xl bg-blue-500 rounded-lg p-2">
        <Carousel>
          <div className="mx-auto flex flex-col md:flex-row items-center text-white p-6">
            {/* Left Section - Testimonial Text */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Client Testimonial
              </h2>
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-lg mb-4">
                “Ty has been an essential partner for Metro Tiles for over 5
                years. His hard work, integrity, and commitment to achieving
                results is second to none. I highly recommend Online Marketing
                Services for an honest and ethical marketing service.”
              </p>
              <p className="italic">– Scott, Metro Tiles</p>
              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600">
                GET FREE QUOTE
              </button>
              <p className="text-sm mt-2">
                First page visibility. No lock-in contracts.
              </p>
            </div>

            {/* Right Section - Image */}
            <div className="md:w-1/2 relative">
              <div className="bg-white shadow-lg rounded-lg p-4 relative z-10">
                <h3 className="text-green-500 font-bold text-xl mb-2">
                  75.54%
                </h3>
                <p className="text-sm font-bold mb-4 text-blue-900">
                  We Increased Metro Tiles’ Organic Traffic Over 75.54%!
                </p>
                <Image
                  src={image1}
                  alt="Traffic Stats"
                  className="w-full mb-2 rounded"
                />
                <p className="text-xs text-gray-600">
                  2021 User Acquisition Data Compared With 2020
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex flex-col md:flex-row items-center text-white p-6">
            {/* Left Section - Testimonial Text */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Client Testimonial
              </h2>
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-lg mb-4">
                “Ty has been an essential partner for Metro Tiles for over 5
                years. His hard work, integrity, and commitment to achieving
                results is second to none. I highly recommend Online Marketing
                Services for an honest and ethical marketing service.”
              </p>
              <p className="italic">– Scott, Metro Tiles</p>
              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600">
                GET FREE QUOTE
              </button>
              <p className="text-sm mt-2">
                First page visibility. No lock-in contracts.
              </p>
            </div>

            {/* Right Section - Image */}
            <div className="md:w-1/2 relative">
              <div className="bg-white shadow-lg rounded-lg p-4 relative z-10">
                <h3 className="text-green-500 font-bold text-xl mb-2">
                  75.54%
                </h3>
                <p className="text-sm font-bold mb-4 text-blue-900">
                  We Increased Metro Tiles’ Organic Traffic Over 75.54%!
                </p>
                <Image
                  src={image1}
                  alt="Traffic Stats"
                  className="w-full mb-2 rounded"
                />
                <p className="text-xs text-gray-600">
                  2021 User Acquisition Data Compared With 2020
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
