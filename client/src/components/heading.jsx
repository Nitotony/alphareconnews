
import { useEffect } from "react";
import {Link} from "react-router-dom"
const Heading = () => {
  
  return (
    <div className="mt-8 relative">
      <div className="relative bg-gray-300 p-6 sm:p-1 rounded-lg flex items-center justify-between sm:items-stretch ">
        <Link
          className="text-white bg-red-600 text-center text-lg py-2 px-28 mx-5 rounded-md inline-block shadow-md"
          to="/"
        >
          <h6>Popular</h6>
        </Link>
        <Link
          to="/business"
          className="text-white bg-red-600 text-center text-lg py-2 px-28  mx-5 rounded-md inline-block shadow-md"
        >
          <h6>Business</h6>
        </Link>

        <Link
          to="/technology"
          className="text-white bg-red-600 text-center text-lg py-2 px-28  mx-5 rounded-md inline-block shadow-md"
        >
          <h6>Technology</h6>
        </Link>
      </div>
    </div>
  );
};

export default Heading;
