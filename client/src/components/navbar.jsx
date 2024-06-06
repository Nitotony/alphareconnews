import React, { useState } from "react";
import { signOut } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const user=currentUser;
  return (
    <nav className="bg-gray-300 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <img
            className="mx-auto h-10 w-auto"
            src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
            alt="Your Company"
          />
          <Link
            to={"/"}
            className="text-blue-500 text-xl font-medium  hover:text-red-500"
          >
            Home
          </Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-blue-500 text-xl font-medium hover:text-red-500 flex items-center"
            >
              Options
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute z-20 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link to={"/signin"}
                  href="#login"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Login
                </Link>
                <Link to={'/'}>
                  <button
                    onClick={() => {
                      dispatch(signOut());
                    }}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    signout
                  </button>
                </Link>
              </div>
            )}
          </div>
          <Link
            to={"/signup"}
            className="text-blue-500 text-xl font-medium hover:text-red-500"
          >
            Sign Up
          </Link>
          <Link
            to={"/searching"}
            className="text-blue-500 text-xl font-medium  hover:text-red-500"
          >
            Search
          </Link>

          <Link
            to={"/saved"}
            className="text-blue-500 text-xl font-medium  hover:text-red-500"
          >
            Saved
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"></div>
           {currentUser && <span className="ml-2 text-red-500 text-sm">
              {user.email}
            </span>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
