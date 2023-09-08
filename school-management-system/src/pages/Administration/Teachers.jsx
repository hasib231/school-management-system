import React from 'react';
import PersonDetailsCardFlat from '../../components/personCard/PersonDetailsCardFlat';
import data from '../../allInformation/teachers.json'
import PersonDetailsCard from '../../components/personCard/PersonDetailsCard';

const Teachers = () => {
    const adminData = data.teachers;
    return (

        <div className='mt-5 flex justify-center pb-10 pt-5'>
            <div className='w-fit lg:w-8/12'>
                <div className='grid justify-items-center  grid-cols-2 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                    {adminData.map((ele) => (
                    <PersonDetailsCard imgLink={ele.imgLink} name={ele.name} designation={ele.designation} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teachers;