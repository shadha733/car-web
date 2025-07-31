import React from "react";

const WhyUscard = ({icon,title, description}) => {
    return (
        <div className=" space-y-4 p-1 bg-slate-100  rounded-xl text-center hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear flex flex-col justify-between ">
        <div className="mb-4">{icon}</div>
            <h1 className="text-primary text-3xl font-bold ">{title}</h1>
            <p className="text-lg text-gray-700 mb-6">{description}
                We offer the best selection of cars with unbeatable prices and exceptional customer service.
            </p>
        </div>
        
    );
}
export default WhyUscard;
