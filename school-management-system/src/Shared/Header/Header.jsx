import React from 'react';
import logo_sm from "../../assets/logo_sm.png"

const Header = () => {
    return (
      <div className="flex ms-28 py-2">
        <div>
          <img className="w-24" src={logo_sm} alt="" />
        </div>
        <div className="ms-3">
          <h6 className="font-semibold">ESTD: 2015</h6>
          <h1 className="font-medium text-3xl">Kanthal Bari High School</h1>
          <h6 className="font-semibold">Ulipur, Kurigram</h6>
        </div>
      </div>
    );
};

export default Header;