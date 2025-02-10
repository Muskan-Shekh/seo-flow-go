import Header from "../components/header.js";
import Footer from "../components/footer.js";
export default function Careers() {
  return (
    <div className="min-h-screen bg-blue-500 text-white">
      {/* Header */}
      <Header></Header>
      <div className="mb-10">
        {/* Header Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold">Online Marketing Careers</h1>
          <p className="mt-2 text-lg">
            We&apos;re a local business with global reach that delivers
            exceptional marketing results and customer experiences.
          </p>
        </div>

        {/* Search Section */}
        <div className="flex justify-center py-8">
          <div className="bg-blue-700 rounded-lg p-6 w-4/5 max-w-4xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Search by Keyword"
                className="w-full md:w-1/2 px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <select className="w-full md:w-1/4 px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Search by Location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
              </select>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-bold hover:bg-orange-600 transition">
                SEARCH
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="bg-white text-black rounded-lg mx-4 md:mx-auto w-4/5 max-w-4xl shadow-lg p-6 justify-center">
          <div className="flex justify-between font-bold text-orange-500 border-b border-gray-200 pb-2">
            <div className="w-1/3">Title</div>
            <div className="w-1/3">Location</div>
            <div className="w-1/3 text-right">Date</div>
          </div>
          <div className="text-center mt-4 text-gray-500">
            There are no listings matching your search.
          </div>
        </div>
      </div>
      {/* footer content */}
      <Footer></Footer>
    </div>
  );
}
