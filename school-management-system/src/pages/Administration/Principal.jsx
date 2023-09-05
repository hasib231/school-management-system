import React from 'react';
import LeadersDetailsCard from '../../components/leadersDetailsCard/LeaderDetailsCard';
import data from '../../allInformation/admins.json'

const Principal = () => {
    const adminData = data.principals;
    return (
        <div className='mt-5 flex justify-center pb-10'>
            <div className='flex flex-col items-center gap-10 '>
                {adminData.map((ele)=><LeadersDetailsCard imgLink={ele.imgLink} name={ele.name} designation={ele.designation} msg={ele.msg}/>)}
            </div>
        </div>
    );
};

export default Principal;