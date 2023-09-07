import React from 'react';
import logo_sm from "../../assets/logo_sm.png"

const Header = () => {
    return (
      <div className='flex justify-between'>
        <div className="flex md:ms-28 py-2 pl-10 md:pl-0 ">
            <div>
            <img className="w-14 md:w-24" src={logo_sm} alt="" />
            </div>
            <div className="ms-3">
            <h1 className="font-bold md:font-medium text-1xl md:text-3xl">
                Kanthal Bari High School
            </h1>
            <h6 className="text-sm font-semibold">Ulipur, Kurigram</h6>
            <h6 className="text-xs md:font-semibold">ESTD: 2015</h6>
            </div>
        </div>
        <div className='text-lg font-semibold lg:flex flex-col justify-start pt-3 pr-24 hidden'>
            <div>EINN: 129012</div>
            <div>MPO-code: 4232</div>
        </div>
      </div>
    );
};

export default Header;