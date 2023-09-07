import React from 'react';
import logo_sm from "../../assets/logo_sm.png"

const Header = () => {
    return (
      <div className="flex ms-28 py-2">
        <div>
          <img className="w-14 md:w-24" src={logo_sm} alt="" />
        </div>
        <div className="ms-3">
          <h6 className="text-xs md:font-semibold">ESTD: 2015</h6>
          <h1 className="font-medium text-1xl md:text-3xl">
            Kanthal Bari High School
          </h1>
          <h6 className="text-xs md:font-semibold">Ulipur, Kurigram</h6>
        </div>
      </div>
    );
};

export default Header;