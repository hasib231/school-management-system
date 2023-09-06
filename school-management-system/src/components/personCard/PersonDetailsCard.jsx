import React from 'react';

const PersonDetailsCard = ({imgLink,name,designation}) => {
    return (
        <div className='w-full pl-2 pr-2 lg:w-9/12'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure ><img className='md:h-48 md:w-48 md:object-cover' src={imgLink} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{designation}</p>
                </div>
                </div>
        </div>
    );
};

export default PersonDetailsCard;