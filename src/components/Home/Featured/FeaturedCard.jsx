import React from "react";


const FeaturedCar = ({id,img,price, name, description}) => {
    return (
        <div className=" border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2  hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear"  key={id}>
          
        <div>
        {<img src={img} alt={name} className=" rounded-t-xl w-full h-64 object-cover " />}
      </div>
      <div className="flex flex-col items-center justify-center ">
      <h1 className="font-semibold text-xl text-primary pt-2 ">{name}</h1>
       <div className="flex gap-2 items-center justify-center">
        <p className="text-lg font-medium "> price  {price}</p>
        </div>
       
        <h2 className="text-sm text-gray-600 mt-2 ">{description}</h2>
        </div>
        </div>
    );
}
export default FeaturedCar;