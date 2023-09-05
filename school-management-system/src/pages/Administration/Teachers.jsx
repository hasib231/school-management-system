import React from 'react';
import PersonDetailsCard from '../../components/personCard/PersonDetailsCard';
import data from '../../allInformation/admins.json'

const Teachers = () => {
    const adminData = data.governing;
    return (
        <div className='mt-5 flex flex-col pb-10 pt-5'>
            <h1> teachers </h1>
        </div>
    );
};

export default Teachers;