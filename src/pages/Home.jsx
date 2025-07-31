import React from "react";
import Navbar from '../components/Navbar';
import Start from "../components/Home/Start";
import Featured from "../components/Home/Featured/Featured";
import WhyUs from "../components/Home/WhyUs/WhyUs";
import OurMission from "../components/Home/OurMission";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
        <Navbar />
        <Start />
        <Featured />
        <WhyUs />
        <OurMission />
        <Footer/>
    </>
    
  );
}
export default Home;