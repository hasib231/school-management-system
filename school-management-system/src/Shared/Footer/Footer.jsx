import React from 'react';
import logo_sm from "../../assets/logo_sm.png"

const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-200 text-base-content ">
        <aside>
          <img className='w-20 h-20 mb-5' src={logo_sm}/>
          <p className='font-bold'>
            Kanthal Bari High School
            <br />
            Ulipur, Kurigram
          </p>
        </aside>
        <nav>
          <header className="footer-title">Header Link</header>
          <a className="link link-hover">Chairman</a>
          <a className="link link-hover">Principal</a>
          <a className="link link-hover">Students</a>
          <a className="link link-hover">Notice</a>
        </nav>
        <nav>
          <header className="footer-title">Usefull Link</header>
          <a className="link link-hover">Dinajpur Board</a>
          <a className="link link-hover">Edu Ministry</a>
          <a className="link link-hover">Board Result</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;