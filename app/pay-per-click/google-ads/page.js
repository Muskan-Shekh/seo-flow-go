import Header from "../../components/header.js";
import Footer from "../../components/footer.js";

export default function GoogleAds() {
  return (
    <div className="min-h-screen text-white">
      <Header></Header>

      <section className="md:py-16">
        <div className="container mx-auto px-5">
          <div className="text-black">
            <h1 className="lg:text-6xl md:5xl text-2xl font-extrabold">
              Google Ads in PPC{" "}
            </h1>
            <h2 className="lg:text-3xl md:xl text-lg mt-6">
              Every time a search is initiated, Google digs into the pool of ads
              and chooses a set of winners to appear on that search engine
              results page.
            </h2>
          </div>
          <div className="mt-8">
            <img
              src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/banner-1.png"
              alt="google ads"
            />
          </div>
        </div>
      </section>

      {/* Driving success through strategic paid search advertising! */}
      <section className="my-16">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 text-center md:text-left">
            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Driving success through strategic paid search advertising!
              </h2>
              <a
                href="#"
                className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition"
              >
                KNOW MORE ABOUT US
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-9 mt-10">
            <p className="text-xl text-gray-700 mb-6">
              Transforming your brand's online presence and generating
              meaningful results is our top priority. As a leading paid
              search ad agency, we bring together a unique blend of creativity
              and data-driven insights.
            </p>

            {/* Four Divs in Two Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 hover:shadow-lg transition">
                <img
                  src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/icon-diagram.png"
                  className="mb-2"
                  alt="strategy"
                />
                <h3 className="text-2xl font-semibold mb-2 text-blue-700">
                  Campaign Strategy
                </h3>
                <p className="text-gray-600">
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive paid
                  search strategy.
                </p>
              </div>

              <div className="p-5 hover:shadow-lg transition">
                <img
                  src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/icon-bullhorn.png"
                  className="mb-2"
                  alt="optimization"
                />
                <h3 className="text-2xl font-semibold mb-2 text-green-700">
                  Campaign Optimization
                </h3>
                <p className="text-gray-600">
                  Continuously monitor and adjust campaigns to maximize
                  performance and ROI, ensuring optimal keyword targeting and ad
                  placements.
                </p>
              </div>

              <div className="p-5 hover:shadow-lg transition">
                <img
                  src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/icon-auction.png"
                  className="mb-2"
                  alt="bidmanagement"
                />
                <h3 className="text-2xl font-semibold mb-2 text-purple-700">
                  Bid Management
                </h3>
                <p className="text-gray-600">
                  Implement smart bidding strategies to control costs while
                  maximizing conversions and achieving your advertising goals.
                </p>
              </div>

              <div className="p-5 hover:shadow-lg transition">
                <img
                  src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/icon-speedometer.png"
                  className="mb-2"
                  alt="performancetracking"
                />
                <h3 className="text-2xl font-semibold mb-2 text-pink-700">
                  Performance Tracking
                </h3>
                <p className="text-gray-600">
                  Use advanced analytics tools to track performance, measure
                  success, and provide actionable insights for continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Years driving growth */}
      <section className="pb-20">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-20 bg-[#161519]">
          {/* Left Column with Centered Content */}
          <div className="rounded-lg p-6 lg:col-span-3 flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full mb-10 lg:flex-row lg:items-center lg:justify-start">
              <div className="bg-black p-4 rounded-full flex-shrink-0 mb-4 lg:mb-0">
                <img
                  src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/icon-growth.png"
                  alt="Growth Icon"
                />
              </div>
              <div className="pl-5 text-white text-center lg:text-left">
                <p className="text-3xl font-bold">25+</p>
                <p className="text-xl">Years driving growth</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:items-center lg:justify-start">
              <div className="bg-black p-4 rounded-full flex-shrink-0 mb-4 lg:mb-0">
                <img
                  src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/icon-cube.png"
                  alt="Cube Icon"
                />
              </div>
              <div className="pl-5 text-white text-center lg:text-left">
                <p className="text-3xl font-bold">1450+</p>
                <p className="text-xl">Projects completed successfully</p>
              </div>
            </div>
          </div>
          {/* Right Column with Image */}
          <div className="lg:col-span-9">
            <img
              src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/fun.jpg"
              alt="group"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ads */}
      <section className="py-20 bg-pink-100">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Google Ads Column */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4 bg-gray-400 text-center rounded-full flex-shrink-0 w-20 h-20 mx-auto flex items-center justify-center transform transition-all hover:scale-110">
                <img
                  src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/icon-google-ads.png"
                  alt="Google Ads"
                  className="transform transition-all"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Google Ads
              </h3>
              <p className="text-gray-600 mb-5">
                Increase your visibility and drive traffic to your website with
                Google Ads campaigns tailored to your needs.
              </p>
              <a
                href="#google-ads"
                className="text-blue-500 flex justify-center items-center hover:text-gray-400"
              >
                Read More{" "}
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5M19 12H6"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Microsoft Ads Column */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4  bg-gray-400 text-center rounded-full flex-shrink-0 w-20 h-20 mx-auto flex items-center justify-center transform transition-all hover:scale-110">
                <img
                  src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/icon-microsoft-ads.png"
                  alt="Microsoft Ads"
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Microsoft Ads
              </h3>
              <p className="text-gray-600 mb-5">
                Boost your business with Microsoft Ads by reaching the right
                audience at the right time.
              </p>
              <a
                href="#microsoft-ads"
                className="text-blue-500 flex justify-center items-center hover:text-gray-400"
              >
                Read More{" "}
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5M19 12H6"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Social Media Ads Column */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4  bg-gray-400 text-center rounded-full flex-shrink-0 w-20 h-20 mx-auto flex items-center justify-center transform transition-all hover:scale-110">
                <img
                  src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/icon-campaign.png"
                  alt="Social Media Ads"
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Social Media Ads
              </h3>
              <p className="text-gray-600 mb-5">
                Reach a broad audience on social media platforms with customized
                ad campaigns.
              </p>
              <a
                href="#social-media-ads"
                className="text-blue-500 flex justify-center items-center hover:text-gray-400"
              >
                Read More{" "}
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5M19 12H6"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Shopping Campaign Column */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="mb-4  bg-gray-400 text-center rounded-full flex-shrink-0 w-20 h-20 mx-auto flex items-center justify-center transform transition-all hover:scale-110">
                <img
                  src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/icon-shopping.png"
                  alt="Shopping Campaign"
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Shopping Campaign
              </h3>
              <p className="text-gray-600 mb-5">
                Increase your eCommerce sales with targeted shopping ads on
                various platforms.
              </p>
              <a
                href="#shopping-campaign"
                className="text-blue-500 flex justify-center items-center hover:text-gray-400"
              >
                Read More{" "}
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5M19 12H6"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      
      {/* ourProcess */}

      <section className="py-20">
  <div className="container mx-auto px-5">
    <div className="text-center mb-12 text-black">
      <h2 className="lg:text-5xl md:text-4xl text-3xl mb-6">OUR PROCESS</h2>
      <p className="lg:text-3xl md:text-2xl text-xl">Your path to paid search excellence starts here!</p>
    </div>
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Column with Text */}
      <div>
        <div className="mb-12 flex">
          <p className="text-7xl pt-1 text-black">1</p>
          <div className="pl-5">
          <h3 className="text-2xl font-semibold mb-4 text-black">Campaign Strategy</h3>
          <p className="text-gray-600">
          Effective campaigns don’t happen by chance—they require a well-thought-out strategy, clear objectives, and precise execution. Our Campaign Strategy services are designed to help you plan, execute, and measure campaigns that generate measurable results for your business.
          </p>
          </div>
        </div>
        <div className="mb-12 flex">
        <p className="text-7xl pt-1 text-black">2</p>
          <div className="pl-5">
          <h3 className="text-2xl font-semibold mb-4 text-black">Full Management</h3>
          <p className="text-gray-600">
          we understand that managing every aspect of your digital marketing can be overwhelming. That’s why we offer Full Management services, providing a complete solution that covers all areas of your marketing strategy from start to finish.
          </p>
          </div>
        </div>
        <div className="flex"> 
        <p className="text-7xl pt-1 text-black">3</p>
        <div className="pl-5">
          <h3 className="text-2xl font-semibold mb-4 text-black">Transparency</h3>
          <p className="text-gray-600">
          transparency is at the core of everything we do. We believe that open communication, clear reporting, and honest insights are essential to building a strong partnership with our clients.
          </p>
          </div>
        </div>
      </div>

      {/* Right Column with Image */}
      <div className="flex justify-center items-center">
        <img
          src="https://themes.envytheme.com/adin/wp-content/uploads/2023/11/our-process-img.png"
          alt="Process Image"
          className=""
        />
      </div>
    </div>
  </div>
</section>


      <Footer></Footer>
    </div>
  );
}
