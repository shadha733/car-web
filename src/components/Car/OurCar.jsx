import React from "react";
import CarCard from "./CarCard";



const OurCar = () =>{
    const CarsData=[{
    
id: 1, 
          name: "Honda",
          img: "src/assets/img/honda.jpg",
          Price: "$26,000",
          description: "2024 • Honda • Automatic • 35 MPG.",
         },

        { id: 2, 
          name: "Ram",
          img: "src/assets/img/ram.jpg",
          Price: "$30,000",
          description: "2025 • Ram • Automatic • 37 MPG .",
         },
        { id: 3, 
          name: "Nissan",
          img: "src/assets/img/nissan.jpg",
          Price: "$22,000",
          description: "2024 • Nissan • Automatic • 35 MPG.",
        },
         { id: 4, 
          name: "Mercedes",
          img: "src/assets/img/Mercedes.png",
          Price: "$26,000",
          description: "2024 • Mercedes • Automatic • 35 MPG.",
         },

        { id: 5, 
          name: "Cadillac Escalade",
          img: "src/assets/img/Cadillac Escalade.png",
          Price: "$30,000 ",
          description: "2023 • Cadillac Escalade • Automatic • 37 MPG .",
         },
        { id: 6, 
          name: "BMW ",
          img: "src/assets/img/BMW 3 Series.png",
          Price: "$30,000",
          description: "2024 •BMW 3  • Automatic • 35 MPG.",


    }]
    return(
        <div className="container pt-18">
        <div className="">
            <h1 className="font-bold text-4xl text-center pb-5 mt-4">Our <span className=" text-primary">Cars</span></h1>
        </div>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3  gap-5 mt-4 ">
        {CarsData.map((item)=>{
            return(
                <CarCard
                    key={item.id}
                    name={item.name}
                    img={item.img}
                    Price={item.Price}
                    description={item.description}

                />

            );
            

        })}
        
        </div>
        </div>
        
    );
}
export default OurCar;