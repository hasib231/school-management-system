import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from '../../allInformation/teachers.json';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


const PersonDetailsCard = ({imgLink,name,designation}) => {
    const tempImgLink = 'https://www.seekpng.com/png/detail/40-409597_male-user-filled-icon-man-icon-png.png';
    return (
        <div className='w-full pl-2 pr-2 lg:w-9/12'>
            <div className="card w-fit bg-base-100 shadow-xl">
                <figure ><img className='h-48 w-48 object-cover' src={imgLink ? imgLink : tempImgLink} alt="Person" /></figure>
                <div className="flex flex-col px-2 py-5 items-center text-center">
                    <h2 className="card-title text-lg ">{name}</h2>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    );
};



const TeachersCardSlide = () => {
    const navigate = useNavigate();
    const teachers = data.teachers;
    return (

        <div className='flex flex-col gap-10'>
            <div className='text-center text-2xl lg:text-3xl font-bold'>শিক্ষকমন্ডলী</div>
            <div className="w-full h-fit overflow-x-scroll flex justify-center"> {/* onClick={()=>navigate('/teachers')} */}
                
                    {/* {teachers.map((ele)=> (
                    <div className="w-fit h-fit flex-shrink-0 flex-grow-0 rounded-md">
                        <PersonDetailsCard designation={ele.designation} imgLink={ele.imgLink} name={ele.name}/>
                    </div>
                    ))} */}
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        >

                        {teachers.map((ele)=> (
                            <SwiperSlide>
                                <div className='flex justify-center pb-10'>
                                    <div className="w-fit h-fit rounded-md ">
                                        <PersonDetailsCard designation={ele.designation} imgLink={ele.imgLink} name={ele.name}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </div>
    )
}




export default TeachersCardSlide;