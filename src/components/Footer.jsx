import React from "react";
import { Link } from "react-router-dom";

const Footer =() =>{
    return( 
    <footer className="bg-secondary text-white mt-10 ">
    <div className=" container mx-auto px-4 py-1 ">
    <div className="grid grid-cols-3 lg:px-28 md:px-16  md:grid-cols-3  gap-4 py-1  ">
     <div className=" ">

   
        <h3 className="font-semibold text-2xl pb-4 mt-4 text-center">WeelsDeal</h3>
        <p className="mb-2 text-sm lg:text-base mt-2 space-y-2 "> Your trusted partner for quality cars and expert auto services. Experience hassle-free buying and reliable car care with us.</p>
    </div>
    <div>
        <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0 text-center mt-4 space-y-2">Pages Links</h1>
        <div className=" flex flex-col  gap-2 text-sm font-medium  text-center mt-2">
              <Link to="/" className="hover:text-primary transition duration- 200 ease-linear">Home</Link>
                <Link to="/About" className="hover:text-primary transition duration- 200 ease-linear">About</Link>
                <Link to="/Cars" className="hover:text-primary transition duration- 200 ease-linear">Our Cars</Link>
                <Link to="/Services" className="hover:text-primary transition duration- 200 ease-linear">Services</Link>
                
              </div>
    </div>
    <div className="mt-4 space-y-2  ">
        <h1 className="text-lg font-semibold mb-3">Contact Us</h1>
        <p className="text-sm lg:text-base">Email: info@wheelsdeal.com</p>
        <p className="text-sm lg:text-base">Phone: +1 (555) 123-4567</p>
        <p className="text-sm lg:text-base">Location: 123 Main St, City, Country</p>
    </div>
    </div>

   
    <div className="text-left text-sm  text-gray-400 p-2">@{new Date().getFullYear()}wheelsdeal.All rights reserved.</div>
 </div>
    </footer>
    

    );
};
export default Footer;