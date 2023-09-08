import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

function NoticeRow({date,notice}){
    return (
        <tr>
            <th>{date}</th>
            <td>{notice}</td>
            <td>
                <Link to="/noticePage">
                <button className="btn btn-outline border-green-500 text-green-500">
                    বিস্তারিত 
                </button>
                </Link>
            </td>
        </tr>
    )
}


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

                <NoticeRow date={'17 August 2023'} notice={'আগামী ১৭ আগস্ট এইচএসসি পরীক্ষা শুরু'}/>
                <NoticeRow date={'15 September 2023'} notice={'আগামী ১৫ আগস্ট জাতীয় শোকদিবস পালন প্রসঙ্গে'}/>
                <NoticeRow date={'17 July 2023'} notice={'আগামী ১৫ আগস্ট জাতীয় শোকদিবস পালন প্রসঙ্গে'}/>
                <NoticeRow date={'17 August 2023'} notice={'আগামী ১৭ আগস্ট এইচএসসি পরীক্ষা শুরু'}/>

            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Notice;