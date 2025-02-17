import Header from "../../components/header.js";
import Footer from "../../components/footer.js";

export default function LocalSeo() {
  return (
    <div className="min-h-screen text-white">
      <Header></Header>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 py-16">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center md:text-left">
            <h1 className="lg:text-6xl md:4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 leading-tight">
              Unlock Success with Smart Local SEO
            </h1>
            <p className="text-xl text-gray-800 mt-6">
              Boost your online presence and attract the right audience to grow
              your business successfully.
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <img
              src="https://admin.12grids.com/uploads/blogs/original_cover_images/local-seo-a-complete-guide-1.png"
              alt="SEO Illustration"
              className="w-full max-w-sm rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 border-b-4 border-blue-500 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold text-blue-600">1,500+</h2>
              <p className="text-lg text-gray-700 mt-2">Professional Members</p>
            </div>
            <div className="p-6 border-b-4 border-green-500 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold text-green-600">10+</h2>
              <p className="text-lg text-gray-700 mt-2">Years of Experience</p>
            </div>
            <div className="p-6 border-b-4 border-purple-500 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold text-purple-600">3,000+</h2>
              <p className="text-lg text-gray-700 mt-2">
                Global Happy Customers
              </p>
            </div>
            <div className="p-6 border-b-4 border-pink-500 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold text-pink-600">25</h2>
              <p className="text-lg text-gray-700 mt-2">Company Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Services --> */}
      <section className="py-12 bg-gradient-to-r from-indigo-100 to-purple-100">
        <div className="container mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-blue-600 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-5xl font-bold text-blue-600 mb-4">
                Digital Marketing
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Increasing conversions by optimizing digital campaigns across
                various platforms and channels.
              </p>
              <a
                href="#"
                className="inline-block text-blue-600 font-semibold hover:text-black transition duration-300"
              >
                Learn More →
              </a>
            </div>

            <div className="p-6 border border-green-600 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-5xl font-bold text-green-600 mb-4">
                Media Outreach
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Generating leads by crafting relevant, engaging content tailored
                to your audience.
              </p>
              <a
                href="#"
                className="inline-block text-green-600 font-semibold hover:text-black transition duration-300"
              >
                Learn More →
              </a>
            </div>

            <div className="p-6 border border-purple-600 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-5xl font-bold text-purple-600 mb-4">
                UI/UX Design
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Simplifying digital experiences with clean, functional, and
                responsive user interfaces.
              </p>
              <a
                href="#"
                className="inline-block text-purple-600 font-semibold hover:text-black transition duration-300"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* aboutus */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <div className="p-6">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We are committed to delivering exceptional SEO services that help
              businesses thrive in the digital landscape. Our expert team
              utilizes proven strategies to enhance your online presence and
              drive growth.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With years of experience in digital marketing, we understand the
              nuances of search engine optimization and tailor our solutions to
              meet your unique needs.
            </p>
            <a
              href="/about"
              className="inline-block text-blue-600 font-semibold hover:text-black transition duration-300 border-b-2 border-blue-600 hover:border-black"
            >
              Learn More
            </a>
          </div>

          {/* Image Content */}
          <div className="flex justify-center">
            <img
              src="https://www.tributemedia.com/hs-fs/hubfs/local-search.png?width=1240&name=local-search.png"
              alt="About Us"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">
              Discover the benefits of partnering with us for your digital
              success.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
                  1
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Expert Team
                </h3>
              </div>
              <p className="text-gray-600">
                Our professionals bring years of experience and industry
                insights to every project.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
                  2
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Tailored Solutions
                </h3>
              </div>
              <p className="text-gray-600">
                We customize strategies to meet your unique business goals
                effectively.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
                  3
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Proven Results
                </h3>
              </div>
              <p className="text-gray-600">
                Our track record speaks for itself, with countless satisfied
                clients worldwide.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-900 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* our project */}

      <section className="py-12">
        <div className="container mx-auto px-5">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold text-gray-800">Our Projects</h2>
          </div>
          <p className="text-gray-600 text-center mb-10 text-xl">
            Implementing strategic SEO practices to enhance visibility, attract
            targeted traffic, and drive sustainable growth for your business
            online.
          </p>
          <div className="flex flex-col gap-6">
            <div className="bg-blue-100 p-6 rounded-xl shadow-md w-full hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-blue-800">
                Joint SEO Consulting
              </h3>
              <p className="mt-3 text-gray-700">
              SEO success doesn’t happen in isolation. At our agency, we believe in the power of collaboration. Our Joint SEO Consulting services are designed to work alongside your internal team or other partners to create a unified, results-driven SEO strategy.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-700 hover:text-black font-medium"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-green-100 p-6 rounded-xl shadow-md w-full hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-green-800">
                SEO Approach for IT
              </h3>
              <p className="mt-3 text-gray-700">
              In the fast-paced IT industry, staying ahead of the competition means not only having cutting-edge technology but also ensuring your business is visible online. Our SEO Approach for IT is tailored to help technology companies, IT service providers, and software developers get the online recognition they deserve.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-green-700 hover:text-black font-medium"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-purple-100 p-6 rounded-xl shadow-md w-full hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-purple-800">
                Social Media Marketing
              </h3>
              <p className="mt-3 text-gray-700">
              In today’s digital world, social media is an essential part of any business's marketing strategy. Social Media Marketing is about more than just posting updates—it’s about creating a vibrant community, building meaningful connections, and driving results.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-purple-700 hover:text-black font-medium"
              >
                Learn More →
              </a>
            </div>
            <a href="#" className="mt-6 bg-gray-600 text-white text-center py-3 rounded-xl hover:bg-gray-900 transition duration-300 block">
            View All Projects
          </a>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
