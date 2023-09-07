import React from 'react';
import Slider from './Slider';
import NoticeBoard from '../../Shared/NoticeBoard/NoticeBoard';

const Home = () => {
    return (
      <div>
            <NoticeBoard></NoticeBoard>
            <Slider></Slider>
      </div>
    );
};

export default Home;