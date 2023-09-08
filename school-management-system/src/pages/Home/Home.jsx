import React from 'react';
import Slider from './Slider';
import NoticeBoard from '../../Shared/NoticeBoard/NoticeBoard';
import AboutUs from './AboutUs/AboutUs';
import TotalLeaderCard from './LeaderCard';
import Contacts from '../contacts/Contacts';
import OfficialLink from './OfficialLink';
import TeachersCardSlide from './TeachersCardSliding';

const Home = () => {
    return (
      <div>
            <NoticeBoard></NoticeBoard>
            <Slider></Slider>
            <TotalLeaderCard></TotalLeaderCard>
            <AboutUs></AboutUs>
            <TeachersCardSlide></TeachersCardSlide>
            <OfficialLink></OfficialLink>
            <Contacts></Contacts>
      </div>
    );
};

export default Home;