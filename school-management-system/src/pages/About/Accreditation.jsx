import React, { useState } from "react";

const images = [
    "https://i.ibb.co/TMtqZ6k/image.png"
];

 

const Accreditation = () => {
    
  return (
    <div className="container flex flex-col mx-auto md:px-20 py-12 px-3 ">
      <h1 className="md:text-3xl text-xl font-bold text-center mb-8">স্বীকৃতি</h1>
      
      <div className="flex flex-col shadow-lg">
        {images.map((ele)=><img className="w-full h-fit" src={ele}/>)}
      </div>
    </div>
  );
};

export default Accreditation;
