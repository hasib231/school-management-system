import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
    
  return (
    <div className="navbar bg-base-200 z-50">
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
            className="menu menu-sm z-10 dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-60 pb-5"
          >
            <li>
              <Link to="/">মুল পাতা</Link>
            </li>

            <li className="">
              <a>
                সম্পর্কিত <FaAngleDown></FaAngleDown>
              </a>
              <ul className="p-2  shadow bg-base-100 rounded-box w-48">
                <li>
                  <Link to="/aboutUs">আমাদের সম্পর্কিত</Link>
                </li>
                <li>
                    <Link to="/committee">কমিটি</Link>
                </li>
                <li>
                    <Link to="/accreditation">স্বীকৃতি</Link>
                </li>
              </ul>
            </li>

            <li className="">
              <a>
                প্রশাসনিক <FaAngleDown></FaAngleDown>
              </a>
              <ul className="p-2  shadow bg-base-100 rounded-box w-48">
                <li>
                  <Link to="/chairman">সভাপতি</Link>
                </li>
                <li>
                  <Link to="/principal">প্রধান/অধ্যক্ষ</Link>
                </li>
                <li>
                  <Link to="/governing">গভার্নিং</Link>
                </li>
                <li>
                  <Link to="/teachers">শিক্ষকমন্ডলী</Link>
                </li>
                <li>
                  <Link to="/staff">কর্মচারীবৃন্দ</Link>
                </li>
                <li>
                  <Link to="/">নিয়মনীতি</Link>
                </li>
              </ul>
            </li>

            <li className="">
              <a>
                একাডেমিক <FaAngleDown></FaAngleDown>
              </a>
              <ul className="p-2  shadow bg-base-100 rounded-box w-48">
                <li>
                  <Link to="/">ভর্তি</Link>
                </li>
                <li>
                  <Link to="/">বেতন</Link>
                </li>
                <li>
                  <Link to="/">ই-বুক</Link>
                </li>
                <li>
                  <Link to="/">ক্লাস রুটিন</Link>
                </li>
                <li>
                  <Link to="/">পরীক্ষার রুটিন</Link>
                </li>
                <li>
                  <Link to="/">পাঠক্রম</Link>
                </li>
                <li>
                  <Link to="/">ফলাফল</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/">ছাত্র-ছাত্রী</Link>
            </li>
            <li>
              <Link to="/gallery">গ্যালারী</Link>
            </li>
            <li>
              <Link to="/notice">নোটিস</Link>
            </li>
            <li>
              <Link to="/contacts">যোগাযোগ</Link>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">School Name</a> */}
      </div>

      {/* Main navbar */}
      <div className="navbar-center hidden lg:flex z-50">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link to="/">মূল পাতা</Link>
          </li>

          <li className="dropdown dropdown-hover">
            <a>
              সম্পর্কিত <FaAngleDown></FaAngleDown>
            </a>
            <ul className="p-2 dropdown-content shadow bg-base-100 rounded-box w-48">
              <li>
                <Link to="/aboutUs">আমাদের সম্পর্কিত</Link>
              </li>
              <li>
                <Link to="/committee">কমিটি</Link>
              </li>
              <li>
                <Link to="/accreditation">স্বীকৃতি</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown dropdown-hover">
            <a>
              প্রশাসনিক <FaAngleDown></FaAngleDown>
            </a>
            <ul className="p-2 dropdown-content shadow bg-base-100 rounded-box w-48">
              <li>
                <Link to="/chairman">সভাপতি</Link>
              </li>
              <li>
                <Link to="/principal">প্রধান/অধ্যক্ষ</Link>
              </li>
              <li>
                <Link to="/governing">গভার্নিং</Link>
              </li>
              <li>
                <Link to="/teachers">শিক্ষকমন্ডলী</Link>
              </li>
              <li>
                <Link to="/staff">কর্মচারীবৃন্দ</Link>
              </li>
              <li>
                <Link to="/">নিয়মনীতি</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown dropdown-hover">
            <a>
              একাডেমিক <FaAngleDown></FaAngleDown>
            </a>
            <ul className="p-2 dropdown-content shadow bg-base-100 rounded-box w-48">
              <li>
                <Link to="/">ভর্তি</Link>
              </li>
              <li>
                <Link to="/">বেতন</Link>
              </li>
              <li>
                <Link to="/">ই-বুক</Link>
              </li>
              <li>
                <Link to="/">ক্লাস রুটিন</Link>
              </li>
              <li>
                <Link to="/">পরীক্ষার রুটিন</Link>
              </li>
              <li>
                <Link to="/">পাঠ্যক্রম</Link>
              </li>
              <li>
                <Link to="/">ফলাফল</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/">ছাত্র-ছাত্রী</Link>
          </li>
          <li>
            <Link to="/gallery">গ্যালারী</Link>
          </li>
          <li>
              <Link to="/notice">নোটিস</Link>
            </li>
          <li>
            <Link to="/contacts">যোগাযোগ</Link>
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
