export default function Footer({ onButtonClick }) {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white">
            Free Search Marketing Plan & Quote
          </h2>
          <button
            onClick={onButtonClick}
            className="bg-orange-500 text-white px-6 py-2 rounded-full mt-4 md:mt-0 hover:bg-orange-600"
          >
            Get Free Quote
          </button>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Popular Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Popular</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Online Marketing Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Search Engine Optimisation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  PPC Advertising
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Free Search Marketing Plan & Quote
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                {" "}
                <a href="#" className="hover:underline hover:text-orange-500">
                  SEO Alameda
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  SEO Contra Costa
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  SEO Daly City
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  SEO Fremont
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  SEO Marin
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Send Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Office Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Office</h3>
            <ul className="space-y-2">
              <li>Address:</li>
              <li>San Jose</li>
              <li>CA USA 95123</li>
              <li>Hours (AEST):</li>
              <li>Mon–Fri: 9am–5pm</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Locations */}
          <div className="text-gray-400 text-sm grid grid-cols-3 gap-4 mb-4 md:mb-0">
            <span>
              <a href="#" className="hover:underline hover:text-orange-500">
                SEO Napa
              </a>
            </span>
            <span>
              <a href="#" className="hover:underline hover:text-orange-500">
                SEO Oakland
              </a>
            </span>
            <span>
              <a href="#" className="hover:underline hover:text-orange-500">
                SEO San Francisco
              </a>
            </span>
            <span>
              <a href="#" className="hover:underline hover:text-orange-500">
                SEO San Jose
              </a>
            </span>
            <span>
              <a href="#" className="hover:underline hover:text-orange-500">
                SEO San Mateo
              </a>
            </span>
            <span>
              <a href="#" className="hover:underline hover:text-orange-500">
                SEO Santa Clara
              </a>
            </span>
            <span>
              <a href="#" className="hover:underline hover:text-orange-500">
                SEO Solano
              </a>
            </span>
            <span>
              <a href="#" className="hover:underline hover:text-orange-500">
                SEO Sonoma
              </a>
            </span>
            <span>
              <a href="#" className="hover:underline hover:text-orange-500">
                SEO San Pablo Bay
              </a>
            </span>
            <span>
              <a href="#" className="hover:underline hover:text-orange-500">
                SEO Suisun Bay
              </a>
            </span>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:underline hover:text-orange-500">
              Privacy
            </a>
            <a href="#" className="hover:underline hover:text-orange-500">
              Terms
            </a>
            <a href="#" className="hover:underline hover:text-orange-500">
              Sitemap
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Copying of content from this website will be prosecuted by law.
        </p>
      </div>
    </footer>
  );
}
