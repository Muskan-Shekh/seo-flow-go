"use client";

import React, { useState } from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Pagination from "../components/pagination.js";
import Link from "next/link";

// export default function BlogPage() {
//   return (
//     <div className="min-h-screen bg-blue-500 text-white">
//       {/* Header */}
//       <Header></Header>
//       <h1 className="text-4xl text-center text-gray-300 md:text-5xl font-bold p-4">
//         Online Marketing Blog{" "}
//         <sup className="text-xs bg-green-300 px-1 py-1 text-white">NEW</sup>
//       </h1>
//       <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row justify-center py-10">
//         {/* Main Content Wrapper */}
//         <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row gap-6">
//           {/* Left Scrollable Section */}
//           <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-6">
//             {/* Content Section */}
//             <div className="mb-10">
//               <p className="text-gray-500 text-sm flex items-center gap-4">
//                 <span>📅 25 March 2023</span>
//                 <span>⏱️ 10-12 Minutes</span>
//                 <span>👤 Staff</span>
//               </p>
//               <Link href="/blog/how-to-rank-images-in-google">
//                 <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
//                   How to rank images in Google
//                 </h1>
//               </Link>
//               <div className="mt-6 bg-blue-300 h-40 rounded-md">
//                 {/* Placeholder for image */}
//               </div>
//               <div className="mt-6 text-gray-700 leading-7">
//                 <p>
//                   You may not know it, but every Google search result page is a
//                   battle-zone of millions of websites each competing for the top
//                   10 positions. Look a tab over, however, and you might see a
//                   blue-ocean of untapped possibilities.
//                 </p>
//                 {/* Additional content here */}
//               </div>
//             </div>

//             <div className="mb-10">
//               <p className="text-gray-500 text-sm flex items-center gap-4">
//                 <span>📅 25 February 2023</span>
//                 <span>⏱️ 20 minutes</span>
//                 <span>👤 Staff</span>
//               </p>
//               <Link href="/blog/the-ultimate-seo-checklist">
//                 <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
//                   The Ultimate SEO Checklist
//                 </h1>
//               </Link>
//               <div className="mt-6 bg-violet-500 h-40 rounded-md">
//                 {/* Placeholder for image */}
//               </div>
//               <div className="mt-6 text-gray-700 leading-7">
//                 <p>
//                   Get ready to unlock the secrets to boosting your website’s
//                   visibility on search engines! We’ll take you through a range
//                   of items to setup to help you optimise your website for search
//                   engines. Plus, we’ll even answer some common SEO questions in
//                   FAQs section. Let’s dive in!
//                 </p>
//                 {/* Additional content here */}
//               </div>
//             </div>

//             <div className="mb-10">
//               <p className="text-gray-500 text-sm flex items-center gap-4">
//                 <span>📅 25 January 2023</span>
//                 <span>⏱️ 10-12 Minutes</span>
//                 <span>👤 Staff</span>
//               </p>
//               <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
//                 Google Responsive Search Ads
//               </h1>
//               <div className="mt-6 bg-orange-500 h-40 rounded-md">
//                 {/* Placeholder for image */}
//               </div>
//               <div className="mt-6 text-gray-700 leading-7">
//                 <p>
//                   As part of Google’s overall ad modernization program, Google
//                   is retiring expanded text ads (ETAs) on June 30, 2022.
//                   Responsive search ads (RSAs) are now the new default in Google
//                   Ads (wordstream.com).
//                 </p>
//                 {/* Additional content here */}
//               </div>
//             </div>

//             <div className="mb-10">
//               <p className="text-gray-500 text-sm flex items-center gap-4">
//                 <span>📅 23 December 2022</span>
//                 <span>⏱️ 10-15 Minutes</span>
//                 <span>👤 Staff</span>
//               </p>
//               <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
//                 100 Interesting Digital Marketing & SEO Statistics
//               </h1>
//               <div className="mt-6 bg-red-400 h-40 rounded-md">
//                 {/* Placeholder for image */}
//               </div>
//               <div className="mt-6 text-gray-700 leading-7">
//                 <p>
//                   To help you on your digital marketing journey, we have
//                   compiled 100 recent statistics for you to use in successfully
//                   developing your digital marketing strategy.
//                 </p>
//                 {/* Additional content here */}
//               </div>
//             </div>

//             <div className="mb-10">
//               <p className="text-gray-500 text-sm flex items-center gap-4">
//                 <span>📅 25 November 2022</span>
//                 <span>⏱️ 6-8 Minutes</span>
//                 <span>👤 Staff</span>
//               </p>
//               <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
//                 What is structured data and how does it work?
//               </h1>
//               <div className="mt-6 bg-yellow-400 h-40 rounded-md">
//                 {/* Placeholder for image */}
//               </div>
//               <div className="mt-6 text-gray-700 leading-7">
//                 <p>
//                   This article provides an in-depth look at the crucial topic of
//                   structured data. We will explain what it is, how it works, and
//                   how it fits into the bigger picture of SEO marketing.
//                 </p>
//                 {/* Additional content here */}
//               </div>
//             </div>

//             <div className="mb-10">
//               <p className="text-gray-500 text-sm flex items-center gap-4">
//                 <span>📅 25 October 2022</span>
//                 <span>⏱️ 5-6 Minutes</span>
//                 <span>👤 Staff</span>
//               </p>
//               <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
//                 How to Get Your Website on Page 1 of Google
//               </h1>
//               <div className="mt-6 bg-green-400 h-40 rounded-md">
//                 {/* Placeholder for image */}
//               </div>
//               <div className="mt-6 text-gray-700 leading-7">
//                 <p>
//                   Have you ever wondered why there are so many articles and blog
//                   posts about how to rank your website on the first page of
//                   Google?
//                 </p>
//                 {/* Additional content here */}
//               </div>
//             </div>

//             <div className="mb-10">
//               <p className="text-gray-500 text-sm flex items-center gap-4">
//                 <span>📅 25 September 2022</span>
//                 <span>⏱️ 4-6 Minutes</span>
//                 <span>👤 Staff</span>
//               </p>
//               <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
//                 What are backlinks and how do you create them
//               </h1>
//               <div className="mt-6 bg-pink-500 h-40 rounded-md">
//                 {/* Placeholder for image */}
//               </div>
//               <div className="mt-6 text-gray-700 leading-7">
//                 <p>
//                   Backlinks are links that point to different pages on the same
//                   website, or other websites. They’re sometimes called internal
//                   or external links.
//                 </p>
//                 {/* Additional content here */}
//               </div>
//             </div>

//             <div className="mb-10">
//               <p className="text-gray-500 text-sm flex items-center gap-4">
//                 <span>📅 25 August 2022</span>
//                 <span>⏱️ 4-5 Minutes</span>
//                 <span>👤 Staff</span>
//               </p>
//               <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
//                 How To Create A Sitemap For Your Website
//               </h1>
//               <div className="mt-6 bg-orange-500 h-40 rounded-md">
//                 {/* Placeholder for image */}
//               </div>
//               <div className="mt-6 text-gray-700 leading-7">
//                 <p>
//                   A sitemap is a visual representation of the content, pages,
//                   and information found on your website. It helps you to
//                   understand how your website will be organized and prioritized
//                   for both users and search engine crawlers.
//                 </p>
//                 {/* Additional content here */}
//               </div>
//             </div>

//             <div className="mb-10">
//               <p className="text-gray-500 text-sm flex items-center gap-4">
//                 <span>📅 25 July 2022</span>
//                 <span>⏱️ 2-3 Minutes</span>
//                 <span>👤 Staff</span>
//               </p>
//               <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
//                 The Ultimate Guide To Meta Information
//               </h1>
//               <div className="mt-6 bg-blue-400 h-40 rounded-md">
//                 {/* Placeholder for image */}
//               </div>
//               <div className="mt-6 text-gray-700 leading-7">
//                 <p>
//                   Web pages are like ads for your website. And meta descriptions
//                   are like the ad copy that entices people to visit the site and
//                   make a purchase.
//                 </p>
//                 {/* Additional content here */}
//               </div>
//             </div>

//             <div className="mb-10">
//               <p className="text-gray-500 text-sm flex items-center gap-4">
//                 <span>📅 25 June 2022</span>
//                 <span>⏱️ 4-5 Minutes</span>
//                 <span>👤 Staff</span>
//               </p>
//               <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
//                 The Ultimate Guide To Keyword Research
//               </h1>
//               <div className="mt-6 bg-fuchsia-600 h-40 rounded-md">
//                 {/* Placeholder for image */}
//               </div>
//               <div className="mt-6 text-gray-700 leading-7">
//                 <p>
//                   Keyword research is the foundation of any digital marketing
//                   strategy. Without the right keywords driving targeted traffic
//                   to your site, you won’t have leads, sales or any audience at
//                   all for your content, products or services.
//                 </p>
//                 {/* Additional content here */}
//               </div>
//             </div>

//             <div className="justify-center">
//               <Pagination></Pagination>
//             </div>
//           </div>

//           {/* Right Sticky Sidebar Section */}
//           <div className="w-full md:w-1/3 h-fit bg-blue-900 text-white rounded-lg shadow-lg p-6 sticky md:top-10">
//             <h2 className="text-4xl font-bold">Free Plan & Quote</h2>
//             <p className="mt-4">
//               Turn search engines such as GOOGLE & BING into your cheapest, most
//               effective 24/7 selling tool.
//             </p>
//             <button className="mt-6 bg-orange-500 px-6 py-3 rounded-md font-bold text-white hover:bg-orange-600 transition">
//               GET FREE QUOTE
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="p-5 m-4">
//         <ul className="list-disc">
//           <li>Privacy</li>
//           <li>Terms</li>
//           <li>Sitemap</li>
//         </ul>
//         <p className="text-gray-300">
//           Copying of content from this website will be prosecuted by law.
//         </p>
//       </div>
//       {/* footer content */}
//       <Footer></Footer>
//     </div>
//   );
// }

const BlogPage = () => {
  // Store blog posts in an array
  const blogPosts = [
    {
      title: "How to rank images in Google",
      date: "25 March 2023",
      path: "/blog/how-to-rank-images-in-google",
      content:
        "You may not know it, but every Google search result page is a battle-zone of millions of websites each competing for the top 10 positions. Look a tab over, however, and you might see a blue-ocean of untapped possibilities.",
    },
    {
      title: "The Ultimate SEO Checklist",
      date: "25 February 2023",
      path: "/blog/the-ultimate-seo-checklist",
      content:
        "Get ready to unlock the secrets to boosting your website’s visibility on search engines! We’ll take you through a range of items to setup to help you optimise your website for search engines. Plus, we’ll even answer some common SEO questions in FAQs section. Let’s dive in!",
    },
    {
      title: "Google Responsive Search Ads",
      date: "25 January 2023",
      content:
        "As part of Google’s overall ad modernization program, Google is retiring expanded text ads (ETAs) on June 30, 2022. Responsive search ads (RSAs) are now the new default in Google Ads (wordstream.com).",
    },
    {
      title: "100 Interesting Digital Marketing & SEO Statistics",
      date: "23 December 2022",
      content:
        "To help you on your digital marketing journey, we have compiled 100 recent statistics for you to use in successfully developing your digital marketing strategy.",
    },
    {
      title: "What is structured data and how does it work?",
      date: "25 November 2022",
      content:
        "This article provides an in-depth look at the crucial topic of structured data. We will explain what it is, how it works, and how it fits into the bigger picture of SEO marketing.",
    },
    {
      title: "How to Get Your Website on Page 1 of Google",
      date: "25 October 2022",
      content:
        "Have you ever wondered why there are so many articles and blog posts about how to rank your website on the first page of Google?",
    },
    {
      title: "What are backlinks and how do you create them",
      date: "25 September 2022",
      content:
        "Backlinks are links that point to different pages on the same website, or other websites. They’re sometimes called internal or external links.",
    },
    {
      title: "How To Create A Sitemap For Your Website",
      date: "25 August 2022",
      content:
        "A sitemap is a visual representation of the content, pages, and information found on your website. It helps you to understand how your website will be organized and prioritized for both users and search engine crawlers.",
    },
    {
      title: "The Ultimate Guide To Meta Information",
      date: "25 July 2022",
      content:
        "Web pages are like ads for your website. And meta descriptions are like the ad copy that entices people to visit the site and make a purchase.",
    },
    {
      title: "The Ultimate Guide To Keyword Research",
      date: "25 June 2022",
      content:
        "Keyword research is the foundation of any digital marketing strategy. Without the right keywords driving targeted traffic to your site, you won’t have leads, sales or any audience at all for your content, products or services.",
    },
  ];

  // Set the number of posts per page
  const postsPerPage = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Get the current posts to display based on the page
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-blue-500 text-white">
      {/* Header */}
      <Header />
      <h1 className="text-4xl text-center text-gray-300 md:text-5xl font-bold p-4">
        Online Marketing Blog{" "}
        <sup className="text-xs bg-green-300 px-1 py-1 text-white">NEW</sup>
      </h1>
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row justify-center py-10">
        {/* Main Content Wrapper */}
        <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row gap-6">
          {/* Left Scrollable Section */}
          <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-6 justify-center">
            {/* Render the posts for the current page */}
            {currentPosts.map((post, index) => (
              <div key={index} className="mb-10">
                <p className="text-gray-500 text-sm flex items-center gap-4">
                  <span>📅 {post.date}</span>
                  <span>⏱️ 10-12 Minutes</span>
                  <span>👤 Staff</span>
                </p>
                <Link href={post.path ? post.path: '#'}>
                <h1 className="text-4xl font-bold text-gray-800 mt-4 cursor-pointer hover:text-orange-600">
                  {post.title}
                </h1>
                </Link>
                <div className="mt-6 bg-blue-300 h-40 rounded-md">
                  {/* Placeholder for image */}
                </div>
                <div className="mt-6 text-gray-700 leading-7">
                  <p>{post.content}</p>
                </div>
              </div>
            ))}

            <div className="items-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          {/* Right sticky div*/}
          <div className="w-full md:w-1/3 h-fit bg-blue-900 text-white rounded-lg shadow-lg p-6 sticky md:top-10">
            <h2 className="text-4xl font-bold">Free Plan & Quote</h2>
            <p className="mt-4">
              Turn search engines such as GOOGLE & BING into your cheapest, most
              effective 24/7 selling tool.
            </p>
            <button className="mt-6 bg-orange-500 px-6 py-3 rounded-md font-bold text-white hover:bg-orange-600 transition">
              GET FREE QUOTE
            </button>
          </div>
        </div>
      </div>
      <div className="p-5 m-4">
        <ul className="list-disc">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </ul>
        <p className="text-gray-300">
          Copying of content from this website will be prosecuted by law.
        </p>
      </div>
      {/* footer content */}
      <Footer></Footer>
    </div>
  );
};

export default BlogPage;
