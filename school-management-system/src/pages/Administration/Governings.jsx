import React from 'react';
import PersonDetailsCard from '../../components/personCard/PersonDetailsCard';
import data from '../../allInformation/admins.json'

const Governing = () => {
    const adminData = data.governing;
    return (
        <div className='mt-5 flex flex-col pb-10 pt-5'>
            <div className='grid justify-items-center  grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {adminData.map((ele) => (
                <PersonDetailsCard imgLink={ele.imgLink} name={ele.name} designation={ele.designation} />
                ))}
            </div>
        </div>
    );
};

export default Governing;