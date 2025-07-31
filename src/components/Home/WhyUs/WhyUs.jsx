import React from "react";
import WhyUscard from "./WhyUscard";
import {  FaUsers, FaShieldAlt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";



const WhyUs = () => {
    const whyUsData = [
        {
            icon: <FaUsers className="text-green-500 mx-auto" size={48} />,
            title: "Satisfied Customers",
            description:"Thousands of happy clients trust us for our honest service and quality cars.",
        },
        {
            icon: <FaShieldAlt className="text-green-500 mx-auto" size={48} />,
            title: "Quality Guaranteed",
            description:"Every car is inspected and backed by our quality assurance.",
        },
        {

            icon: <FaTools className="text-green-500 mx-auto" size={48} />,
            title: "Expert Maintenance",
            description:"Our expert team provides top-notch maintenance services to keep your car in perfect condition.",
        }
    ];
    return (
        <div className=" flex flex-col justify-center container md:mt-10 py-8" >
        
         
    
                <h1 className=" font-bold text-4xl text-center mt-10  ">
        Why choose <span className=" text-primary">WheelsDeal </span>?
      </h1>

                 <div className=" grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-5  mt-10 ">

                    {whyUsData.map((item ) => ( 
                         
                            <WhyUscard 
                            key={item.title}
                            icon={item.icon}
                             title={item.title}
                              description={item.description} />
                        
                        
                        
                    ))}
                </div>
            </div>
            
        
        
   
    );
}
export default WhyUs;