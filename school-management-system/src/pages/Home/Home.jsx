import React from 'react';
import Slider from './Slider';
import NoticeBoard from '../../Shared/NoticeBoard/NoticeBoard';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
      <div>
            <NoticeBoard></NoticeBoard>
        <Slider></Slider>
        <AboutUs></AboutUs>
      </div>
    );
};

export default Home;