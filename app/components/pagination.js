// "use client";

// import React, { useState } from "react";

// const Pagination = () => {
//   const [currentPage, setCurrentPage] = useState(3); // Set the initial page number

//   const pages = [1, 2, 3, 4, 5]; // Define the pages to be displayed

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <nav aria-label="Page navigation example">
//       <ul className="inline-flex -space-x-px text-base h-10">
//         <li>
//           <a
//             href="#"
//             onClick={() => handlePageChange(currentPage - 1)}
//             className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg ${
//               currentPage === 1
//                 ? "cursor-not-allowed text-gray-300"
//                 : "hover:bg-gray-100 hover:text-gray-700"
//             } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
//           >
//             Previous
//           </a>
//         </li>

//         {pages.map((page) => (
//           <li key={page}>
//             <a
//               href="#"
//               onClick={() => handlePageChange(page)}
//               aria-current={currentPage === page ? "page" : undefined}
//               className={`flex items-center justify-center px-4 h-10 leading-tight ${
//                 currentPage === page
//                   ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
//                   : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
//               } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
//             >
//               {page}
//             </a>
//           </li>
//         ))}

//         <li>
//           <a
//             href="#"
//             onClick={() => handlePageChange(currentPage + 1)}
//             className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg ${
//               currentPage === pages.length
//                 ? "cursor-not-allowed text-gray-300"
//                 : "hover:bg-gray-100 hover:text-gray-700"
//             } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
//           >
//             Next
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;


import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
            className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg ${
              currentPage === 1
                ? "cursor-not-allowed text-gray-300"
                : "hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            Previous
          </a>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <li key={page}>
              <a
                href="#"
                onClick={() => onPageChange(page)}
                aria-current={currentPage === page ? "page" : undefined}
                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                  currentPage === page
                    ? "text-blue-600 border border-gray-300 bg-blue-50"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </a>
            </li>
          );
        })}

        <li>
          <a
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg ${
              currentPage === totalPages
                ? "cursor-not-allowed text-gray-300"
                : "hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
