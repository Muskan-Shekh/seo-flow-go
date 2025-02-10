export default function MarketingStrategies({ onButtonClick }) {
  return (
    <div className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-4">
          Optimised Search Marketing Strategies
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mb-12">
          We optimise our search marketing strategy to suit your business. You
          are unique in terms of your industry, your service offering and your
          target audience, and your search marketing strategy is no exception!
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Discover Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-500 rounded-full text-white text-lg sm:text-xl font-bold">
                🔍
              </div>
              <h3 className="ml-4 text-lg sm:text-xl font-bold text-blue-900">
                Discover
              </h3>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Websites & search visibility audit. Discover opportunities to
              improve your website and its visibility across search engines.
            </p>
          </div>

          {/* Target Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-orange-500 rounded-full text-white text-lg sm:text-xl font-bold">
                🎯
              </div>
              <h3 className="ml-4 text-lg sm:text-xl font-bold text-blue-900">
                Target
              </h3>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Keyword and content optimization. Target keywords are finalized,
              and content and key areas of your technical SEO are revised to
              best target these keywords.
            </p>
          </div>

          {/* Optimise Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-yellow-500 rounded-full text-white text-lg sm:text-xl font-bold">
                ⚙️
              </div>
              <h3 className="ml-4 text-lg sm:text-xl font-bold text-blue-900">
                Optimise
              </h3>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Light website development. Your website is optimized to correct
              key technical issues identified in the discovery phase.
            </p>
          </div>

          {/* Upgrade Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-green-500 rounded-full text-white text-lg sm:text-xl font-bold">
                ⬆️
              </div>
              <h3 className="ml-4 text-lg sm:text-xl font-bold text-blue-900">
                Upgrade
              </h3>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Light content redevelopment. Content is reworked for key pages of
              your website. This stage forms part of your ongoing optimization
              work alongside the promotion stage.
            </p>
          </div>

          {/* Maintain Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-indigo-500 rounded-full text-white text-lg sm:text-xl font-bold">
                📈
              </div>
              <h3 className="ml-4 text-lg sm:text-xl font-bold text-blue-900">
                Maintain
              </h3>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Website promotion and networking. We deliver an effective backlink
              campaign to grow your website’s authority and search engine
              rankings.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button onClick={onButtonClick} className="bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-lg font-bold hover:bg-orange-600">
            GET FREE QUOTE
          </button>
        </div>
      </div>
    </div>
  );
}
