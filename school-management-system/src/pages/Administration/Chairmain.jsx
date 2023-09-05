import React from 'react';
import LeadersDetailsCard from '../../components/leadersDetailsCard/LeaderDetailsCard';
import data from '../../allInformation/admins.json'

const Chairman = () => {
    const adminData = data.chairman;
    return (
        <div className='mt-5 flex justify-center'>
            {adminData.map((ele)=><LeadersDetailsCard imgLink={ele.imgLink} name={ele.name} designation={ele.designation} msg={ele.msg}/>)}
            
        </div>
    );
};

export default Chairman;