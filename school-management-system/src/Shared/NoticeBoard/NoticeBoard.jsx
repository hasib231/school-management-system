import React from 'react';
import Marquee from "react-fast-marquee";

const NoticeBoard = () => {
    return (
      <div className="bg-green-500 py-2">
        <Marquee>
          <h3 className="text-white  text-2xl me-12">Exam Postponed</h3>
          <h3 className="text-white  text-2xl me-12">
            Class Six and Seven assessment test postponed
          </h3>
          <h3 className="text-white  text-2xl me-12">New routine - 2023</h3>
          <h3 className="text-white  text-2xl me-12">
            Class Nine and Ten model test new routine
          </h3>
        </Marquee>
      </div>
    );
};

export default NoticeBoard;