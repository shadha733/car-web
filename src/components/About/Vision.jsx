import React from "react";
import img from '../../assets/img/vision.jpg'

const Vision =() =>{
    return(
        <div className="container ">

<div className=" custom-style flex flex-row justify-center md:flex-row gap-2 mt-16 items-start ">

<div className="  w-full md:w-2/5 m-10">
<img src={img} alt="Vision" className= "rounded-lg max-h-[350px] object-cover  " ></img> </div>

<div className=" w-full  md:w-2/5 space-y-4  " >

<h1 className="text-4xl font-bold ">Our <span className="text-primary">Vision</span></h1>
<h2 className="lg:text-2xl  text-lg font-semibold"> Empower individuals to achieve sustainable mobility solutions and
 inspire a positive impact on the environment.</h2>
<p className="text-sm lg:text-base ">
Our company strives to provide eco-friendly and innovative car solutions that align with modern sustainability goals.
</p>
<p className="text-sm lg:text-base"> Through our services, we promote responsible driving habits and energy-efficient technologies.</p>
<p className="text-sm lg:text-base">Together, we can build a cleaner, smarter future for mobility and transportation.</p>


</div>
</div>
</div>











    );
};
export default Vision;