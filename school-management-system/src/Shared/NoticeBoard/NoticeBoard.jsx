import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const NoticeBoard = () => {
    return (
        <Link to="/notice">
            <div  className="bg-yellow-500 lg:py-2 py-1 text-blue-800 text-lg md:text-2xl">
                <Marquee>
                <h3 className="   me-12">Exam Postponed</h3>
                <h3 className="   me-12">
                    Class Six and Seven assessment test postponed
                </h3>
                <h3 className="   me-12">New routine - 2023</h3>
                <h3 className="   me-12">
                    Class Nine and Ten model test new routine
                </h3>
                </Marquee>
            </div>
      </Link>
    );
};

export default NoticeBoard;