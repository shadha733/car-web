import React from "react";
import img from '../../assets/img/approch.jpg'

const Approach = () =>{

    return( 
    <div className=" custom-style flex flex-col-reverse flex-row justify-center gap-5 mt-14">
    <div className="w-full md:w-2/4 space-y-4 m-8">
    <h1 className="text-4xl font-bold"> Our <span className="text-primary">Approach</span></h1>
    <h2 className="text-l lg:text-2xl font-semibold">Empower individuals to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.</h2>
    <p className="text-sm lg:text-base">We are committed to designing vehicle solutions that prioritize environmental sustainability and energy efficiency.</p>
    <p className="text-sm lg:text-base">Through constant innovation, we ensure our services meet the evolving needs of modern transportation while reducing environmental impact.</p>
    <p className="text-sm lg:text-base"> Our approach blends advanced technology with customer-focused values to create a smarter, cleaner driving experience.</p>
    </div>
    <div className="w-full md:w-2/5">
    <img src={img} alt="img" className="rounded-lg max-h-[350px]" />
   
    </div>
    </div>

    );
};
export default Approach;