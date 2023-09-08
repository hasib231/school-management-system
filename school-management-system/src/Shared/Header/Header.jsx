import React from 'react';
import logo_sm from "../../assets/logo_sm.png"

const Header = () => {
    return (
      <div className='flex justify-between'>
        <div className="flex md:ms-28 py-2 pl-10 md:pl-0 ">
            <div>
            <img className="w-16 md:w-28" src={logo_sm} alt="" />
            </div>
            <div className="ms-3 flex flex-col gap-1">
                <h1 className="font-bold md:font-medium text-1xl md:text-3xl">
                    কাঁঠাল বাড়ী উচ্চ বিদ্যালয়
                </h1>
                <h6 className="text-sm font-semibold">জুম্মাহাট,উলিপুর,কুড়িগ্রাম</h6>
                <h6 className="text-xs md:font-semibold">স্থাপিতঃ ১৯৪৬</h6>
            </div>
        </div>
        <div className='text-lg  lg:flex flex-col text-right pt-3 pr-24 hidden'>
            <div>MPO-code: 8809011302</div>
            <div>EINN: 122589</div>
        </div>
      </div>
    );
};

export default Header;