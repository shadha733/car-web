import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurCar from "../components/Car/OurCar";

const Cars = () => {
  return (
    <>
    <div className="text-2xl font-bold text-center text-blue-600 ">
         ✅<h1>This is the Cars page!</h1>
      </div>
      
        <OurCar/>
        
        <Footer/>
    </>
  );
}
export default Cars;