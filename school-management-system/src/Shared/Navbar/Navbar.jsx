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
            className="menu menu-sm z-10 dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li className="">
              <a>
                About <FaAngleDown></FaAngleDown>
              </a>
              <ul className="p-2  shadow bg-base-100 rounded-box w-48">
                <li>
                  <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                  <Link to="/">Acceptances Certificate</Link>
                </li>
                <li>
                  <Link to="/">National/MPO Certificate</Link>
                </li>
              </ul>
            </li>

            <li className="">
              <a>
                Administration <FaAngleDown></FaAngleDown>
              </a>
              <ul className="p-2  shadow bg-base-100 rounded-box w-48">
                <li>
                  <Link to="/chairman">Chairman</Link>
                </li>
                <li>
                  <Link to="/principal">Principal</Link>
                </li>
                <li>
                  <Link to="/governing">Governing</Link>
                </li>
                <li>
                  <Link to="/teachers">Teachers</Link>
                </li>
                <li>
                  <Link to="/staff">Staff</Link>
                </li>
                <li>
                  <Link to="/">Rules & Regulation</Link>
                </li>
              </ul>
            </li>

            <li className="">
              <a>
                Academic <FaAngleDown></FaAngleDown>
              </a>
              <ul className="p-2  shadow bg-base-100 rounded-box w-48">
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
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contacts">Contact</Link>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">School Name</a> */}
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
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/">Acceptances Certificate</Link>
              </li>
              <li>
                <Link to="/">National/MPO Certificate</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown dropdown-hover">
            <a>
              Administration <FaAngleDown></FaAngleDown>
            </a>
            <ul className="p-2 dropdown-content shadow bg-base-100 rounded-box w-48">
              <li>
                <Link to="/chairman">Chairman</Link>
              </li>
              <li>
                <Link to="/principal">Principal</Link>
              </li>
              <li>
                <Link to="/governing">Governing</Link>
              </li>
              <li>
                <Link to="/teachers">Teachers</Link>
              </li>
              <li>
                <Link to="/staff">Staff</Link>
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
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {/* <a className="btn">Login</a> */}
      </div>
    </div>
  );
};

export default Navbar;
