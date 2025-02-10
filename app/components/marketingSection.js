"use client";

import Carousel from "react-elastic-carousel";
import image1 from "../images/local-seo.webp";
import image2 from "../images/national-seo.webp";
import Image from "next/image";
import Slider from "react-slick";

export default function MarketingSection() {
  const menuItems = [
    "Magento",
    "WordPress",
    "Joomla",
    "nopCommerce",
    "phpBB",
    "PrestaShop",
    "Drupal",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // How many items to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Time for autoplay transition
    responsive: [
      {
        breakpoint: 768, // For smaller screen sizes
        settings: {
          slidesToShow: 2, // Show 2 items on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 item on very small screens
        },
      },
    ],
  };

  const slides = [
    {
      title: "National SEO",
      description:
        "National SEO increases website visibility for more broad, non-location specific search queries. National SEO is particularly important for businesses with multiple physical locations across Australia or e-commerce stores.",
      image: image2,
    },
    {
      title: "Local SEO",
      description:
        "Local SEO increases website visibility across Google's local search network. If your business has a physical location, local SEO represents a critical component in customer acquisition.",
      image: image1,
    },
  ];

  return (
    <div className="bg-white shadow-xl">
      {/* Top Bar */}
      <div className="bg-blue-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-6 justify-center items-center overflow-hidden">
          {/* Slogan */}
          <h2 className="text-3xl md:text-4xl text-center font-bold text-white">
            Achieve Page #1 Rankings On Any Website
          </h2>
          <br />
          <div className="relative">
            <Slider {...settings}>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-center text-lg text-white hover:text-orange-500 px-4 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto shadow-xl p-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600">
            Full Stack Search Engine Marketing
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            All aspects of search engine marketing are included.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {[
            { img: "map-pin", text: "Local SEO" },
            { img: "networking-manager", text: "National SEO" },
            { img: "globe", text: "International SEO" },
            { img: "shopping-cart", text: "eCommerce SEO" },
            { img: "google-ads", text: "Google Ads" },
            { img: "shopping-cart", text: "Google Shopping" },
            { img: "bing", text: "Bing Ads" },
            { img: "statistics", text: "Remarketing" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-32"
            >
              <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center w-16 h-16">
                <img
                  src={`https://img.icons8.com/color/48/000000/${item.img}.png`}
                  alt={`${item.text} Icon`}
                />
              </div>
              <p className="mt-2 font-semibold text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        <Carousel>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row flex-shrink-0 px-4 py-6 text-center mt-[5rem]"
            >
              <div>
                <h1 className="text-3xl font-bold text-blue-900 mb-2">
                  {slide.title}
                </h1>
                <p className="text-gray-600" style={{ fontSize: "25px" }}>
                  {slide.description}
                </p>
              </div>
              <Image
                src={slide.image}
                alt={slide.title}
                className="mx-auto mb-2 h-[275px]"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
