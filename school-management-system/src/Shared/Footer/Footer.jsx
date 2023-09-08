import React from 'react';
import logo_sm from "../../assets/logo_sm.png"
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaAngleDoubleRight,
  FaHome,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-200 text-base-content md:flex md:justify-around">
        <nav>
          <header className=" text-2xl font-bold mb-5 text-slate-600">
            CONTACT
          </header>
          <a className="flex items-center font-bold text-slate-600 mb-2">
            <div className="me-2">
              <FaHome size={15}></FaHome>
            </div>
            Kanthal Bari High School
          </a>
          <a className="flex items-center font-bold text-slate-600 mb-2">
            <div className="me-2">
              <FaMapMarkerAlt size={15}></FaMapMarkerAlt>
            </div>
            Zummahat, Ulipur, Kurigram
          </a>
          <a className="flex items-center font-bold text-slate-600 mb-2">
            <div className="me-2">
              <FaPhoneAlt size={15}></FaPhoneAlt>
            </div>
            +8801757832293
          </a>
          <a className="flex items-center font-bold text-slate-600 mb-2">
            <div className="me-2">
              <FaPhoneAlt size={15}></FaPhoneAlt>
            </div>
            +8801309122589
          </a>
          <a className="flex items-center font-bold text-slate-600 mb-2">
            <div className="me-2">
              <FaEnvelope size={15}></FaEnvelope>
            </div>
            s.122589kbh@gmail.com
          </a>
        </nav>

        <nav>
          <header className=" text-2xl font-bold mb-5 text-slate-600">
            FEATURED LINKS
          </header>

          <a className=" font-bold text-slate-600 link link-hover">
            <Link to="" className="flex">
              <div className="me-2">
                <FaAngleDoubleRight size={15}></FaAngleDoubleRight>
              </div>
              Education Board
            </Link>
          </a>
          <a className=" font-bold text-slate-600 link link-hover">
            <Link to="" className="flex">
              <div className="me-2">
                <FaAngleDoubleRight size={15}></FaAngleDoubleRight>
              </div>
              Dhaka Education Board
            </Link>
          </a>
          <a className=" font-bold text-slate-600 link link-hover">
            <Link to="" className="flex">
              <div className="me-2">
                <FaAngleDoubleRight size={15}></FaAngleDoubleRight>
              </div>
              Ministry of Education
            </Link>
          </a>
          <a className=" font-bold text-slate-600 link link-hover">
            <Link to="" className="flex">
              <div className="me-2">
                <FaAngleDoubleRight size={15}></FaAngleDoubleRight>
              </div>
              Banbeis
            </Link>
          </a>
          <a className=" font-bold text-slate-600 link link-hover">
            <Link to="" className="flex">
              <div className="me-2">
                <FaAngleDoubleRight size={15}></FaAngleDoubleRight>
              </div>
              Directorate of Secondary & <br /> Higher Education
            </Link>
          </a>
          <a className=" font-bold  text-slate-600 link link-hover">
            <Link to="" className="flex">
              <div className="me-2">
                <FaAngleDoubleRight size={15}></FaAngleDoubleRight>
              </div>
              NCTB
            </Link>
          </a>
        </nav>

        <nav>
          <header className=" text-2xl font-bold mb-5 text-slate-600">
            SOCIAL LINKS
          </header>
          <a className="flex items-center font-bold text-slate-600 mb-2">
            <div className="me-2">
              <FaFacebook size={15}></FaFacebook>
            </div>
            Facebook
          </a>
          <a className="flex items-center font-bold text-slate-600 mb-2">
            <div className="me-2">
              <FaYoutube size={15}></FaYoutube>
            </div>
            Youtube
          </a>
        </nav>
      </footer>
    );
};

export default Footer;