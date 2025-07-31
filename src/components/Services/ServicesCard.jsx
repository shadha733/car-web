import React from "react";

const ServicesCard =({icon,title})=>{
    return(
<div className="text-center p-4 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out rounded-md flex flex-col justify-between">{icon}

    <h1 className=" sm:text-3xl text-2xl break-words font-bold text-primary"> {title}</h1>
    <p className=" text-sm mt-4">We offer reliable and professional service to keep your vehicle running smoothly and safely on the road. Our experienced technicians use advanced tools and quality parts to ensure top performance, whether it's routine maintenance or complex repairs. Your satisfaction and safety are our top priorities.</p>

</div>


    );
}
export default ServicesCard;