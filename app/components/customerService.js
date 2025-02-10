import Image from "next/image";
import image3 from "../images/phones.webp";

export default function CustomerService() {
  return (
    <div className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center bg-blue-500 text-white rounded-lg p-8">
        {/* Left Section - Image */}
        <div className="md:w-1/2 relative">
          <div className="bg-white shadow-lg rounded-lg p-4 relative z-10">
            <Image src={image3} alt="phones" className="w-full mb-2 rounded" />
          </div>
        </div>
        {/* Right Section - Service Text*/}
        <div className="md:w-1/2 mb-8 md:mb-0 p-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Show Where Customers Search To Buy
          </h2>
          <p className="text-lg mb-4 italic">
            First page rankings increase your exposure to more customers who are
            ready to buy than any other form of advertising. If customers can't
            find your products or services on Google, chances are they are
            finding your competitors.
          </p>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Our Service:</h3>{" "}
          <br />
          <li>Increases your visibility</li>
          <li>Improves your website</li>
          <li>Provides monthly reports</li>
          <p className="text-sm mt-2 italic">
            - Ty, Founder <br /> Online Marketing Services
          </p>
        </div>
      </div>
    </div>
  );
}
