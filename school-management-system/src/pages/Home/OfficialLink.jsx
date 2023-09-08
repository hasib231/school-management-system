import React from 'react';
import { FaArrowCircleRight, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';


const OfficialLink = () => {
    return (
      <div className="bg-base-200 p-5 w-3/12 mx-auto rounded-lg mt-10">
        <h1 className="py-5 font-bold text-green-500 flex">
          <div className="me-2">
            <FaBars></FaBars>
          </div>
          অফিসিয়াল লিংক
        </h1>
        <ul>
          <li>
            <Link to="https://moedu.gov.bd/" className="flex">
              <div className="me-2 text-green-500">
                <FaArrowCircleRight></FaArrowCircleRight>
              </div>
              শিক্ষা মন্ত্রনালয়
            </Link>
          </li>
          <hr className="my-1"></hr>
          <li>
            <Link to="https://dshe.gov.bd/" className="flex">
              <div className="me-2 text-green-500">
                <FaArrowCircleRight></FaArrowCircleRight>
              </div>
              মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর
            </Link>
          </li>
          <hr className="my-1"></hr>
          <li>
            <Link
              to="http://www.educationboardresults.gov.bd/"
              className="flex"
            >
              <div className="me-2 text-green-500">
                <FaArrowCircleRight></FaArrowCircleRight>
              </div>
              এডুকেশন ফলাফল
            </Link>
          </li>
          <hr className="my-1"></hr>
          <li>
            <Link to="https://teachers.gov.bd/" className="flex">
              <div className="me-2 text-green-500">
                <FaArrowCircleRight></FaArrowCircleRight>
              </div>
              শিক্ষক বাতায়ন
            </Link>
          </li>
          <hr className="my-1"></hr>
          <li>
            <Link to="http://www.banbe.gov.bd/" className="flex">
              <div className="me-2 text-green-500">
                <FaArrowCircleRight></FaArrowCircleRight>
              </div>
              বেনবেইজ
            </Link>
          </li>
          <hr className="my-1"></hr>
          <li>
            <Link to="https://muktopaath.gov.bd/" className="flex">
              <div className="me-2 text-green-500">
                <FaArrowCircleRight></FaArrowCircleRight>
              </div>
              মুক্তপাঠ
            </Link>
          </li>
          <hr className="my-1"></hr>
          <li>
            <Link to="http://konnect.edu.bd/" className="flex">
              <div className="me-2 text-green-500">
                <FaArrowCircleRight></FaArrowCircleRight>
              </div>
              কিশোর বাতায়ন
            </Link>
          </li>
          <hr className="my-1"></hr>
          <li>
            <Link to="http://nctb.gov.bd/" className="flex">
              <div className="me-2 text-green-500">
                <FaArrowCircleRight></FaArrowCircleRight>
              </div>
              পাঠ্যবই
            </Link>
          </li>
        </ul>
      </div>
    );
};

export default OfficialLink;