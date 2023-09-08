import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const NoticeBoard = () => {
    return (
        <Link to="/notice">
            <div  className="bg-yellow-500 lg:py-2 py-1 text-blue-800 text-lg md:text-2xl">
                <Marquee>
                <h3 className="   me-12">পরীক্ষা স্থগিত</h3>
                <h3 className="   me-12">
                    প্রজেক্ট
                </h3>
                <h3 className="   me-12">নতুন রুটিন - ২০২৩</h3>
                <h3 className="   me-12">মডেল টেস্ট </h3>
                <h3 className="   me-12">অর্ধ বার্ষিক পরীক্ষার ফলাফল </h3>
                </Marquee>
            </div>
      </Link>
    );
};

export default NoticeBoard;