import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import NoticeBoard from '../Shared/NoticeBoard/NoticeBoard';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;