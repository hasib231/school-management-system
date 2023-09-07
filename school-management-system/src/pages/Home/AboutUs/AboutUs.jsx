import React from "react";
import './AboutUs.css'
import aboutUsImg from "../../../assets/school-cartoon.jpg"

const AboutUs = () => {
  return (
    <div className="bg-fixed latest-news p-8 md:p-20 pt-10 relative text-white my-20 ">
      <div className="relative z-10">
        <h1 className="font-bold text-3xl text-center">প্রতিষ্ঠানের ইতিহাস</h1>
        <div className=" md:flex justify-center items-center pb-20 pt-12 md:px-36 px-0">
          <div>
            <img
              className=" rounded-lg"
              src={aboutUsImg}
              alt=""
            />
          </div>
          <div className="md:ml-10">
            
            <p className="text-md text-justify pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita hic dolorem, iusto vel suscipit nam excepturi debitis
              magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
              consectetur blanditiis laboriosam fugiat ea quia similique quam
              nisi reprehenderit numquam magnam nemo vitae cupiditate, atque
              maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
