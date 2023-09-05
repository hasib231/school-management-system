import React from 'react';
import PersonDetailsCardFlat from '../../components/personCard/PersonDetailsCardFlat';
import data from '../../allInformation/staffs.json'

const Staffs = () => {
    const adminData = data.staffs;
    return (
        <div className='mt-5 flex flex-col pb-10 pt-5 pl-2 pr-2'>
            <div className='flex flex-wrap justify-center gap-x-5 items-center'>
                {adminData.map((ele, index) => (
                    <React.Fragment key={index}>
                        <PersonDetailsCardFlat
                        imgLink={ele.imgLink}
                        designation={ele.designation}
                        name={ele.name}
                        phone={ele.phone}
                        />
                        {(index + 1) % 2 === 0 && <div className='w-full h-0'></div>}
                    </React.Fragment>
                ))}
            </div>
    </div>
    );
};

export default Staffs;