import React from "react";
import Approach from "./Approach";
import Vision from "./Vision";

const AboutUs = () =>{
 return(
    <div className="contaner pt-24">
    <div>
        <h1 className="text-center font-bold text-4xl "> About <span className="text-primary ">US</span> </h1>
    </div>
<Vision/>
<Approach/>


    </div>

 );
};
export default AboutUs;