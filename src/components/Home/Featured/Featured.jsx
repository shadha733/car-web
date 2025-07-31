import React from "react";
import FeaturedCar from  "./FeaturedCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Featured = () => {

    const carData = [
        { id: 1, 
          name: "Honda",
          img: "src/assets/img/ram.jpg",
          Price: "$26,000",
          description: "2024 • Honda • Automatic • 35 MPG.",
         },

        { id: 2, 
          name: "Ram",
          img:"src/assets/img/honda.jpg" ,
          Price: "$30,000",
          description: "2025 • Ram • Automatic • 37 MPG .",
         },
        { id: 3, 
          name: "Nissan",
          img: "src/assets/img/nissan.jpg",
          Price: "$22,000",
          description: "2024 • Nissan • Automatic • 35 MPG.",
         },
    
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <div className="container mt-10">
        <h1 className="text-4xl font-bold  text-center">Featured <span className="text-primary">Cars</span> </h1> 
        <div className="mt-8">
            
            <Slider {...settings}>
                {carData.map(car => (
                    <FeaturedCar 
                    key={car.id} 
                    name={car.name}
                    img={car.img}
                    price={car.Price}
                    description={car.description}
                    
                    
                    
                     />
                ))}
            </Slider>
        </div>
        </div>

    );
}
export default Featured;