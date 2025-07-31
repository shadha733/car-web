import React from "react";

const CarCard = ({id,img,name,description,Price})=>{
    return(
        <div className="border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear  flex flex-col justify-between h-full p-4  " key={id}  >
        <img src={img} className="w-4/2 h-45  "/>
            <h1 className="font-bold text-xl pl-5 text-primary text-center">{name}</h1>
            <p className="pl-5 text-sm lg:text-base">{description}</p>
            
            <div className=" text-center  ">
                <h3 className=" text-green-600 font-bold mt-2 mt-0 ">{Price}</h3>
            </div>
            </div>
        

    );
}
export default CarCard;