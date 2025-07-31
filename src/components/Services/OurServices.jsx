import React from "react";
import ServicesCard from "./ServicesCard";
import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";

const OurServices =()=>{
    const icon1=<GiCarWheel className="text-green-500 mx-auto" size={48}/>
    const icon2=<SiGoogleearthengine className="text-green-500 mx-auto" size={48}/>
    const icon3=<MdDesignServices className="text-green-500 mx-auto" size={48}/>
    const icon4=<IoSettings className="text-green-500 mx-auto" size={48}/>
    const icon5=<FaCar className="text-green-500 mx-auto" size={48}/>
    const icon6=<SiCoronaengine className="text-green-500 mx-auto" size={48}/>


    return(
<div className="container pt-10 ">
<div>
    <h1 className="text-4xl font-bold text-center"> <span className="text-primary"> Our</span>  Services</h1>
    
</div>
<div className="grid grid-col md:grid-cols-2 lg:grid-cols-3  sm:grid-col-1 mt-10 gap-5  ">
<ServicesCard icon={icon1} title="Tires & Wheels"/>
<ServicesCard icon={icon2} title="Exhaust System"/>
<ServicesCard icon={icon3} title="Cars Maintenance"/>
<ServicesCard icon={icon4} title="Brake Repairs"/>
<ServicesCard icon={icon5} title="Body Service"/>
<ServicesCard icon={icon6} title="Engine Services"/>
</div>
    
</div>



    );
}
export default OurServices;