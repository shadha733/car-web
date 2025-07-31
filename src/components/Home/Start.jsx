import React from "react";
import img from '../../assets/img/honda.jpg';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Start = () => {
  const navigate =useNavigate();
  
  
    return (
        /* div for screen everything insid them*/
<div className="bg-secondary text-white ">
<div className=" custom-style h-screen w-full max-w-7xl mx-auto  flex-row  flex flex-col items-center   gap-10 sm:px-6 sm:py-12">

{/*div for text and image and button */}
<div className="  w-full px-4 md:w-1/2 space-y-5 mt-20 md:mt-0">

    <h1 className="text-4xl lg:text-6xl font-bold leading-tight"> Find Your Perfect Ride Today</h1>
    <p className="text-lg lg:text-2xl font-medium"> Over 1000+ New Cars Available Here</p>
    <p className="text-sm lg:text-base">Welcome to <span className="text-primary">WheelsDeal</span>, your trusted destination for quality car sales and professional repair services. 
  Whether you're looking to buy your next vehicle or need expert maintenance and repair, our experienced team is here to help. 
  We offer a wide selection of reliable cars, transparent pricing, and top-notch customer care, all in one place.</p>

  <div className="flex gap-8 px-4 py-2">
            <button onClick={()=>navigate("/About")}  className=" bg-primary py-1 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear">
              Explore More
            </button>
            <button onClick={()=>navigate("/Cars")}    className="border-2 border-primary py-1 px-4 rounded-md hover:bg-primary transition  hover:scale-95 duration-200 ease-linear">
              See Cars
            </button>



          </div>
</div>
    <div className="w-full md:w-1/2 px-4 ">
        <img src={img} alt="Start" className=" w-full max-h-[500px] object-contain rounded-lg "/>
</div>
</div>
 
    
   
        
</div>






    )
}
export default Start;
