import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function ContactsCard({element,text1,text2}){

    return(
        <div className="flex mt-2 hover:bg-yellow-200 px-8 py-5 rounded-lg">
            <div className="rounded-full border-2 border-green-500 p-5 text-green-500 shadow-lg">
              {element}
            </div>
            <div className="ms-5 flex flex-col justify-center">
              <h1 className="font-bold md:text-2xl">{text1}</h1>
              <h1 className="font-bold">{text2}</h1>
            </div>
          </div>
    )
}

const Contacts = () => {
     
    return (
      <div>
        <div className="text-center my-12 font-bold text-3xl text-green-500">
          যোগাযোগ
        </div>

        <div className="flex lg:flex-row w-10/12 md:w-10/12 mx-auto md:justify-center  flex-col lg:gap-10 gap-5">
            <ContactsCard element={<FaMapMarkerAlt size={35}></FaMapMarkerAlt>} text1={"ঠিকানা"} text2={"উলিপুর, কুড়িগ্রাম"}/>
            <ContactsCard element={<FaEnvelope size={35}></FaEnvelope>} text1={"ইমেইল"} text2={"kanthalBari@gmail.com"}/>
            <ContactsCard element={<FaPhoneAlt size={35}></FaPhoneAlt>} text1={"মোবাইল"} text2={"০১৭২৮৬৪২৩৪৫"}/>
        </div>

        <div className="my-20 md:w-10/12 w-11/12 mx-auto border-1 border-gray-700 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.711637501275!2d89.5877605673819!3d25.846045698530475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2cf5bb8153fe9%3A0x149b5dec334d2124!2sKanthal%20Bari%20B%20L%20High%20School!5e0!3m2!1sen!2sbd!4v1694126506522!5m2!1sen!2sbd"
            width="100%"
            height="600"
            style={{ border: "0" }}
            allowfullscreen="true"
            
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
}

export default Contacts;