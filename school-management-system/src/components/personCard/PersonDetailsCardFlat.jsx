import React from 'react';

const PersonDetailsCardFlat = ({imgLink,name,designation,phone}) => {
    return (
        <div className={`hero h-fit lg:w-fit w-full bg-base-200 border border-gray-600 mb-3 rounded-lg ${imgLink ? "" : 'pl-10 pr-10'}`}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                {imgLink && <img src={imgLink} className=" rounded-lg shadow-2xl lg:h-36 lg:w-36 object-cover" />}

                <div className='pt-5 lg:pt-0'>
                    <h3 className="text-3xl font-bold text-center lg:text-right">{name}</h3>
                    <p className='text-xl text-gray-600 font-bold text-center lg:text-right'>{designation}</p>
                    <p className="py-2 text-lg text-center lg:text-right">{phone}</p>
                
                </div>
            </div>
        </div>
    );
};

export default PersonDetailsCardFlat;