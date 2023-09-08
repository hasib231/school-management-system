import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../allInformation/admins.json'

const LeaderCard = ({header,pic}) => {
    return (
        <div className='flex flex-col  gap-3 border border-gray-500 rounded-lg '>
            <div className='lg:text-xl text-lg font-semibold bg-gray-600 rounded-lg px-3 text-white py-2'>{header}</div>
            <div className='flex items-center px-4 pb-4 gap-10'>
                {pic ? <img className='lg:h-40 lg:w-40 h-24 w-24 object-cover rounded-full' src={pic}/> : <img className='lg:h-40 lg:w-40 h-24 w-24 object-cover' src={'https://www.seekpng.com/png/detail/40-409597_male-user-filled-icon-man-icon-png.png'}/>}
                <button className="btn btn-outline btn-info hover:bg-blue-500 px-5">বিস্তারিত</button>
            </div>
        </div>
    );
};

const TotalLeaderCard = () =>{
    const chairman = data.chairman[0];
    const principal = data.principals[0];
    console.log(chairman,principal);
    return (
        <div className='flex justify-center mt-10 '>
            <div className='flex gap-10 lg:flex-row flex-col justify-center w-full px-10'>
                <Link to={'/chairman'}><LeaderCard  header={'সভাপতির বাণী'} pic={chairman.imgLink}/></Link>
                <Link to={'/principal'}><LeaderCard header={'প্রধান শিক্ষকের বাণী'} pic={principal.imgLink}/></Link>
            </div>
        </div>
    )
}


export default TotalLeaderCard;