import React from "react";
import img from "../../assets/img/mission.jpg"; // Adjust the path as necessary


const OurMission = () => {
    return (
        <div className="container mt-0 mb-10">

         
          <div className="font-bold text-5xl text-center -mt-10 mb-10" style={{marginTop: "30px"}}>
          <h1 >Our <span className="text-primary">Mission</span></h1></div>       

      <div className=" flex flex-col md:flex-row items-start gap-10">

         {/* Image section */}
         <div className="w-full md:w-1/2 ">
            
         <img src={img} alt="Our Mission" className="  rounded-lg max-h-[330px] "style={{float:"left"}}   />
                
                


        <div className=" md:w-1/2 space-y-4   " style={{float:"right"}}>
            
            <h1 className="font-bold text-primary text-xl lg:text-3xl mb-2"> To create a community where every journey is extraordinary</h1>
            <h2 className=" font-semibold text-lg lg:text-2xl ">Empower individuals to achieve sustainable mobility solutions and
            inspire a positive impact on the environment.</h2>
            <p className=" text-sm lg:text-base  ">
                At  <span className="text-primary">WheelsDeal</span>, our mission is to provide the best selection of vehicles at unbeatable prices, ensuring exceptional customer service and a seamless car-buying experience.
            </p>
            <p className=" text-sm lg:text-base">
                We are committed to quality, transparency, and customer satisfaction, making your journey with us a memorable one.</p>

            <p className="text-sm lg:text-base">  Our mission goes beyond selling and servicing vehicles, it's about building long-term relationships with our customers based on honesty, reliability, and care. We understand that every vehicle represents a milestone, a necessity, or even a dream. That's why we prioritize listening to your needs, offering expert guidance, and delivering solutions that align with your lifestyle and budget. With a focus on sustainable practices and community engagement,<span className="text-primary">WheelsDeal</span>  is dedicated to shaping a future where mobility is accessible, responsible, and truly customer-centered.</p>
            
  </div>
</div>

               
           </div>
        </div>
        
    
        
        
        
        
    );
}
export default OurMission;