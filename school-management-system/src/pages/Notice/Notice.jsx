import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Notice = () => {
    return (
      <div>
        <div className="text-center my-12 font-bold text-3xl text-green-500">
          নোটিশ
        </div>
        <div className="overflow-x-auto md:w-10/12 mx-auto mb-20">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-base-300 ">
              <tr>
                <th>তারিখ</th>
                <th>শিরোনাম</th>
                <th>বিস্তারিত</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>17 August 2023</th>
                <td>আগামী ১৭ আগস্ট এইচএসসি পরীক্ষা শুরু</td>
                <td>
                  <Link to="/noticePage">
                    <button className="btn btn-outline border-green-500 text-green-500">
                      বিস্তারিত <FaRegEye></FaRegEye>
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>15 August 2023</th>
                <td>আগামী ১৫ আগস্ট জাতীয় শোকদিবস পালন প্রসঙ্গে</td>
                <td>
                  <Link to="/noticePage">
                    <button className="btn btn-outline border-green-500 text-green-500">
                      বিস্তারিত <FaRegEye></FaRegEye>
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>17 August 2023</th>
                <td>আগামী ১৭ আগস্ট এইচএসসি পরীক্ষা শুরু</td>
                <td>
                  <Link to="/noticePage">
                    <button className="btn btn-outline border-green-500 text-green-500">
                      বিস্তারিত <FaRegEye></FaRegEye>
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>15 August 2023</th>
                <td>আগামী ১৫ আগস্ট জাতীয় শোকদিবস পালন প্রসঙ্গে</td>
                <td>
                  <Link to="/noticePage">
                    <button className="btn btn-outline border-green-500 text-green-500">
                      বিস্তারিত <FaRegEye></FaRegEye>
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Notice;