import React from 'react';
import PersonDetailsCardFlat from '../../components/personCard/PersonDetailsCardFlat';
import data from '../../allInformation/staffs.json'
import PersonDetailsCard from '../../components/personCard/PersonDetailsCard';

const Staffs = () => {
    const adminData = data.staffs;
    return (
        <div className='mt-5 flex justify-center pb-10 pt-5'>
            <div className='w-fit lg:w-8/12'>
                <div className='grid justify-items-center  grid-cols-2 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
                    {adminData.map((ele) => (
                    <PersonDetailsCard imgLink={ele.imgLink} name={ele.name} designation={ele.designation} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Staffs;