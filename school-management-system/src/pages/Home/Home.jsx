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
<<<<<<< HEAD
=======
            <TeachersCardSlide></TeachersCardSlide>
>>>>>>> 2672d1630b06de8e3bd15ea031094e5be209441c
            <OfficialLink></OfficialLink>
            <Contacts></Contacts>
      </div>
    );
};

export default Home;