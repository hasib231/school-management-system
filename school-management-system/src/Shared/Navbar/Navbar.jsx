import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
    
  return (
    <div className="navbar bg-base-200">
      {/* mobile navbar */}
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm z-10 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">School Name</a>
      </div>

      {/* Main navbar */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-10">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="dropdown dropdown-hover">
            <a>
              About <FaAngleDown></FaAngleDown>
            </a>
            <ul className="p-2 dropdown-content shadow bg-base-100 rounded-box w-48">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Acceptances Certificate</Link>
              </li>
              <li>
                <Link to="/">National Certificate</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown dropdown-hover">
            <a>
              Administration <FaAngleDown></FaAngleDown>
            </a>
            <ul className="p-2 dropdown-content shadow bg-base-100 rounded-box w-48">
              <li>
                <Link to="/">Chairman</Link>
              </li>
              <li>
                <Link to="/">Principal</Link>
              </li>
              <li>
                <Link to="/">Governing</Link>
              </li>
              <li>
                <Link to="/">Staff</Link>
              </li>
              <li>
                <Link to="/">Rules & Regulation</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown dropdown-hover">
            <a>
              Academic <FaAngleDown></FaAngleDown>
            </a>
            <ul className="p-2 dropdown-content shadow bg-base-100 rounded-box w-48">
              <li>
                <Link to="/">Admission</Link>
              </li>
              <li>
                <Link to="/">Fees</Link>
              </li>
              <li>
                <Link to="/">Ebook</Link>
              </li>
              <li>
                <Link to="/">Class Routine</Link>
              </li>
              <li>
                <Link to="/">Exam Routine</Link>
              </li>
              <li>
                <Link to="/">Syllabus</Link>
              </li>
              <li>
                <Link to="/">Result</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/">Students</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
