import React from 'react';

const LeadersDetailsCard = ({imgLink,name,designation,msg}) => {
    return (
        <div className='w-full pl-1 pr-1 lg:w-9/12'>
            <div className="card w-full bg-base-100 shadow-2xl pt-2">
                <figure><img src={imgLink} alt="Picture" /></figure>
                <div className="card-body pt-10">

                    <div className='pb-5 flex flex-col items-center gap-2 text-center'>
                        <h2 className="card-title text-2xl">{name}</h2>
                        <h2 className="card-title text-xl text-gray-500">{designation}</h2>
                    </div>

                    <p className='text-justify'>{msg}</p>
                </div>
            </div>
        </div>
    );
};

export default LeadersDetailsCard;