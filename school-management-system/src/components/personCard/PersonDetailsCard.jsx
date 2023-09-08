import React from 'react';

const PersonDetailsCard = ({imgLink,name,designation}) => {
    const tempImgLink = 'https://www.seekpng.com/png/detail/40-409597_male-user-filled-icon-man-icon-png.png';
    return (
        <div className='w-full pl-2 pr-2 lg:w-9/12'>
            <div className="card w-fit bg-base-100 shadow-xl">
                <figure ><img className='h-48 w-48 object-cover' src={imgLink ? imgLink : tempImgLink} alt="Shoes" /></figure>
                <div className="flex flex-col px-2 py-5 items-center text-center">
                    <h2 className="card-title text-lg ">{name}</h2>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default PersonDetailsCard;