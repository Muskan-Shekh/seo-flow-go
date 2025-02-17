import Header from "../../components/header.js";
import Footer from "../../components/footer.js";

export default function MarketingPlan({ formRef, highlightForm }) {
  return (
    <div className="min-h-screen text-white">
      <Header></Header>
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0 text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Empower Your Marketing Success
              </h1>
              <p className="mb-6 text-lg">
                Discover powerful strategies to grow your business, attract
                customers, and dominate your industry with our custom-tailored
                marketing plans.
              </p>
              <a
                href="#get-started"
                className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-900 hover:text-white transition duration-300"
              >
                Get Started Now
              </a>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/652039f7df88a2e80eb1906c_Business_Solution_Marketing_Digital_Planning.jpeg"
                alt="Marketing Plan"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* request a quote form */}
      <section className="bg-[url('https://images.startups.co.uk/wp-content/uploads/2023/06/Marketing-strategy.jpg?width=709&height=460&fit=crop')] py-12 bg-cover bg-center w-full h-full">
        <div className="container mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Section: Marketing Plan */}
          <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-500">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Marketing Plan
            </h2>
            <p className="text-gray-700 mb-6">
              Our strategic marketing plan helps your business grow with a
              targeted approach. We analyze your market, define clear
              objectives, and implement data-driven strategies to maximize ROI.
            </p>
            <ul className="space-y-4 text-black">
              <li className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                Audience Analysis & Segmentation
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                Competitor Research & Insights
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                Customized Marketing Strategies
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                Performance Tracking & Optimization
              </li>
            </ul>
            <button className="mt-6 bg-blue-600 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
              Get Started
            </button>
          </div>

          {/* Right Section: Quote Request */}
          <div className="mt-8 md:mt-0">
            <div
              ref={formRef} // Attach the formRef to the form div
              className={`bg-blue-900 text-white rounded-lg p-6 shadow-lg transition-all duration-300 ${
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
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Marketing Plan & Quote */}

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Marketing Plan
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive strategies to elevate your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* <!-- Audience Analysis --> */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform duration-300">
              <div className="text-5xl text-red-500 mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-3 text-black">
                Audience Analysis & Segmentation
              </h3>
              <p className="text-gray-600">
                Understand your target audience with in-depth analysis and
                tailored segmentation strategies.
              </p>
            </div>

            {/* <!-- Competitor Research --> */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform duration-300">
              <div className="text-5xl text-blue-500 mb-4">📊</div>
              <h3 className="text-2xl font-semibold mb-3 text-black">
                Competitor Research & Insights
              </h3>
              <p className="text-gray-600">
                Stay ahead of the competition with comprehensive competitor
                insights and analysis.
              </p>
            </div>

            {/* <!-- Customized Strategies --> */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform duration-300">
              <div className="text-5xl text-green-500 mb-4">⚙️</div>
              <h3 className="text-2xl font-semibold mb-3 text-black">
                Customized Marketing Strategies
              </h3>
              <p className="text-gray-600">
                Craft personalized marketing strategies that align with your
                business objectives.
              </p>
            </div>

            {/* <!-- Performance Tracking --> */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform duration-300">
              <div className="text-5xl text-purple-500 mb-4">📈</div>
              <h3 className="text-2xl font-semibold mb-3 text-black">
                Performance Tracking & Optimization
              </h3>
              <p className="text-gray-600">
                Monitor and optimize campaign performance to maximize ROI.
              </p>
            </div>
          </div>

          {/* <!-- Call to Action --> */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Analysis & Segmentation */}
      <section className="py-12 bg-blue-100">
        <div className="container mx-auto px-5">
          {/* 1: Audience Analysis */}
          <div className="flex flex-col gap-10 lg:flex-row items-center mb-10">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-black">
                Audience Analysis & Segmentation
              </h2>
              <p className="text-gray-600">
                To succeed in today’s competitive market, it's crucial to
                understand your audience at a deeper level. Audience analysis
                and segmentation are essential steps in crafting a tailored
                marketing strategy that resonates with the right people. By
                analyzing the behaviors, preferences, and demographics of your
                target audience, we can ensure that your message reaches those
                who are most likely to convert.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://kpu.pressbooks.pub/app/uploads/sites/110/2020/08/What-is-Audience-analysis1-01-1024x536.png"
                alt="Audience Analysis"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/*  2: Content Marketing Research */}
          <div className="flex flex-col gap-10  items-center mb-10 lg:flex-row-reverse">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-black">
                Content Marketing
              </h2>
              <p className="text-gray-600">
                Content marketing is at the heart of every successful digital
                strategy. It’s not just about creating content; it’s about
                creating the right content that informs, engages, and converts.
                Our content marketing strategies are designed to build trust,
                showcase your expertise, and drive meaningful interactions with
                your audience.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://alcorfund.com/wp-content/uploads/2021/03/MicrosoftTeams-image-2021-03-13T155033.140.png"
                alt="Competitor Research"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/*  3:Social Media Strategy */}
          <div className="flex flex-col gap-10 lg:flex-row items-center mb-10">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-black">
                Social Media Strategy
              </h2>
              <p className="text-gray-600">
                In the digital age, social media has become an essential tool
                for businesses looking to expand their reach and connect with
                their audience. Our social media strategy is designed to elevate
                your brand’s presence, build a loyal community, and generate
                real engagement across multiple platforms. We create tailored
                strategies that align with your brand values and goals, ensuring
                that your content resonates with the right audience. From
                organic posts to paid campaigns, we use a mix of creative
                content, storytelling, and analytics to drive success.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://adespresso.com/wp-content/uploads/2022/07/social-media-strategy.jpg"
                alt="Marketing Strategies"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/*  4: Optimize Your Optimization Efforts Tracking */}
          <div className="flex flex-col items-center gap-10 mb-10 lg:flex-row-reverse">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-black">
                Optimize Your Optimization Efforts
              </h2>
              <p className="text-gray-600">
                In the world of digital marketing, continuous improvement is key
                to staying ahead of the competition. Optimizing your efforts
                ensures that you get the most out of your marketing strategies
                and resources. By leveraging data and insights, we fine-tune
                your campaigns, website performance, and overall marketing
                tactics to achieve the best possible results.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://img.freepik.com/premium-photo/creative-visual-business-people-corporate-staff-meeting-video-call_31965-14124.jpg?w=826"
                alt="Performance Tracking"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <h3 className="text-3xl font-bold mb-4 text-black">
              Get Started with Your Marketing Plan
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you craft a marketing strategy that delivers results.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-900 transition-colors duration-300">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
